import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/api';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const from = location.state?.from;

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const detail = await getMovieDetails(movieId);
        setMovie(detail);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, overview, genres, poster_path } = movie;

  return (
    <>
      <div>
        <Link to={from || '/'}>
          <button>Go back</button>
        </Link>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path || ''}`}
          alt={title}
          width="300"
        />
        <h2>{title}</h2>
        <p>Overview: {overview}</p>
        {genres && genres.length > 0 && (
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        )}
        <div>
          Additional information:
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
