import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

export default function ProtecedRouteLayout({
  element,
}: {
  element: ReactNode;
}) {
  const { userData } = useAuth();

  // Redirect to signup if not authenticated
  return userData ? element : <Navigate to="/signup" />;
}
