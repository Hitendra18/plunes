import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import images from "../constants/images";

export default function AuthLayout() {
  const { userData } = useAuth();

  if (userData) {
    return <Navigate to="/" />;
  }

  const location = useLocation();
  // Check if the current path contains "login" or "signup"
  const isLoginPage = location.pathname.includes("login");
  const isSignupPage = location.pathname.includes("signup");

  return (
    <div className="flex items-center h-screen bg-[url('/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-[1280px] mx-auto px-20 flex items-center gap-20 justify-between h-screen max-h-[1200px] overflow-hidden">
        {/* Illustration and Logo  */}
        <div className="space-y-8 hidden md:block">
          {/* Logo */}
          <img
            src={images.Logo}
            alt="plunes logo"
            className="lg:h-14 md:h-10 object-contain"
          />
          <img
            src={images.Illustration}
            alt="illustration image"
            className="lg:max-h-[500px]"
          />
        </div>

        {/* Login and Signup form */}
        <div className="flex-grow space-y-10">
          <div className="text-center space-y-4">
            <p className="text-3xl font-semibold">
              {isLoginPage && "Welcome back to"}
              {isSignupPage && "Join us at"}{" "}
              <span className="text-secondary-green">Plunes AWC</span>
            </p>
            <p className="text-lg font-semibold">
              {isLoginPage && "Log in to your account"}
              {isSignupPage && "Create a new account"}
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
