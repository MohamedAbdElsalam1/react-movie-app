import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import './Details.css'

export const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState({})

  console.log(params)

  const getSingleMovie = () => {
    return fetch(`https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`)
      .then(res => res.json())
      .then(json => setMovie(json))
  }

  useEffect(() => {
    getSingleMovie()
    console.log(movie)
  }, [])


  return (
    <>
      <div className="details">
        <div className="img-container-details">
          <img src={'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/' + movie.backdrop_path} alt="image" />
        </div>
        <div className="movie-content">
          <div className="poster-container">
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
          </div>
          <div className="description">
            <p className="date">{movie.release_date || movie.first_air_date}</p>
            <p className="title">{movie.original_title || movie.original_name}</p>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}


// release_date overview original_title poster_path vote_average
// https://image.tmdb.org/t/p/w500/

