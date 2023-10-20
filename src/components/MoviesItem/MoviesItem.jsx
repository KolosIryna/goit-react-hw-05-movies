import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMovieItem } from './MoviesItem.styled';

const MoviesItem = ({ id, image, title }) => {
  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} className="link">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w300${image}`}
          alt={title}
          width="300"
        />
        <h2 className="title">{title}</h2>
      </Link>
    </StyledMovieItem>
  );
};

export default MoviesItem;
