import { NavLink } from 'react-router-dom';

import { StyledAppContainer } from './App.styled';

export const App = () => {
  return (
    <StyledAppContainer>
      <nav className="naw">
        <NavLink className="header_link" to="/">
          Home
        </NavLink>
        <NavLink className="header_link" to="/movies">
          Movies
        </NavLink>
      </nav>
    </StyledAppContainer>
  );
};
