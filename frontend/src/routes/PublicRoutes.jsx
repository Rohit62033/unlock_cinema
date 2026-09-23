import { Route } from "react-router-dom";



import HomePage from "@/modules/public/home/pages/HomePage";
import MovieListingPage from "@/modules/public/movie/pages/MovieListingPage";
import MovieDetailsPage from "@/modules/public/movie/pages/MovieDetailsPage";
import MovieShowPage from "@/modules/public/showtime/pages/MovieShowPage";
import MainLayout from "@/components/layout/MainLayout";
import Stream from "@/modules/public/stream/Stream";
import Events from "@/modules/public/stream/Events";
import Plays from "@/modules/public/stream/Plays";
import Sports from "@/modules/public/stream/Sports";
import Activities from "@/modules/public/stream/Activities";

const PublicRoutes = () => {
  return (
    <Route element={<MainLayout />}>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/movies"
        element={<MovieListingPage />}
      />

      <Route
        path="/movies/:city"
        element={<MovieListingPage />}
      />

      <Route
        path="/movies/:city/:slug/:movieId"
        element={<MovieDetailsPage />}
      />

      <Route
        path="/movies/:city/:slug/showtimes/:movieId"
        element={<MovieShowPage />}
      />

      <Route path="/stream" element={<Stream />} />
      <Route path="/events" element={<Events />} />
      <Route path="/plays" element={<Plays />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/activities" element={<Activities />} />
    </Route>
  );
};

export default PublicRoutes;