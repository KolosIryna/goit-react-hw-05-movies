import MoviesItem from 'components/MoviesItem/MoviesItem';
import { StyledMoviesList } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <StyledMoviesList>
      {movies.map(({ id, image, title }) => (
        <MoviesItem key={id} image={image} title={title} />
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;
