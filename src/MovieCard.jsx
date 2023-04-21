import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
    <div>
        {movie.Year}
    </div>
    <div>
        <img src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}></img>
    </div>
    <div>
        <span>
            {movie.Type}
            <h3> {movie.Title} </h3>
        </span>
    </div>
</div>
  )
}

export default MovieCard
