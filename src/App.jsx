import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { Services } from "./pages/services/Services";
import { About } from "./pages/about/About";
import { Experience } from "./pages/experience/Experience";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Message } from "./pages/contacts/Messages";
import { NotFound } from "./pages/notfound/Notfound";

// ============== MATERIAL ICONS ==============
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ChatIcon from '@mui/icons-material/Chat';
import SmsIcon from '@mui/icons-material/Sms';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// ============== SIMPLIFIED LOADER COMPONENTS ==============

// Home Loader - Clean and minimal
const HomeLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative mb-6">
        <DeveloperModeIcon className="text-7xl text-blue-600 dark:text-blue-400 animate-pulse" />
      </div>
      
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Leon <span className="text-blue-600 dark:text-blue-400">.</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Software Developer</p>
      </div>
      
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-150"></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

// Services Loader - Simple icons
const ServicesLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative mb-6">
        <div className="absolute inset-0 animate-ping opacity-20">
          <SettingsIcon className="text-6xl text-emerald-600 dark:text-emerald-400" />
        </div>
        <EngineeringIcon className="text-7xl text-emerald-600 dark:text-emerald-400 relative" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Services</h3>
      <div className="flex space-x-4 mt-1">
        <WebIcon className="text-gray-500 dark:text-gray-400 text-xl" />
        <StorageIcon className="text-gray-500 dark:text-gray-400 text-xl" />
        <BrushIcon className="text-gray-500 dark:text-gray-400 text-xl" />
      </div>
    </div>
  );
};

// About Loader - Minimal profile
const AboutLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="mb-6">
        <AccountCircleIcon className="text-7xl text-amber-600 dark:text-amber-400 animate-pulse" />
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white">About Leon</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5+ years experience</p>
      </div>
      
      <div className="flex space-x-3 mt-4">
        <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="w-12 h-full bg-amber-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Experience Loader - Simple timeline
const ExperienceLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="mb-6">
        <TimelineIcon className="text-7xl text-rose-600 dark:text-rose-400" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Experience</h3>
      
      <div className="space-y-2 w-48">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="w-11/12 h-full bg-rose-500 rounded-full animate-progress"></div>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-rose-500 rounded-full animate-progress delay-150"></div>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-rose-500 rounded-full animate-progress delay-300"></div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Loader - Clean grid
const PortfolioLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="mb-6">
        <FolderOpenIcon className="text-7xl text-purple-600 dark:text-purple-400 animate-pulse" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Portfolio</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Message Loader - Simple chat
const MessageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="mb-6">
        <MessageOutlinedIcon className="text-7xl text-cyan-600 dark:text-cyan-400" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Contact</h3>
      
      <div className="flex space-x-2">
        <div className="w-12 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg rounded-tl-none animate-pulse"></div>
        <div className="w-16 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tr-none animate-pulse delay-150"></div>
      </div>
    </div>
  );
};

// Default Loader - Personal brand minimal
const DefaultLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative mb-6">
        <AutoAwesomeIcon className="text-7xl text-gray-800 dark:text-white animate-pulse" />
      </div>
      
      <div className="flex space-x-1">
        {['L', 'E', 'O', 'N'].map((letter, i) => (
          <span
            key={i}
            className="text-2xl font-light text-gray-800 dark:text-white animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3 mt-4">
        <GitHubIcon className="text-gray-400 text-lg" />
        <LinkedInIcon className="text-gray-400 text-lg" />
        <TwitterIcon className="text-gray-400 text-lg" />
      </div>
    </div>
  );
};

// Page loader mapping
const PageLoader = ({ pathname }) => {
  switch (pathname) {
    case "/":
      return <HomeLoader />;
    case "/7382/2922":
      return <ServicesLoader />;
    case "/7283/2829":
      return <AboutLoader />;
    case "/7092/2416":
      return <ExperienceLoader />;
    case "/7782/8191":
      return <MessageLoader />;
    case "/7893/1673":
      return <PortfolioLoader />;
    default:
      return <DefaultLoader />;
  }
};

// ============== MAIN APP CONTENT ==============
const AppContent = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

  // Initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Page transitions
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  // Custom animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes progress {
        from { width: 0%; }
        to { width: 100%; }
      }
      .animate-progress {
        animation: progress 1.2s ease-out forwards;
      }
      .delay-150 { animation-delay: 150ms; }
      .delay-300 { animation-delay: 300ms; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (isInitialLoading) {
    return <DefaultLoader />;
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden grid grid-rows-[auto,1fr,auto] relative">
      {/* Page Transition Loader */}
      {isPageLoading && (
        <div className="fixed inset-0 z-50">
          <PageLoader pathname={location.pathname} />
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Navbar />

      <main className="w-full bg-gray-50 dark:bg-gray-950">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/7382/2922" element={<Services />} />
            <Route path="/7283/2829" element={<About />} />
            <Route path="/7092/2416" element={<Experience />} />
            <Route path="/7782/8191" element={<Message />} />
            <Route path="/7893/1673" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}