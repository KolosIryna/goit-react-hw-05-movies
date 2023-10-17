// import React, { useEffect } from 'react';
import { StyledFormMovies } from './FormMovies.styled';
// import { useSearchParams } from 'react-router-dom';

const FormMovies = () => {
  // const [searchParams, setSearchParams] = useSearchParams;

  // const query = searchParams.get('query');

  // useEffect(() => {
  //   if (!query) return;
  // }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.title.value;
    console.log('searchValue', searchValue);
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
    </StyledFormMovies>
  );
};

export default FormMovies;
