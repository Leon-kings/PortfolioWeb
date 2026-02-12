/* eslint-disable no-unused-vars */
// import { Routes, Route, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Navbar } from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import { Footer } from "./components/footer/Footer";
// import { Services } from "./pages/services/Services";
// import { About } from "./pages/about/About";
// import { Experience } from "./pages/experience/Experience";
// import { Portfolio } from "./components/portfolio/Portfolio";
// import { Message } from "./pages/contacts/Messages";
// import { NotFound } from "./pages/notfound/Notfound";

// // ============== MATERIAL ICONS ==============
// import CodeIcon from "@mui/icons-material/Code";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
// import SettingsIcon from "@mui/icons-material/Settings";
// import BuildIcon from "@mui/icons-material/Build";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import ChatIcon from "@mui/icons-material/Chat";
// import SmsIcon from "@mui/icons-material/Sms";
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import SendIcon from "@mui/icons-material/Send";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import WebIcon from "@mui/icons-material/Web";
// import StorageIcon from "@mui/icons-material/Storage";
// import BrushIcon from "@mui/icons-material/Brush";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { Login } from "./components/login/Login";

// import { createContext, useContext } from "react";
// import { toast } from "react-toastify";
// import { Dashboard } from "./pages/dashboard/Dashboard";

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // ============== SIMPLIFIED LOADER COMPONENTS ==============

// // Home Loader - Clean and minimal
// const HomeLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="relative mb-6">
//         <DeveloperModeIcon className="text-7xl text-blue-600 dark:text-blue-400 animate-pulse" />
//       </div>

//       <div className="text-center mb-4">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           Leon <span className="text-blue-600 dark:text-blue-400">.</span>
//         </h2>
//         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//           Software Developer
//         </p>
//       </div>

//       <div className="flex space-x-1 mt-2">
//         <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
//         <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-150"></div>
//         <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce delay-300"></div>
//       </div>
//     </div>
//   );
// };

// // Services Loader - Simple icons
// const ServicesLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="relative mb-6">
//         <div className="absolute inset-0 animate-ping opacity-20">
//           <SettingsIcon className="text-6xl text-emerald-600 dark:text-emerald-400" />
//         </div>
//         <EngineeringIcon className="text-7xl text-emerald-600 dark:text-emerald-400 relative" />
//       </div>

//       <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
//         Services
//       </h3>
//       <div className="flex space-x-4 mt-1">
//         <WebIcon className="text-gray-500 dark:text-gray-400 text-xl" />
//         <StorageIcon className="text-gray-500 dark:text-gray-400 text-xl" />
//         <BrushIcon className="text-gray-500 dark:text-gray-400 text-xl" />
//       </div>
//     </div>
//   );
// };

// // About Loader - Minimal profile
// const AboutLoader = () => {
//   const countYearsSince2023 = () => {
//     const currentYear = new Date().getFullYear();
//     const years = currentYear - 2023;
//     return `${years}+`;
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="mb-6">
//         <AccountCircleIcon className="text-7xl text-amber-600 dark:text-amber-400 animate-pulse" />
//       </div>

//       <div className="text-center">
//         <h3 className="text-lg font-medium text-gray-800 dark:text-white">
//           About Leon
//         </h3>
//         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//           {countYearsSince2023()} years experience
//         </p>
//       </div>

//       <div className="flex space-x-3 mt-4">
//         <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//           <div className="w-12 h-full bg-amber-500 rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Experience Loader - Simple timeline
// const ExperienceLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="mb-6">
//         <TimelineIcon className="text-7xl text-rose-600 dark:text-rose-400" />
//       </div>

//       <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
//         Experience
//       </h3>

//       <div className="space-y-2 w-48">
//         <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//           <div className="w-11/12 h-full bg-rose-500 rounded-full animate-progress"></div>
//         </div>
//         <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//           <div className="w-3/4 h-full bg-rose-500 rounded-full animate-progress delay-150"></div>
//         </div>
//         <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//           <div className="w-4/5 h-full bg-rose-500 rounded-full animate-progress delay-300"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Portfolio Loader - Clean grid
// const PortfolioLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="mb-6">
//         <FolderOpenIcon className="text-7xl text-purple-600 dark:text-purple-400 animate-pulse" />
//       </div>

