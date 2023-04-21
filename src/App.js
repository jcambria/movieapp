import { useEffect } from "react";

import "./App.css";

import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=a5ba9415&";


const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}



const App = () => {
  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    getMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
            <div>
                {movie1.Year}
            </div>
            <div>
                <img src={ movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
            </div>
            <div>
                <span>
                    {movie1.Type}
                    <h3> {movie1.Title} </h3>
                </span>
            </div>
        </div>


      </div>
    </div>
  );
};

export default App;
