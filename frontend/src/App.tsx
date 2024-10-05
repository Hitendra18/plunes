import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

// Import pages
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtecedRouteLayout from "./layouts/ProtecedRouteLayout";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<ProtecedRouteLayout element={<Dashboard />} />}
          />

          <Route path="/" element={<AuthLayout />}>
            <Route index path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        stacked
        position="top-center"
      />
    </div>
  );
}

export default App;
