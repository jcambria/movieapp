import {useEffect} from 'react'

// a5ba9415


const API_URL = 'http://www.omdbapi.com/?apikey=a5ba9415&'



const App = () => {

    const getMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);

    }


    useEffect(() => {
        getMovies('Batman');

    }, [])


  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default App;
