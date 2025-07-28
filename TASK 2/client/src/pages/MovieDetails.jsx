

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos,credits`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const trailer = movie.videos && movie.videos.results ? movie.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube') : null;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-2">{movie.overview}</p>
      <p>🎭 Genres: {movie.genres.map(g => g.name).join(', ')}</p>
      <p>⭐ Rating: {movie.vote_average}</p>
      <p>📅 Release Date: {movie.release_date}</p>

      {trailer && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-6">Cast</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {movie.credits?.cast?.slice(0, 8).map(actor => (
          <li key={actor.id} className="text-sm text-white">
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
