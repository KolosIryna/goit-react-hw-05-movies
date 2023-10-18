import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMovieItem } from './MoviesItem.styled';

const MoviesItem = ({ id, image, title }) => {
  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} className="link">
        <img className="image" src={image} alt={title} />
        <h2 className="title">{title}</h2>
      </Link>
    </StyledMovieItem>
  );
};

export default MoviesItem;
