import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define Types
interface AuthContextType {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}
interface AuthProviderProps {
	children: ReactNode;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
