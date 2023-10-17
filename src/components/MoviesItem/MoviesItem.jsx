import React from 'react';
import { Link } from 'react-router-dom';

const MoviesItem = ({ id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}></Link>
    </li>
  );
};

export default MoviesItem;
