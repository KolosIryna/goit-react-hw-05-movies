import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};

/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route> */
