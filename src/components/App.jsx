import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Header from './Header/Header';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movie/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" elemement={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
