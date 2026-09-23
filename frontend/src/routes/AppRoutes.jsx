import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
// import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes()}
      {ProtectedRoutes()}
      {AdminRoutes()}
    </Routes>
  );
};

export default AppRoutes;