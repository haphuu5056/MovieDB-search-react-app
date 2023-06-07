import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import {AiOutlineSearch} from 'react-icons/ai'
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Avengers');
  useEffect(()=>{
    getMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query,movies]);

  const API_KEY = '03b5da5bcdf40345fbf99c48f9c072f3';
  const getMovies = ()=>{
    const movies =  fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&include_adult=false`)
    .then(response => response.json())
    .then(data => setMovies(data.results));

    return movies;
  }

  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto space-y-4 px-4">
        <div className="w-full shadow-md flex justify-between items-center px-10 mt-4 p-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" border-none outline-none text-lg flex-1"
          />
          <AiOutlineSearch size={30} cursor={"pointer"} />
        </div>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
