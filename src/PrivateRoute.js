import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return isAuthenticated ? children : <Navigate to="/register" />;
}

export default PrivateRoute;
