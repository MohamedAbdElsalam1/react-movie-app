import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Movies = () => {

  const [Movies, setMovies] = useState([]);

  const getMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9')
      .then(res => res.json())
      .then(json => {
        const filteredMovies = json.results.filter(movie => {
          return movie.media_type === "movie";
        });
        setMovies(filteredMovies);
      });
  };

 

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-list mt-5">
    {Movies.map((movie) => {
      return (
        <div className="movie-item" key={movie.id}>
          <Link className="link" to={`/details/${movie.media_type}/${movie.id}`}>
            <div className="img-container">
              <img src={'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + movie.backdrop_path} alt="image" />
            </div>
            <div className="movie-content">
              <p>{movie.original_title || movie.original_name}</p>
            </div>
          </Link>
        </div>
      );
    })}
  </div>
  )
}




