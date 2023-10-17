import MoviesItem from 'components/MoviesItem/MoviesItem';
import { StyledMoviesList } from './MoviesList.styled';

const MoviesList = () => {
  return (
    <StyledMoviesList>
      <MoviesItem />
    </StyledMoviesList>
  );
};

export default MoviesList;
