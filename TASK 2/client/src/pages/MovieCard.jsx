import { Link } from 'react-router-dom';


function MovieCard({ id, title, poster_path, release_date, vote_average }) {
  return (
    <Link to={`/movie/${id}`} className="block">

    <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">📅 {release_date}</p>
      <p className="text-yellow-500">⭐ {vote_average}</p>
    </div>
     </Link>

  );
}

export default MovieCard;
