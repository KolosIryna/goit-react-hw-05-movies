import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castNames, setCastNames] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setCastNames(cast.data.cast);
      } catch (error) {
        console.log(error.massage);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ul>
      {castNames.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
            alt={cast.name}
          />
          <h3>{cast.name}</h3>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
