import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import MovieDisplay from './components/MovieDisplay/MovieDisplay'
import axios from 'axios';

function App() {
  const baseURL: String = "http://www.omdbapi.com/?apikey=";
  const apiKey: String = import.meta.env.VITE_API_KEY || "";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm: String) => {
    try {
      const response = await axios.get(`${baseURL}${apiKey}&t=${searchTerm}`);

      setMovie(response.data);
    } catch (error: unknown) {
      console.error((error as Error).message);
    }
  }

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </>
  )
}

export default App
