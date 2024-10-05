import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactNode } from 'react';


export default function ProtecedRouteLayout({ element }: { element: ReactNode }) {
	const { isAuthenticated } = useAuth();

	// Redirect to signup if not authenticated
	return isAuthenticated ? element : <Navigate to="/signup" />;
}

