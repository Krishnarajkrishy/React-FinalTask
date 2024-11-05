import PropTypes from 'prop-types'

const MoviesList = ({movie, setSelectedMovie}) => {
  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => {setSelectedMovie(movie.imdbID)
        window.scrollTo({top:0 , behavior:'smooth'})}
}
    >
      <div className="flex flex-col border-2 justify-center p-4 border-slate-600 gap-2">
        <img
          className=" w-full max-h-full object-cover"
          src={movie.Poster}
          alt={movie.title}
        />
        <div className="">
          <p className="text-xl truncate">{movie.Title}</p>
          <p> Year : {movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
}
export default MoviesList