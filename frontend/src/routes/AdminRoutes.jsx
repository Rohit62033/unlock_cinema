import AdminLayout from "@/components/layout/admin/AdminLayout";
import DashboardPage from "@/modules/admin/home/DashboardPage";
import MovieCreatePage from "@/modules/admin/movie-management/pages/MovieCreatePage";
import MovieEditPage from "@/modules/admin/movie-management/pages/MovieEditPage";
import MovieManagementPage from "@/modules/admin/movie-management/pages/MovieMangementPage";


import { Route } from "react-router-dom";

// import MoviesPage from "@/pages/admin/MoviesPage";

const AdminRoutes = () => {
  return (
    <Route
      path="/admin"
      element={<AdminLayout />}
    >
      <Route
        index
        element={<DashboardPage />}
      />

      <Route
        path="movies"
        element={<MovieManagementPage />}
      />

      <Route
        path="movies/create"
        element={<MovieCreatePage  />}
      />

      <Route
        path="movies/:movieId/edit"
        element={<MovieEditPage />}
      />

      <Route
        path="theatres"
        element={<MovieManagementPage />}
      />
    </Route>
  );
};

export default AdminRoutes;