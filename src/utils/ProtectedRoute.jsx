import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isActive, redirectPath }) => {
  if (!isActive) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
