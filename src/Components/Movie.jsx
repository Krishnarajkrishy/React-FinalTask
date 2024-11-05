import axios from "axios";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import MoviesList from "./MoviesList";
import MoviesInfo from "./MoviesInfo";



const Movie = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [selectedMovie,setSelectedMovie] = useState('')
  
  const handleInput = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleClick = async () => {
    try{
    const responce = await axios.get(
      `https://www.omdbapi.com/?apikey=3020adb&s=${searchQuery}`
    )
      setMoviesList(responce.data.Search || [])
    } catch (error) {
      console.log('fetching data error')
      }
  }


  return (
    <div className="h-screen p-4 overflow-y-auto">
      <div className="md:flex md:flex-row md:justify-evenly flex flex-col items-center w-full h-1/6">
        <div>
          <h1 className="text-3xl font-semibold italic ">
            React Movie Search App
          </h1>
        </div>
        <div className="flex items-center w-full md:w-1/2 justify-center px-2 py-2 bg-white rounded-xl">
          <span className="text-3xl dark: text-black ">
            <IoSearch />
          </span>
          <input
            className="px-4 py-2 rounded w-full dark:text-black border-none outline-none "
            type="text"
            value={searchQuery}
            onChange={handleInput}
            name="movies"
            placeholder="Search Movie"
          />
          <button
            type="button"
            onClick={handleClick}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg active:bg-blue-900"
          >
            Search
          </button>
        </div>
      </div>
      {selectedMovie && <MoviesInfo
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />}
      <div className="flex flex-wrap justify-evenly items-center gap-4 mt-4 w-full">
        {moviesList.map((movie) => {
          return <MoviesList
            key={movie.imdbID}
            movie={movie}
            setSelectedMovie={setSelectedMovie} />;
        })}
      </div>
    </div>
  );
}

export default Movie