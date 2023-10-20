import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesForQuery } from 'services/api';
import FormMovies from '../components/Form/FormMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesForQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <FormMovies setSearchParams={setSearchParams} />
      <div>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Movies;
