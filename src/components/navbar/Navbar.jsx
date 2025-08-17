/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { MdMenu, MdClose } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../assets/images/Black and Red Y2k Modern Professional Fashion Logo.png";

// Create AuthContext with proper default values
export const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  loading: false,
});

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on initial load
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = {
        email,
        name: email.split("@")[0],
        token: "fake-jwt-token",
      };
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      toast.success("Logged in successfully!");
      return true;
    } catch (error) {
      toast.error("Failed to login");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = {
        email: userData.email,
        name: userData.name,
        token: "fake-jwt-token",
      };
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      toast.success("Registration successful!");
      return true;
    } catch (error) {
      toast.error("Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Navbar Component
export const Navbar = () => {
  const { currentUser, login, register, logout, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/7283/2829" },
    { label: "Services", href: "/7382/2922" },
    { label: "Experience", href: "/7092/2416" },
    { label: "Portfolio", href: "/7893/1673" },
    { label: "Message us", href: "/7782/8191" }
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(authData.email, authData.password);
    if (success) {
      setLoginOpen(false);
      setAuthData({ email: "", password: "", name: "" });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (authData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    const success = await register(authData);
    if (success) {
      setRegisterOpen(false);
      setAuthData({ email: "", password: "", name: "" });
    }
  };

  if (loading) {
    return (
      <div className="h-16 bg-white shadow-sm flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                <img src={image} alt="LD" className="w-14" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href}>
                  <button className="px-3 py-2 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 font-medium text-gray-700 hover:text-gray-900">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700 bg-gradient-to-r from-indigo-400 to-purple-400  hover:text-gray-900"
              >
                {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="w-full bg-gradient-to-r from-indigo-200 to-purple-200">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
