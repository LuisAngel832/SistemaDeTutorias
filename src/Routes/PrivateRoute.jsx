import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("rol");
  return allowedRoles.includes(userRole)
    ? children
    : <Navigate to="/login" />;
};

export default PrivateRoute;
