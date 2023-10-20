import React from 'react';
import { Link } from 'react-router-dom';

import { StyledMovieItem } from './MoviesItem.styled';

const MoviesItem = ({ id, poster_path, title }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} className="link">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <h2 className="title">{title}</h2>
      </Link>
    </StyledMovieItem>
  );
};

export default MoviesItem;
