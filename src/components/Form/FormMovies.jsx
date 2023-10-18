import React, { useEffect, useState } from 'react';
import { StyledFormMovies } from './FormMovies.styled';
import { useSearchParams } from 'react-router-dom';
import { getMovieTrends } from 'services/api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const FormMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchAllImages = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieTrends(query);
        setMovies([data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllImages();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.title.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <StyledFormMovies onSubmit={handleFormSubmit}>
      <label>
        <input
          className="input"
          name="title"
          type="text"
          autoComplete="off"
          autoFocus
          required
        />
      </label>
      <button type="submit" className="button">
        Search
      </button>

      <div>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    </StyledFormMovies>
  );
};

export default FormMovies;