//       <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
//         Portfolio
//       </h3>

//       <div className="grid grid-cols-2 gap-2">
//         {[1, 2, 3, 4].map((i) => (
//           <div
//             key={i}
//             className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg animate-pulse"
//             style={{ animationDelay: `${i * 0.1}s` }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Message Loader - Simple chat
// const MessageLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="mb-6">
//         <MessageOutlinedIcon className="text-7xl text-cyan-600 dark:text-cyan-400" />
//       </div>

//       <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
//         Contact
//       </h3>

//       <div className="flex space-x-2">
//         <div className="w-12 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg rounded-tl-none animate-pulse"></div>
//         <div className="w-16 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tr-none animate-pulse delay-150"></div>
//       </div>
//     </div>
//   );
// };

// // Default Loader - Personal brand minimal
// const DefaultLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
//       <div className="relative mb-6">
//         <AutoAwesomeIcon className="text-7xl text-gray-800 dark:text-white animate-pulse" />
//       </div>

//       <div className="flex space-x-1">
//         {["L", "E", "O", "N"].map((letter, i) => (
//           <span
//             key={i}
//             className="text-2xl font-light text-gray-800 dark:text-white animate-pulse"
//             style={{ animationDelay: `${i * 0.1}s` }}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       <div className="flex space-x-3 mt-4">
//         <GitHubIcon className="text-gray-400 text-lg" />
//         <LinkedInIcon className="text-gray-400 text-lg" />
//         <TwitterIcon className="text-gray-400 text-lg" />
//       </div>
//     </div>
//   );
// };

// // Page loader mapping
// const PageLoader = ({ pathname }) => {
//   switch (pathname) {
//     case "/":
//       return <HomeLoader />;
//     case "/7382/2922":
//       return <ServicesLoader />;
//     case "/7283/2829":
//       return <AboutLoader />;
//     case "/7092/2416":
//       return <ExperienceLoader />;
//     case "/7782/8191":
//       return <MessageLoader />;
//     case "/7893/1673":
//       return <PortfolioLoader />;
//     default:
//       return <DefaultLoader />;
//   }
// };

// // ============== MAIN APP CONTENT ==============
// const AppContent = () => {
//   const [isInitialLoading, setIsInitialLoading] = useState(true);
//   const [isPageLoading, setIsPageLoading] = useState(false);
//   const location = useLocation();

//   // Initial app loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsInitialLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Page transitions
//   useEffect(() => {
//     setIsPageLoading(true);
//     const timer = setTimeout(() => {
//       setIsPageLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [location]);

