import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../../assets/images/Black and Red Y2k Modern Professional Fashion Logo.png";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/7283/2829" },
    { label: "Services", href: "/7382/2922" },
    { label: "Experience", href: "/7092/2416" },
    { label: "Portfolio", href: "/7893/1673" },
    { label: "Message us", href: "/7782/8191" }
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      // Tablet breakpoint between 768px and 1024px
      setIsTabletView(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className="navbar w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <img src={image} alt="Logo" className="w-14 rounded-b-2xl" />
            </Link>
          </div>

          {/* Desktop Navigation (shown on desktop screens) */}
          {!isTabletView && (
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href}>
                  <button className="px-6 py-2 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 font-medium text-gray-700 hover:text-gray-900 rounded-lg transition-all hover:scale-105">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          )}

          {/* Tablet/mobile menu button */}
          {isTabletView && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 bg-gradient-to-r from-indigo-400 to-purple-400 hover:text-gray-900 p-2 rounded-md transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          )}
        </div>

        {/* Tablet/mobile Navigation (shown when menu is open) */}
        {isTabletView && mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block"
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-lg transition-all">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};