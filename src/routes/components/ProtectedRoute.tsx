import { Navigate, useLocation } from "react-router";
import Layout from "./Layout";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRouter = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();

  const isAuthenticated = true;

  // Se está autenticado
  if (isAuthenticated) {
    return children ? children : <Layout />;
  }

  // Fallback - redireciona para login
  return <Navigate to="/login" state={{ from: location }} replace />;
};
