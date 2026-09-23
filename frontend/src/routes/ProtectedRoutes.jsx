import { Route } from "react-router-dom";

import ProtectedRoute from "@/routes/ProtectedRoute";


// import SeatSelectionPage from "@/features/booking/pages/SeatSelectionPage";
import ProfilePage from "@/modules/public/profile/pages/ProfilePage";
import MainLayout from "@/components/layout/MainLayout";

const ProtectedRoutes = () => {
  return (
    <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
      <Route path="/my-profile" element={<ProfilePage/>}/>
        {/* <Route
          path="/seat-selection/:showId"
          element={<SeatSelectionPage />}
        /> */}
      </Route>
    </Route>
  );
};

export default ProtectedRoutes;