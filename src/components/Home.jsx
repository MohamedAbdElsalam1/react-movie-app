import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css"

export const Home = () => {

  const [Movies, setMovies] = useState([]);

  const [q, setQ] = useState("");

  console.log(Movies)

  const getMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9')
      .then(res => res.json())
      .then(json => {
        const filteredMovies = json.results.filter(movie => {
          return movie.media_type === "movie" || movie.media_type === "tv" || movie.media_type === "person";
        });
        setMovies(filteredMovies);
      });
  };


  const getSearchedMovies = () => {
    if (q === "") {
      getMovies();
    } else {
      return fetch(`https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${q}`)
        .then(res => res.json())
        .then(json => {
          const searchedMovies = json.results.filter(movie => {
            return movie.media_type === "movie" || movie.media_type === "tv" || movie.media_type === "person";
          });
          setMovies(searchedMovies);
        });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getSearchedMovies();
  }, [q]);

  return (
    <>

      <div className="search-wrapper">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
      </div>


      <div className="movies-list">
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
    </>
    
  )
}

