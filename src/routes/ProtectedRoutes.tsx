import useAuthStore from "@/stores/AuthStore";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const isAuthenticated = useAuthStore().auth.authenticated;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  
}

export { ProtectedRoutes };
