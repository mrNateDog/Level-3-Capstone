import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