//   // Custom animations
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes progress {
//         from { width: 0%; }
//         to { width: 100%; }
//       }
//       .animate-progress {
//         animation: progress 1.2s ease-out forwards;
//       }
//       .delay-150 { animation-delay: 150ms; }
//       .delay-300 { animation-delay: 300ms; }
//     `;
//     document.head.appendChild(style);
//     return () => style.remove();
//   }, []);

//   if (isInitialLoading) {
//     return <DefaultLoader />;
//   }

//   return (
//     <div className="w-full min-h-screen overflow-x-hidden grid grid-rows-[auto,1fr,auto] relative">
//       {/* Page Transition Loader */}
//       {isPageLoading && (
//         <div className="fixed inset-0 z-50">
//           <PageLoader pathname={location.pathname} />
//         </div>
//       )}

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <AuthProvider>
//         <Navbar />

//         <main className="w-full bg-gray-50 dark:bg-gray-950">
//           <div className="w-full">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/7382/2922" element={<Services />} />
//               <Route path="/7283/2829" element={<About />} />
//               <Route path="/7092/2416" element={<Experience />} />
//               <Route path="/7782/8191" element={<Message />} />
//               <Route path="/7893/1673" element={<Portfolio />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </main>

//         <Footer />
//       </AuthProvider>
//     </div>
//   );
// };

// // context/AuthContext.jsx

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");
//     if (token && savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     try {
//       // Simulate API call
//       const response = await mockApiLogin(email, password);

//       if (response.success) {
//         setUser(response.user);
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("user", JSON.stringify(response.user));
//         toast.success("✨ Welcome back! Login successful!", {
//           icon: "🎉",
//           style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)",
//             color: "white",
//           },
//         });
//         return { success: true };
//       }
//     } catch (error) {
//       toast.error("❌ " + error.message, {
//         style: {
//           background: "linear-gradient(to right, #ff6b6b, #c92a2a)",
//           color: "white",
//         },
//       });
//       return { success: false, error: error.message };
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     toast.info("👋 See you soon!", {
//       style: {
//         background: "linear-gradient(to right, #4facfe, #00f2fe)",
//         color: "white",
//       },
//     });
//   };

//   // Mock API function
//   const mockApiLogin = (email, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (email === "demo@example.com" && password === "password123") {
//           resolve({
//             success: true,
//             token: "mock-jwt-token-" + Math.random(),
//             user: {
//               id: 1,
//               name: "John Doe",
//               email: email,
//               avatar: "https://i.pravatar.cc/150?img=1",
//               role: "Admin",
//             },
//           });
//         } else {
//           reject(new Error("Invalid email or password"));
//         }
//       }, 1000);
//     });
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default function App() {
//   return <AppContent />;
// }

// import { Routes, Route, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Navbar } from "./components/navbar/Navbar";
// import Home from "./pages/home/Home";
// import { Footer } from "./components/footer/Footer";
// import { Services } from "./pages/services/Services";
// import { About } from "./pages/about/About";
// import { Experience } from "./pages/experience/Experience";
// import { Portfolio } from "./components/portfolio/Portfolio";
// import { Message } from "./pages/contacts/Messages";
// import { NotFound } from "./pages/notfound/Notfound";

// // ============== MATERIAL ICONS ==============
// import CodeIcon from "@mui/icons-material/Code";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
// import SettingsIcon from "@mui/icons-material/Settings";
// import BuildIcon from "@mui/icons-material/Build";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import ChatIcon from "@mui/icons-material/Chat";
// import SmsIcon from "@mui/icons-material/Sms";
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import SendIcon from "@mui/icons-material/Send";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import WebIcon from "@mui/icons-material/Web";
// import StorageIcon from "@mui/icons-material/Storage";
// import BrushIcon from "@mui/icons-material/Brush";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { Login } from "./components/login/Login";

// import { createContext, useContext } from "react";
// import { toast } from "react-toastify";
// import { Dashboard } from "./pages/dashboard/Dashboard";
// import axios from "axios";

// const AuthContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // ============== SIMPLIFIED LOADER COMPONENTS ==============

// // Home Loader - Clean and minimal
// const HomeLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-8">
//         <div className="absolute inset-0 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <DeveloperModeIcon className="text-8xl text-blue-600 dark:text-blue-400 relative z-10 animate-float" />
//       </div>

//       <div className="text-center mb-6">
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Leon<span className="text-blue-600 dark:text-blue-400">.</span>
//         </h2>
//         <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 tracking-wider uppercase">
//           Software Developer
//         </p>
//       </div>

//       <div className="flex space-x-2 mt-4">
//         {[0, 1, 2].map((i) => (
//           <div
//             key={i}
//             className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
//             style={{ animationDelay: `${i * 0.15}s` }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Services Loader - Simple icons
// const ServicesLoader = () => {
//   const icons = [WebIcon, StorageIcon, BrushIcon, SettingsIcon];
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <div className="relative flex items-center justify-center">
//           <EngineeringIcon className="text-8xl text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
//         </div>
//       </div>

//       <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//         Services
//       </h3>

//       <div className="flex flex-wrap justify-center gap-6 mt-4">
//         {icons.map((Icon, index) => (
//           <div
//             key={index}
//             className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl animate-float"
//             style={{ animationDelay: `${index * 0.2}s` }}
//           >
//             <Icon className="text-3xl text-emerald-600 dark:text-emerald-400" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // About Loader - Minimal profile
// const AboutLoader = () => {
//   const countYearsSince2023 = () => {
//     const currentYear = new Date().getFullYear();
//     const years = currentYear - 2023;
//     return `${years}+`;
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-8">
//         <div className="absolute inset-0 bg-amber-400 dark:bg-amber-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <div className="relative">
//           <div className="absolute inset-0 bg-amber-400 dark:bg-amber-600 rounded-full animate-ping opacity-30"></div>
//           <AccountCircleIcon className="text-8xl text-amber-600 dark:text-amber-400 relative z-10 animate-float" />
//         </div>
//       </div>

//       <div className="text-center">
//         <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
//           About Leon
//         </h3>
//         <p className="text-lg text-gray-600 dark:text-gray-400">
//           {countYearsSince2023()} years experience
//         </p>
//       </div>

//       <div className="w-48 h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-8 overflow-hidden">
//         <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-progress"></div>
//       </div>
//     </div>
//   );
// };

// // Experience Loader - Simple timeline
// const ExperienceLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-rose-400 dark:bg-rose-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <TimelineIcon className="text-8xl text-rose-600 dark:text-rose-400 animate-float" />
//       </div>

//       <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
//         Experience
//       </h3>

//       <div className="space-y-4 w-64">
//         {[85, 75, 90].map((width, index) => (
//           <div key={index} className="space-y-2">
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600 dark:text-gray-400">Project {index + 1}</span>
//               <span className="text-rose-600 dark:text-rose-400 font-medium">{width}%</span>
//             </div>
//             <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-progress"
//                 style={{ width: `${width}%`, animationDelay: `${index * 0.2}s` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Portfolio Loader - Clean grid
// const PortfolioLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <FolderOpenIcon className="text-8xl text-purple-600 dark:text-purple-400 animate-float" />
//       </div>

//       <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//         Portfolio
//       </h3>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {[1, 2, 3, 4].map((i) => (
//           <div
//             key={i}
//             className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-2xl animate-pulse shadow-lg"
//             style={{ animationDelay: `${i * 0.15}s`, opacity: 0.7 }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Message Loader - Simple chat
// const MessageLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <MessageOutlinedIcon className="text-8xl text-cyan-600 dark:text-cyan-400 animate-float" />
//       </div>

//       <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//         Contact
//       </h3>

//       <div className="flex items-end space-x-3">
//         <div className="w-16 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-2xl rounded-bl-none animate-pulse shadow-lg"></div>
//         <div className="w-24 h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tr-none animate-pulse shadow-lg"></div>
//       </div>
//     </div>
//   );
// };

// // Login Loader
// const LoginLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
//       <div className="relative mb-8">
//         <div className="absolute inset-0 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//         <div className="relative w-24 h-24 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
//       </div>

//       <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
//         Welcome Back!
//       </h3>
//       <p className="text-gray-600 dark:text-gray-400 mt-2">Signing you in...</p>
//     </div>
//   );
// };

// // Dashboard Loader
// const DashboardLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
//       <div className="flex h-screen">
//         {/* Sidebar Skeleton */}
//         <div className="hidden lg:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6">
//           <div className="flex items-center space-x-3 mb-8">
//             <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-xl animate-pulse"></div>
//             <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
//           </div>
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div key={i} className="flex items-center space-x-3 mb-4">
//               <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
//               <div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Skeleton */}
//         <div className="flex-1 p-8">
//           <div className="flex justify-between items-center mb-8">
//             <div className="w-48 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
//               <div className="w-24 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
//                 <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 animate-pulse"></div>
//                 <div className="w-20 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse"></div>
//                 <div className="w-16 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {[1, 2].map((i) => (
//               <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
//                 <div className="w-32 h-5 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse"></div>
//                 <div className="space-y-3">
//                   {[1, 2, 3].map((j) => (
//                     <div key={j} className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
//                       <div className="flex-1">
//                         <div className="w-24 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse"></div>
//                         <div className="w-32 h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Default Loader - Personal brand minimal
// const DefaultLoader = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950">
//       <div className="relative mb-10">
//         <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
//         <div className="relative flex items-center justify-center">
//           <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping"></div>
//           <AutoAwesomeIcon className="text-8xl text-white/90 animate-float" />
//         </div>
//       </div>

//       <div className="flex space-x-3 mb-6">
//         {["L", "E", "O", "N"].map((letter, i) => (
//           <span
//             key={i}
//             className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-pulse"
//             style={{ animationDelay: `${i * 0.15}s` }}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       <div className="flex space-x-6 mt-8">
//         {[GitHubIcon, LinkedInIcon, TwitterIcon].map((Icon, index) => (
//           <div key={index} className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
//             <Icon className="text-2xl text-white/80" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Page loader mapping
// const PageLoader = ({ pathname }) => {
//   switch (pathname) {
//     case "/":
//       return <HomeLoader />;
//     case "/7382/2922":
//       return <ServicesLoader />;
//     case "/7283/2829":
//       return <AboutLoader />;
//     case "/7092/2416":
//       return <ExperienceLoader />;
//     case "/7782/8191":
//       return <MessageLoader />;
//     case "/7893/1673":
//       return <PortfolioLoader />;
//     case "/login":
//       return <LoginLoader />;
//     case "/dashboard":
//       return <DashboardLoader />;
//     default:
//       return <DefaultLoader />;
//   }
// };

// // ============== MAIN APP CONTENT ==============
// const AppContent = () => {
//   const [isInitialLoading, setIsInitialLoading] = useState(true);
//   const [isPageLoading, setIsPageLoading] = useState(false);
//   const location = useLocation();
//   const { user, loading } = useAuth();

//   // Initial app loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsInitialLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Page transitions
//   useEffect(() => {
//     setIsPageLoading(true);
//     const timer = setTimeout(() => {
//       setIsPageLoading(false);
//     }, 800);
//     return () => clearTimeout(timer);
//   }, [location]);

//   // Custom animations
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes progress {
//         0% { width: 0%; }
//         100% { width: 100%; }
//       }
//       @keyframes float {
//         0%, 100% { transform: translateY(0px); }
//         50% { transform: translateY(-20px); }
//       }
//       @keyframes spin-slow {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//       .animate-progress {
//         animation: progress 1.2s ease-out forwards;
//       }
//       .animate-float {
//         animation: float 3s ease-in-out infinite;
//       }
//       .animate-spin-slow {
//         animation: spin-slow 8s linear infinite;
//       }
//       .delay-150 { animation-delay: 150ms; }
//       .delay-300 { animation-delay: 300ms; }
//       .delay-500 { animation-delay: 500ms; }
//     `;
//     document.head.appendChild(style);
//     return () => style.remove();
//   }, []);

//   if (isInitialLoading || loading) {
//     return <DefaultLoader />;
//   }

//   return (
//     <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
//       {/* Page Transition Loader */}
//       {isPageLoading && (
//         <div className="fixed inset-0 z-50 transition-all duration-500 ease-in-out">
//           <PageLoader pathname={location.pathname} />
//         </div>
//       )}

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         className="!z-[9999]"
//       />

//       <Navbar />

//       <main className="flex-1 w-full">
//         <div className="w-full">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/7382/2922" element={<Services />} />
//             <Route path="/7283/2829" element={<About />} />
//             <Route path="/7092/2416" element={<Experience />} />
//             <Route path="/7782/8191" element={<Message />} />
//             <Route path="/7893/1673" element={<Portfolio />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// // context/AuthContext.jsx
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const savedUser = localStorage.getItem("user");

//         if (token && savedUser) {
//           // Simulate token verification
//           await new Promise(resolve => setTimeout(resolve, 500));
//           setUser(JSON.parse(savedUser));
//         }
//       } catch (error) {
//         console.error("Auth initialization error:", error);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeAuth();
//   }, []);

// // Add this to your AuthProvider in App.js
// const login = async (email, password) => {
//   try {
//     setLoading(true);

//     // Try real API first
//     try {
//       const response = await axios.post('https://reqres.in/api/login', {
//         email,
//         password
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         timeout: 5000
//       });

//       if (response.data.token) {
//         // Fetch user details
//         const userResponse = await axios.get('https://reqres.in/api/users/2');

//         const userData = {
//           success: true,
//           token: response.data.token,
//           user: {
//             id: userResponse.data.data.id,
//             name: `${userResponse.data.data.first_name} ${userResponse.data.data.last_name}`,
//             email: email,
//             avatar: userResponse.data.data.avatar,
//             role: 'Admin'
//           }
//         };

//         setUser(userData.user);
//         localStorage.setItem('token', userData.token);
//         localStorage.setItem('user', JSON.stringify(userData.user));

//         toast.success('✨ API Login successful!', {
//           style: {
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             color: "white",
//             borderRadius: "12px",
//           },
//         });

//         return userData;
//       }
//     } catch (apiError) {
//       console.log('Real API failed, using mock authentication');

//       // Fallback to mock API
//       const response = await mockApiLogin(email, password);

//       if (response.success) {
//         setUser(response.user);
//         localStorage.setItem('token', response.token);
//         localStorage.setItem('user', JSON.stringify(response.user));

//         toast.success('✨ Demo login successful!', {
//           style: {
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             color: "white",
//             borderRadius: "12px",
//           },
//         });

//         return response;
//       }
//     }
//   } catch (error) {
//     toast.error('❌ ' + (error.response?.data?.error || error.message || 'Login failed'), {
//       style: {
//         background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//         color: "white",
//         borderRadius: "12px",
//       },
//     });
//     return { success: false, error: error.message };
//   } finally {
//     setLoading(false);
//   }
// };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     toast.info("👋 See you soon!", {
//       style: {
//         background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//         color: "white",
//         borderRadius: "12px",
//       },
//     });
//   };

//   // Mock API function
//   const mockApiLogin = (email, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (email === "demo@example.com" && password === "password123") {
//           resolve({
//             success: true,
//             token: "mock-jwt-token-" + Math.random(),
//             user: {
//               id: 1,
//               name: "John Doe",
//               email: email,
//               avatar: "https://i.pravatar.cc/150?img=1",
//               role: "Admin",
//             },
//           });
//         } else {
//           reject(new Error("Invalid email or password"));
//         }
//       }, 1500);
//     });
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

// App.jsx - Complete fixed version
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
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ChatIcon from "@mui/icons-material/Chat";
import SmsIcon from "@mui/icons-material/Sms";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Login } from "./components/login/Login";
import { Navigate } from "react-router-dom";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import axios from "axios";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ============== SIMPLIFIED LOADER COMPONENTS ==============

// Home Loader - Clean and minimal
const HomeLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <DeveloperModeIcon className="text-8xl text-blue-600 dark:text-blue-400 relative z-10 animate-float" />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Leon<span className="text-blue-600 dark:text-blue-400">.</span>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 tracking-wider uppercase">
          Software Developer
        </p>
      </div>

      <div className="flex space-x-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Services Loader - Simple icons
const ServicesLoader = () => {
  const icons = [WebIcon, StorageIcon, BrushIcon, SettingsIcon];
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <EngineeringIcon className="text-8xl text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
        </div>
      </div>

      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
        Services
      </h3>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Icon className="text-3xl text-emerald-600 dark:text-emerald-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

// About Loader - Minimal profile
const AboutLoader = () => {
  const countYearsSince2023 = () => {
    const currentYear = new Date().getFullYear();
    const years = currentYear - 2023;
    return `${years}+`;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-amber-400 dark:bg-amber-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-amber-400 dark:bg-amber-600 rounded-full animate-ping opacity-30"></div>
          <AccountCircleIcon className="text-8xl text-amber-600 dark:text-amber-400 relative z-10 animate-float" />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
          About Leon
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {countYearsSince2023()} years experience
        </p>
      </div>

      <div className="w-48 h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-progress"></div>
      </div>
    </div>
  );
};

// Experience Loader - Simple timeline
const ExperienceLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-rose-400 dark:bg-rose-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <TimelineIcon className="text-8xl text-rose-600 dark:text-rose-400 animate-float" />
      </div>

      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
        Experience
      </h3>

      <div className="space-y-4 w-64">
        {[85, 75, 90].map((width, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Project {index + 1}
              </span>
              <span className="text-rose-600 dark:text-rose-400 font-medium">
                {width}%
              </span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-progress"
                style={{
                  width: `${width}%`,
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Portfolio Loader - Clean grid
const PortfolioLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <FolderOpenIcon className="text-8xl text-purple-600 dark:text-purple-400 animate-float" />
      </div>

      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Portfolio
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700 rounded-2xl animate-pulse shadow-lg"
            style={{ animationDelay: `${i * 0.15}s`, opacity: 0.7 }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Message Loader - Simple chat
const MessageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-cyan-400 dark:bg-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <MessageOutlinedIcon className="text-8xl text-cyan-600 dark:text-cyan-400 animate-float" />
      </div>

      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Contact
      </h3>

      <div className="flex items-end space-x-3">
        <div className="w-16 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-2xl rounded-bl-none animate-pulse shadow-lg"></div>
        <div className="w-24 h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tr-none animate-pulse shadow-lg"></div>
      </div>
    </div>
  );
};

// Login Loader
const LoginLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative w-24 h-24 border-4 border-indigo-200 dark:border-indigo-800 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
      </div>

      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
        Welcome Back!
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Signing you in...</p>
    </div>
  );
};

// Dashboard Loader
const DashboardLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="flex h-screen">
        <div className="hidden lg:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-xl animate-pulse"></div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="flex-1 h-5 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="w-48 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
              <div className="w-24 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 animate-pulse"></div>
                <div className="w-20 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse"></div>
                <div className="w-16 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default Loader - Personal brand minimal
const DefaultLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping"></div>
          <AutoAwesomeIcon className="text-8xl text-white/90 animate-float" />
        </div>
      </div>
      <div className="flex space-x-3 mb-6">
        {["L", "E", "O", "N"].map((letter, i) => (
          <span
            key={i}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="flex space-x-6 mt-8">
        {[GitHubIcon, LinkedInIcon, TwitterIcon].map((Icon, index) => (
          <div
            key={index}
            className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Icon className="text-2xl text-white/80" />
          </div>
        ))}
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
    case "/login":
      return <LoginLoader />;
    case "/dashboard":
      return <DashboardLoader />;
    default:
      return <DefaultLoader />;
  }
};

// ============== AUTH PROVIDER ==============
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initializeAuth = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const savedUser = localStorage.getItem("user");

//         if (token && savedUser) {
//           await new Promise((resolve) => setTimeout(resolve, 500));
//           setUser(JSON.parse(savedUser));
//         }
//       } catch (error) {
//         console.error("Auth initialization error:", error);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//       } finally {
//         setLoading(false);
//       }
//     };

//     initializeAuth();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "https://leonstatusprofile.onrender.com/admin/login",
//         { email, password },
//       );

//       if (response.data?.success) {
//         const { token, user } = response.data;

//         // Create clean auth object
//         const authData = {
//           token,
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//           loginTime: new Date().toISOString(),
//         };

//         // Save to state
//         setUser(authData);

//         // Save to localStorage
//         localStorage.setItem("auth", JSON.stringify(authData));
//         localStorage.setItem("token", token);

//         toast.success("✨ Login successful!", {
//           icon: "🎉",
//           style: {
//             background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//             color: "white",
//             borderRadius: "12px",
//           },
//         });

//         return { success: true, user: authData };
//       }

//       throw new Error(response.data?.message || "Login failed");
//     } catch (error) {
//       toast.error(
//         "❌ " +
//           (error.response?.data?.error || error.message || "Login failed"),
//         {
//           style: {
//             background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//             color: "white",
//             borderRadius: "12px",
//           },
//         },
//       );

//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = async () => {
//     try {
//       setLoading(true);

//       // Call backend logout endpoint
//       await axios.post(
//         "https://leonstatusprofile.onrender.com/admin/logout",
//         {}, // body can be empty
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // send token if required
//           },
//           timeout: 5000,
//         },
//       );

//       // Clear local storage and user state
//       setUser(null);
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       toast.info("👋 You have been logged out!", {
//         icon: "👋",
//         style: {
//           background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//           color: "white",
//           borderRadius: "12px",
//         },
//       });
//     } catch (error) {
//       // Even if API fails, clear client state
//       setUser(null);
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       toast.error("❌ Logout failed on server, cleared locally", {
//         style: {
//           background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//           color: "white",
//           borderRadius: "12px",
//         },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const PrivateRoute = ({
//   children,
//   requiredRole = null,
//   pageTitle = "",
// }) => {
//   const { user, loading } = useAuth();

//   // Optional: set page title
//   useEffect(() => {
//     if (pageTitle) {
//       document.title = pageTitle;
//     }
//   }, [pageTitle]);

//   // 🔄 While checking authentication
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-lg font-semibold animate-pulse">
//           Checking authentication...
//         </div>
//       </div>
//     );
//   }

//   // ❌ Not logged in
//   if (!user || !user.token) {
//     return <Navigate to="/login" replace />;
//   }

//   // ❌ Role required but not matching
//   if (requiredRole && user.role !== requiredRole) {
//     return <Navigate to="/" replace />;
//   }

//   // ✅ Authorized
//   return children;
// };

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user"); // use "user" consistently

        if (token && savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/admin/login",
        { email, password }
      );

      if (response.data?.success) {
        const { token, user: adminUser } = response.data;

        const authData = {
          token,
          id: adminUser.id,
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role,
          loginTime: new Date().toISOString(),
        };

        setUser(authData);
        localStorage.setItem("user", JSON.stringify(authData)); // save in "user"
        localStorage.setItem("token", token);

        toast.success("✨ Login successful!", {
          icon: "🎉",
          style: {
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "12px",
          },
        });

        return { success: true, user: authData };
      }

      throw new Error(response.data?.message || "Login failed");
    } catch (error) {
      toast.error(
        "❌ " + (error.response?.data?.message || error.message || "Login failed"),
        {
          style: {
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            borderRadius: "12px",
          },
        }
      );

      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://leonstatusprofile.onrender.com/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          timeout: 5000,
        }
      );

      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      toast.info("👋 You have been logged out!", {
        icon: "👋",
        style: {
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          color: "white",
          borderRadius: "12px",
        },
      });
    } catch (error) {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      toast.error("❌ Logout failed on server, cleared locally", {
        style: {
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white",
          borderRadius: "12px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const value = { user, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// PrivateRoute.js
export const PrivateRoute = ({ children, requiredRole = null, pageTitle = "" }) => {
  const { user, loading } = useAuth();

  // Set page title
  useEffect(() => {
    if (pageTitle) document.title = pageTitle;
  }, [pageTitle]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold animate-pulse">Checking authentication...</div>
      </div>
    );
  }

  // Not logged in
  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  // Role required but not matching
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Authorized
  return children;
};

// ============== MAIN APP CONTENT ==============
const AppContent = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes progress {
        0% { width: 0%; }
        100% { width: 100%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-progress {
        animation: progress 1.2s ease-out forwards;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
      .delay-150 { animation-delay: 150ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-500 { animation-delay: 500ms; }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (isInitialLoading || loading) {
    return <DefaultLoader />;
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {isPageLoading && (
        <div className="fixed inset-0 z-50 transition-all duration-500 ease-in-out">
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
        className="!z-[9999]"
      />

      <Navbar />
      {/* <main className="flex-1 w-full">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/7382/2922" element={<Services />} />
            <Route path="/7283/2829" element={<About />} />
            <Route path="/7092/2416" element={<Experience />} />
            <Route path="/7782/8191" element={<Message />} />
            <Route path="/7893/1673" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute pageTitle="Dashboard">
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main> */}

      <main className="flex-1 w-full">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/7382/2922" element={<Services />} />
            <Route path="/7283/2829" element={<About />} />
            <Route path="/7092/2416" element={<Experience />} />
            <Route path="/7782/8191" element={<Message />} />
            <Route path="/7893/1673" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />

            {/* Private Route for Dashboard */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute pageTitle="Dashboard">
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// ============== MAIN APP ==============
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
