import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <div>Checking auth...</div>;

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;












    {/* Protected Flow (Booking)
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/seat-selection/:showId" element={<SeatSelection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      Auth Layout
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route> */}