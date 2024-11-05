import axios from "axios";
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'


const MoviesInfo = ({ selectedMovie, setSelectedMovie }) => {
  const [movie, setMovie] = useState('')
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=3020adb`)
      .then((response) => setMovie(response.data));
  }, [selectedMovie])
  return (
    <div>
      {movie.Title ? (
        <div className="p-4 flex gap-4 border-2 border-slate-400">
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p>
              <span className="font-semibold">Year :</span> {movie.Year}
            </p>
            <p>
              <span className="font-semibold"> Genre :</span> {movie.Genre}
            </p>
            <p>
              <span className="font-semibold">Plot :</span> {movie.Plot}
            </p>
            <p>
              <span className="font-semibold">Ratings :</span>
              {movie.imdbRating}
            </p>
            <p>
              <span className="font-semibold">Cast :</span> {movie.Actors}
            </p>
            <button
              onClick={() => setSelectedMovie("")}
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
            >
              close
            </button>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

MoviesInfo.propTypes = {
  selectedMovie: PropTypes.string.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};

export default MoviesInfo;