/* eslint-disable no-useless-catch */
// /* eslint-disable no-unused-vars */
// // components/Login.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useAuth } from '../../App';
// import { useNavigate } from 'react-router-dom';
// import {
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility,
//   VisibilityOff,
//   Person
// } from '@mui/icons-material';

// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const result = await login(email, password);
//     setLoading(false);

//     if (result.success) {
//       navigate('/dashboard');
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20 relative z-10"
//       >
//         {/* Logo and Header */}
//         <motion.div variants={itemVariants} className="text-center mb-8">
//           <div className="flex justify-center mb-4">
//             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//               <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
//           <p className="text-gray-300">Sign in to access your dashboard</p>
//         </motion.div>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <motion.div variants={itemVariants} className="mb-4">
//             <label className="block text-gray-300 text-sm font-semibold mb-2">
//               Email Address
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <EmailIcon className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                 placeholder="demo@example.com"
//                 required
//               />
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants} className="mb-6">
//             <label className="block text-gray-300 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <LockIcon className="text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showPassword ? (
//                   <VisibilityOff className="text-gray-400 hover:text-white transition-colors" />
//                 ) : (
//                   <Visibility className="text-gray-400 hover:text-white transition-colors" />
//                 )}
//               </button>
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
//             <label className="flex items-center">
//               <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600 bg-white/5 border-white/10 rounded focus:ring-purple-500" />
//               <span className="ml-2 text-sm text-gray-300">Remember me</span>
//             </label>
//             <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
//               Forgot password?
//             </a>
//           </motion.div>

//           <motion.button
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </div>
//             ) : 'Sign In'}
//           </motion.button>

//           <motion.div variants={itemVariants} className="mt-6 text-center">
//             <p className="text-gray-400">
//               Demo credentials: <br />
//               <span className="text-purple-400">demo@example.com</span> / <span className="text-pink-400">password123</span>
//             </p>
//           </motion.div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// /* eslint-disable no-unused-vars */
// // components/login/Login.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useAuth } from "../../App";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility,
//   VisibilityOff,
//   Person,
//   Code,
//   CheckCircle,
//   Error,
//   Warning,
//   Close,
//   Security,
//   Fingerprint,
//   VpnKey,
// } from "@mui/icons-material";
// import axios from "axios";
// import { toast } from "react-toastify";

// // ============== MODAL COMPONENTS ==============

// const SuccessModal = ({ isOpen, onClose, message, userData }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-green-200 dark:border-green-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
//                 <CheckCircle className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Success!
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Login successful
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
//             >
//               <Close />
//             </button>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-800">
//               <p className="text-gray-700 dark:text-gray-300 mb-3">{message}</p>
//               {userData && (
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={userData.avatar}
//                     alt={userData.name}
//                     className="w-10 h-10 rounded-full border-2 border-green-500"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white">
//                       {userData.name}
//                     </p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {userData.email}
//                     </p>
//                     <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
//                       {userData.role}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onClose}
//               className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
//             >
//               Continue
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const ErrorModal = ({ isOpen, onClose, message, errorDetails }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-red-200 dark:border-red-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
//                 <Error className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Error
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Authentication failed
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
//             >
//               <Close />
//             </button>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-red-200 dark:border-red-800">
//               <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
//                 {message}
//               </p>
//               {errorDetails && (
//                 <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
//                   <p className="text-sm text-red-600 dark:text-red-400 font-mono">
//                     {errorDetails}
//                   </p>
//                 </div>
//               )}
//               <div className="mt-4 flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
//                 <Warning className="text-yellow-500 text-sm mt-0.5" />
//                 <p>Please check your credentials and try again.</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onClose}
//               className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all"
//             >
//               Try Again
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 onClose();
//               }}
//               className="px-4 py-2 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
//             >
//               Forgot Password?
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const ConfirmationModal = ({
//   isOpen,
//   onConfirm,
//   onCancel,
//   message,
//   details,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-blue-200 dark:border-blue-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
//                 <Security className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Confirm Login
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Security verification
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
//               <p className="text-gray-700 dark:text-gray-300 mb-4">{message}</p>
//               {details && (
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                     <span className="text-sm text-gray-600 dark:text-gray-400">
//                       Email:
//                     </span>
//                     <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
//                       {details.email}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onConfirm}
//               className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
//             >
//               Confirm
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onCancel}
//               className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//             >
//               Cancel
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const TwoFactorModal = ({ isOpen, onVerify, onCancel }) => {
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const inputs = useRef([]);

//   if (!isOpen) return null;

//   const handleChange = (index, value) => {
//     if (value.length > 1) return;

//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 5) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-purple-200 dark:border-purple-800"
//         >
//           <div className="text-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Security className="text-white text-3xl" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//               Two-Factor Authentication
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               Enter the 6-digit code from your authenticator app
//             </p>
//           </div>

//           <div className="flex justify-center space-x-2 mb-6">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputs.current[index] = el)}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 className="w-12 h-12 text-center text-xl font-bold bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
//               />
//             ))}
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => onVerify(code.join(""))}
//               className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
//             >
//               Verify
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onCancel}
//               className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//             >
//               Cancel
//             </motion.button>
//           </div>

//           <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-4">
//             Didn't receive code?{" "}
//             <button className="text-purple-600 dark:text-purple-400 hover:underline">
//               Resend
//             </button>
//           </p>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ============== MAIN LOGIN COMPONENT ==============

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [apiStatus, setApiStatus] = useState({ online: false, checking: true });

//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);

//   const [modalData, setModalData] = useState({
//     message: "",
//     userData: null,
//     errorDetails: null,
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const rememberedEmail = localStorage.getItem("rememberedEmail");
//     if (rememberedEmail) {
//       setEmail(rememberedEmail);
//       setRememberMe(true);
//     }
//   }, []);

//   // -------------------- Form submit --------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setModalData({
//       message: "Please confirm your login attempt",
//       details: { email },
//     });
//     setShowConfirmationModal(true);
//   };

//   //   const handleConfirmLogin = async () => {
//   //     setShowConfirmationModal(false);

//   //     try {
//   //       const result = await login(email, password);

//   //       if (result?.success) {
//   //         setModalData({
//   //           message: "You have successfully logged in!",
//   //           userData: result.user,
//   //         });
//   //         setShowSuccessModal(true);

//   //         if (rememberMe) {
//   //           localStorage.setItem("rememberedEmail", email);
//   //         } else {
//   //           localStorage.removeItem("rememberedEmail");
//   //         }

//   //         setTimeout(() => {
//   //           setShowSuccessModal(false);
//   //           navigate("/dashboard"); // now works
//   //         }, 2000);
//   //       }
//   //     } catch (error) {
//   //       setModalData({
//   //         message: "Authentication failed. Please check your credentials.",
//   //         errorDetails:
//   //           error.response?.data?.error ||
//   //           error.message ||
//   //           "Invalid email or password",
//   //       });
//   //       setShowErrorModal(true);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
// const handleConfirmLogin = async () => {
//   setShowConfirmationModal(false);

//   try {
//     const result = await login(email, password);

//     if (result?.success) {
//       setModalData({
//         message: "You have successfully logged in!",
//         userData: result.user,
//       });
//       setShowSuccessModal(true);

//       if (rememberMe) {
//         localStorage.setItem("rememberedEmail", email);
//       } else {
//         localStorage.removeItem("rememberedEmail");
//       }

//       setTimeout(() => {
//         setShowSuccessModal(false);
//         navigate("/dashboard");
//       }, 1000);
//     }
//   } catch (error) {
//     setModalData({
//       message: "Authentication failed",
//       errorDetails: error.message || "Invalid email or password",
//     });
//     setShowErrorModal(true);
//   }
// };

//   const handleTwoFactor = async (code) => {
//     setShowTwoFactorModal(false);
//     if (code === "123456") {
//       const result = await login(email, password);
//       setModalData({
//         message: "Two-factor authentication successful!",
//         userData: result.user,
//       });
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//         navigate("/dashboard");
//       }, 2000);
//     } else {
//       setModalData({
//         message: "Invalid verification code",
//         errorDetails: "Please enter the correct 6-digit code",
//       });
//       setShowErrorModal(true);
//     }
//   };

//   // -------------------- Animations --------------------
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   // -------------------- JSX --------------------
//   return (
//     <>
//       {/* Modals */}
//       <SuccessModal
//         isOpen={showSuccessModal}
//         onClose={() => setShowSuccessModal(false)}
//         message={modalData.message}
//         userData={modalData.userData}
//       />
//       <ErrorModal
//         isOpen={showErrorModal}
//         onClose={() => setShowErrorModal(false)}
//         message={modalData.message}
//         errorDetails={modalData.errorDetails}
//       />
//       <ConfirmationModal
//         isOpen={showConfirmationModal}
//         onConfirm={handleConfirmLogin}
//         onCancel={() => {
//           setShowConfirmationModal(false);
//           setLoading(false);
//         }}
//         message={modalData.message}
//         details={modalData.details}
//       />
//       <TwoFactorModal
//         isOpen={showTwoFactorModal}
//         onVerify={handleTwoFactor}
//         onCancel={() => {
//           setShowTwoFactorModal(false);
//           setLoading(false);
//         }}
//       />

//       {/* Login Form */}
//       <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
//         {/* Blobs */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </div>

//         {!apiStatus.checking && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute top-4 right-4 z-20"
//           >
//             <div
//               className={`px-4 py-2 rounded-lg backdrop-blur-md flex items-center space-x-2 ${
//                 apiStatus.online
//                   ? "bg-green-500/20 border border-green-500/30 text-green-400"
//                   : "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400"
//               }`}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   apiStatus.online
//                     ? "bg-green-500 animate-pulse"
//                     : "bg-yellow-500"
//                 }`}
//               ></div>
//               <span className="text-sm font-medium">
//                 {apiStatus.online ? "API Connected" : "Using Demo Mode"}
//               </span>
//             </div>
//           </motion.div>
//         )}

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20 relative z-10"
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
//                 <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
//                   <Code className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
//             <p className="text-gray-300">Sign in to access your dashboard</p>
//           </motion.div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <motion.div variants={itemVariants} className="mb-4">
//               <label className="block text-gray-300 text-sm font-semibold mb-2">
//                 Email Address
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <EmailIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//             </motion.div>

//             {/* Password */}
//             <motion.div variants={itemVariants} className="mb-4">
//               <label className="block text-gray-300 text-sm font-semibold mb-2">
//                 Password
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <LockIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <div
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                 >
//                   {showPassword ? (
//                     <VisibilityOff className="text-gray-400 hover:text-white transition-colors" />
//                   ) : (
//                     <Visibility className="text-gray-400 hover:text-white transition-colors" />
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Remember Me */}
//             <motion.div
//               variants={itemVariants}
//               className="flex items-center justify-between mb-6"
//             >
//               <label className="flex items-center cursor-pointer group">
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="sr-only"
//                   />
//                   <div
//                     className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
//                       rememberMe
//                         ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent"
//                         : "border-white/30 group-hover:border-white/50"
//                     }`}
//                   >
//                     {rememberMe && (
//                       <svg
//                         className="w-3 h-3 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                 </div>
//                 <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">
//                   Remember me
//                 </span>
//               </label>
//             </motion.div>

//             {/* Submit */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
//             >
//               <span className="relative z-10">
//                 {loading ? (
//                   <div className="flex items-center justify-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Signing in...
//                   </div>
//                 ) : (
//                   "Sign In"
//                 )}
//               </span>
//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300"></div>
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Animations */}
//         <style jsx>{`
//           @keyframes blob {
//             0% {
//               transform: translate(0px, 0px) scale(1);
//             }
//             33% {
//               transform: translate(30px, -50px) scale(1.1);
//             }
//             66% {
//               transform: translate(-20px, 20px) scale(0.9);
//             }
//             100% {
//               transform: translate(0px, 0px) scale(1);
//             }
//           }
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//           .animation-delay-4000 {
//             animation-delay: 4s;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// /* eslint-disable no-unused-vars */
// // components/login/Login.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Email as EmailIcon,
//   Lock as LockIcon,
//   Visibility,
//   VisibilityOff,
//   Person,
//   Code,
//   CheckCircle,
//   Error,
//   Warning,
//   Close,
//   Security,
//   Fingerprint,
//   VpnKey,
// } from "@mui/icons-material";
// import axios from "axios";
// import { toast } from "react-toastify";

// // ============== MODAL COMPONENTS ==============

// const SuccessModal = ({ isOpen, onClose, message, userData }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-green-200 dark:border-green-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
//                 <CheckCircle className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Success!
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Login successful
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
//             >
//               <Close />
//             </button>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-800">
//               <p className="text-gray-700 dark:text-gray-300 mb-3">{message}</p>
//               {userData && (
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={userData.avatar}
//                     alt={userData.name}
//                     className="w-10 h-10 rounded-full border-2 border-green-500"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-900 dark:text-white">
//                       {userData.name}
//                     </p>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       {userData.email}
//                     </p>
//                     <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
//                       {userData.role}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onClose}
//               className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
//             >
//               Continue
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const ErrorModal = ({ isOpen, onClose, message, errorDetails }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-red-200 dark:border-red-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
//                 <Error className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Error
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Authentication failed
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
//             >
//               <Close />
//             </button>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-red-200 dark:border-red-800">
//               <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
//                 {message}
//               </p>
//               {errorDetails && (
//                 <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
//                   <p className="text-sm text-red-600 dark:text-red-400 font-mono">
//                     {errorDetails}
//                   </p>
//                 </div>
//               )}
//               <div className="mt-4 flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
//                 <Warning className="text-yellow-500 text-sm mt-0.5" />
//                 <p>Please check your credentials and try again.</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onClose}
//               className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all"
//             >
//               Try Again
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => {
//                 onClose();
//               }}
//               className="px-4 py-2 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
//             >
//               Forgot Password?
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const ConfirmationModal = ({
//   isOpen,
//   onConfirm,
//   onCancel,
//   message,
//   details,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-blue-200 dark:border-blue-800"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
//                 <Security className="text-white text-2xl" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                   Confirm Login
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   Security verification
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
//               <p className="text-gray-700 dark:text-gray-300 mb-4">{message}</p>
//               {details && (
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                     <span className="text-sm text-gray-600 dark:text-gray-400">
//                       Email:
//                     </span>
//                     <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
//                       {details.email}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onConfirm}
//               className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
//             >
//               Confirm
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onCancel}
//               className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//             >
//               Cancel
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const TwoFactorModal = ({ isOpen, onVerify, onCancel }) => {
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const inputs = useRef([]);

//   if (!isOpen) return null;

//   const handleChange = (index, value) => {
//     if (value.length > 1) return;

//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 5) {
//       inputs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputs.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ scale: 0.9, y: 20 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 20 }}
//           className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-purple-200 dark:border-purple-800"
//         >
//           <div className="text-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Security className="text-white text-3xl" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//               Two-Factor Authentication
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               Enter the 6-digit code from your authenticator app
//             </p>
//           </div>

//           <div className="flex justify-center space-x-2 mb-6">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputs.current[index] = el)}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 className="w-12 h-12 text-center text-xl font-bold bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
//               />
//             ))}
//           </div>

//           <div className="flex space-x-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => onVerify(code.join(""))}
//               className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
//             >
//               Verify
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onCancel}
//               className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//             >
//               Cancel
//             </motion.button>
//           </div>

//           <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-4">
//             Didn't receive code?{" "}
//             <button className="text-purple-600 dark:text-purple-400 hover:underline">
//               Resend
//             </button>
//           </p>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ============== MAIN LOGIN COMPONENT ==============

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [apiStatus, setApiStatus] = useState({ online: false, checking: true });
//  const [user, setUser] = useState(null);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);

//   const [modalData, setModalData] = useState({
//     message: "",
//     userData: null,
//     errorDetails: null,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check API status
//     const checkApiStatus = async () => {
//       try {
//         await axios.get('/api/health');
//         setApiStatus({ online: true, checking: false });
//       } catch (error) {
//         setApiStatus({ online: false, checking: false });
//       }
//     };

//     checkApiStatus();
//   }, []);

//   // Login function
//   const login = async (email, password) => {
//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "https://leonstatusprofile.onrender.com/admin/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.data?.success) {
//         const { token, user } = response.data;

//         const authData = {
//           token,
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//           loginTime: new Date().toISOString(),
//         };

//         setUser(authData);
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(authData));

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
//         "❌ " + (error.response?.data?.message || error.message || "Login failed"),
//         {
//           style: {
//             background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//             color: "white",
//             borderRadius: "12px",
//           },
//         }
//       );

//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "https://leonstatusprofile.onrender.com/admin/logout",
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

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

//   // -------------------- Form submit --------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     setModalData({
//       message: "Please confirm your login attempt",
//       details: { email },
//     });
//     setShowConfirmationModal(true);
//   };

//   const handleConfirmLogin = async () => {
//     setShowConfirmationModal(false);

//     try {
//       const result = await login(email, password);

//       if (result?.success) {
//         setModalData({
//           message: "You have successfully logged in!",
//           userData: result.user,
//         });
//         setShowSuccessModal(true);

//         setTimeout(() => {
//           setShowSuccessModal(false);
//           navigate("/dashboard");
//         }, 1500);
//       }
//     } catch (error) {
//       setModalData({
//         message: "Authentication failed",
//         errorDetails: error.response?.data?.message || error.message || "Invalid email or password",
//       });
//       setShowErrorModal(true);
//       setLoading(false);
//     }
//   };

//   const handleTwoFactor = async (code) => {
//     setShowTwoFactorModal(false);
//     try {
//       const response = await axios.post('/api/auth/verify-2fa', {
//         email,
//         code
//       });

//       if (response.data.success) {
//         const result = await login(email, password);
//         setModalData({
//           message: "Two-factor authentication successful!",
//           userData: result.user,
//         });
//         setShowSuccessModal(true);
//         setTimeout(() => {
//           setShowSuccessModal(false);
//           navigate("/dashboard");
//         }, 1500);
//       }
//     } catch (error) {
//       setModalData({
//         message: "Invalid verification code",
//         errorDetails: error.response?.data?.message || "Please enter the correct 6-digit code",
//       });
//       setShowErrorModal(true);
//       setLoading(false);
//     }
//   };

//   // -------------------- Animations --------------------
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   // -------------------- JSX --------------------
//   return (
//     <>
//       {/* Modals */}
//       <SuccessModal
//         isOpen={showSuccessModal}
//         onClose={() => setShowSuccessModal(false)}
//         message={modalData.message}
//         userData={modalData.userData}
//       />
//       <ErrorModal
//         isOpen={showErrorModal}
//         onClose={() => setShowErrorModal(false)}
//         message={modalData.message}
//         errorDetails={modalData.errorDetails}
//       />
//       <ConfirmationModal
//         isOpen={showConfirmationModal}
//         onConfirm={handleConfirmLogin}
//         onCancel={() => {
//           setShowConfirmationModal(false);
//           setLoading(false);
//         }}
//         message={modalData.message}
//         details={modalData.details}
//       />
//       <TwoFactorModal
//         isOpen={showTwoFactorModal}
//         onVerify={handleTwoFactor}
//         onCancel={() => {
//           setShowTwoFactorModal(false);
//           setLoading(false);
//         }}
//       />

//       {/* Login Form */}
//       <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
//         {/* Blobs */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </div>

//         {!apiStatus.checking && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute top-4 right-4 z-20"
//           >
//             <div
//               className={`px-4 py-2 rounded-lg backdrop-blur-md flex items-center space-x-2 ${
//                 apiStatus.online
//                   ? "bg-green-500/20 border border-green-500/30 text-green-400"
//                   : "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400"
//               }`}
//             >
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   apiStatus.online
//                     ? "bg-green-500 animate-pulse"
//                     : "bg-yellow-500"
//                 }`}
//               ></div>
//               <span className="text-sm font-medium">
//                 {apiStatus.online ? "API Connected" : "Using Demo Mode"}
//               </span>
//             </div>
//           </motion.div>
//         )}

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20 relative z-10"
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
//                 <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
//                   <Code className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
//             <p className="text-gray-300">Sign in to access your dashboard</p>
//           </motion.div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <motion.div variants={itemVariants} className="mb-4">
//               <label className="block text-gray-300 text-sm font-semibold mb-2">
//                 Email Address
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <EmailIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   placeholder="Enter your email"
//                   required
//                   autoComplete="off"
//                 />
//               </div>
//             </motion.div>

//             {/* Password */}
//             <motion.div variants={itemVariants} className="mb-4">
//               <label className="block text-gray-300 text-sm font-semibold mb-2">
//                 Password
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <LockIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <div
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                 >
//                   {showPassword ? (
//                     <VisibilityOff className="text-gray-400 hover:text-white transition-colors" />
//                   ) : (
//                     <Visibility className="text-gray-400 hover:text-white transition-colors" />
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Remember Me */}
//             <motion.div
//               variants={itemVariants}
//               className="flex items-center justify-between mb-6"
//             >
//               <label className="flex items-center cursor-pointer group">
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="sr-only"
//                   />
//                   <div
//                     className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
//                       rememberMe
//                         ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent"
//                         : "border-white/30 group-hover:border-white/50"
//                     }`}
//                   >
//                     {rememberMe && (
//                       <svg
//                         className="w-3 h-3 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                 </div>
//                 <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">
//                   Remember me
//                 </span>
//               </label>
//             </motion.div>

//             {/* Submit */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
//             >
//               <span className="relative z-10">
//                 {loading ? (
//                   <div className="flex items-center justify-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Signing in...
//                   </div>
//                 ) : (
//                   "Sign In"
//                 )}
//               </span>
//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300"></div>
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Animations */}
//         <style jsx>{`
//           @keyframes blob {
//             0% {
//               transform: translate(0px, 0px) scale(1);
//             }
//             33% {
//               transform: translate(30px, -50px) scale(1.1);
//             }
//             66% {
//               transform: translate(-20px, 20px) scale(0.9);
//             }
//             100% {
//               transform: translate(0px, 0px) scale(1);
//             }
//           }
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//           .animation-delay-4000 {
//             animation-delay: 4s;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

/* eslint-disable no-unused-vars */
// components/login/Login.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  Person,
  Code,
  CheckCircle,
  Error,
  Warning,
  Close,
  Security,
  Fingerprint,
  VpnKey,
  PhoneIphone,
  MarkEmailRead,
} from "@mui/icons-material";
import axios from "axios";
import Cookies from "js-cookie";

// ============== MODAL COMPONENTS ==============

const SuccessModal = ({ isOpen, onClose, message, userData }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-green-200 dark:border-green-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Success!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Operation successful
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <Close />
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-green-200 dark:border-green-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">{message}</p>
              {userData && (
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      userData.avatar ||
                      `https://ui-avatars.com/api/?name=${userData.name}&background=10b981&color=fff`
                    }
                    alt={userData.name}
                    className="w-10 h-10 rounded-full border-2 border-green-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {userData.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {userData.email}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                      {userData.role}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
            >
              Continue
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ErrorModal = ({ isOpen, onClose, message, errorDetails }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-red-200 dark:border-red-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
                <Error className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Error
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Operation failed
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <Close />
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-red-200 dark:border-red-800">
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                {message}
              </p>
              {errorDetails && (
                <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400 font-mono">
                    {errorDetails}
                  </p>
                </div>
              )}
              <div className="mt-4 flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Warning className="text-yellow-500 text-sm mt-0.5" />
                <p>Please try again.</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all"
            >
              Try Again
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  details,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-blue-200 dark:border-blue-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <Security className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Confirm Action
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Security verification
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{message}</p>
              {details && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Email:
                    </span>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {details.email}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Confirm
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TwoFactorModal = ({ isOpen, onVerify, onCancel, email }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  if (!isOpen) return null;

  const handleChange = (index, value) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    try {
      await axios.post(
        "https://leonstatusprofile.onrender.com/admin/2fa/resend",
        { email },
      );
      // Show success through parent component
    } catch (error) {
      // Show error through parent component
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-purple-200 dark:border-purple-800"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Fingerprint className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter the 6-digit code from your authenticator app
            </p>
          </div>

          <div className="flex justify-center space-x-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              />
            ))}
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onVerify(code.join(""))}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
            >
              Verify
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              Cancel
            </motion.button>
          </div>

          <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-4">
            Didn't receive code?{" "}
            <button
              onClick={handleResendCode}
              disabled={loading}
              className="text-purple-600 dark:text-purple-400 hover:underline disabled:opacity-50"
            >
              {loading ? "Sending..." : "Resend"}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ForgotPasswordModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(email);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-orange-200 dark:border-orange-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                <VpnKey className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Forgot Password
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reset your password
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <Close />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EmailIcon className="text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ResetPasswordModal = ({ isOpen, onClose, onSubmit, token }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Error will be shown through parent component
      return;
    }
    setLoading(true);
    await onSubmit(token, password);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-teal-200 dark:border-teal-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center">
                <LockIcon className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Reset Password
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create a new password
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <Close />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-teal-200 dark:border-teal-800 space-y-4">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="text-gray-400 group-focus-within:text-teal-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="New password"
                    required
                    minLength={6}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <VisibilityOff className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
                    ) : (
                      <Visibility className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
                    )}
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="text-gray-400 group-focus-within:text-teal-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Confirm new password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all disabled:opacity-50"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ============== MAIN LOGIN COMPONENT ==============

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState({ online: false, checking: true });
  const [user, setUser] = useState(null);
  const [resetToken, setResetToken] = useState(null);

  // Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  const [modalData, setModalData] = useState({
    message: "",
    userData: null,
    errorDetails: null,
  });

  const navigate = useNavigate();

  // Check API status
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        await axios.get("https://leonstatusprofile.onrender.com/health");
        setApiStatus({ online: true, checking: false });
      } catch (error) {
        setApiStatus({ online: false, checking: false });
      }
    };

    checkApiStatus();
  }, []);

  // Check for reset token in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("reset_token");
    if (token) {
      setResetToken(token);
      setShowResetPasswordModal(true);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/admin/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } },
      );
      console.log(email, password);
      if (response.data?.success) {
        const { token, user, requires2FA } = response.data;

        if (requires2FA) {
          setShowTwoFactorModal(true);
          return { success: false, requires2FA: true };
        }

        const authData = {
          token,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          loginTime: new Date().toISOString(),
        };

        setUser(authData);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(authData));

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        return { success: true, user: authData };
      }

      throw new Error(response.data?.message || "Login failed");
    } catch (error) {
      throw error;
    }
  };

  // 2FA Verification
  const verify2FA = async (code) => {
    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/admin/verify-2fa",
        { email, code },
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.data?.success) {
        const { token, user } = response.data;

        const authData = {
          token,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          loginTime: new Date().toISOString(),
        };

        setUser(authData);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(authData));

        return { success: true, user: authData };
      }

      throw new Error(response.data?.message || "2FA verification failed");
    } catch (error) {
      throw error;
    }
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/admin/forgot-password",
        { email },
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.data?.success) {
        setModalData({
          message: "Password reset link has been sent to your email!",
          userData: null,
        });
        setShowSuccessModal(true);
        setShowForgotPasswordModal(false);
        return { success: true };
      }

      throw new Error(response.data?.message || "Failed to send reset link");
    } catch (error) {
      throw error;
    }
  };

  // Reset Password
  const resetPassword = async (token, newPassword) => {
    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/admin/reset-password",
        { token, newPassword },
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.data?.success) {
        setModalData({
          message:
            "Your password has been reset successfully! You can now login with your new password.",
          userData: null,
        });
        setShowSuccessModal(true);
        setShowResetPasswordModal(false);

        // Clear token from URL
        window.history.replaceState({}, document.title, "/login");

        return { success: true };
      }

      throw new Error(response.data?.message || "Failed to reset password");
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          "https://leonstatusprofile.onrender.com/admin/logout",
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");

      navigate("/login");
    } catch (error) {
      // Still clear local data even if API call fails
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      navigate("/login");
    }
  };

  // -------------------- Form submit --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setModalData({
      message: "Please confirm your login attempt",
      details: { email },
    });
    setShowConfirmationModal(true);
  };

  const handleConfirmLogin = async () => {
    setShowConfirmationModal(false);
    setLoading(true);

    try {
      const result = await login(email, password);

      if (result?.success) {
        setModalData({
          message: "You have successfully logged in!",
          userData: result.user,
        });
        setShowSuccessModal(true);

        setTimeout(() => {
          setShowSuccessModal(false);
          navigate("/dashboard");
        }, 1500);
      } else if (result?.requires2FA) {
        setShowTwoFactorModal(true);
      }
    } catch (error) {
      setModalData({
        message: "Authentication failed",
        errorDetails:
          error.response?.data?.message ||
          error.message ||
          "Invalid email or password",
      });
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleTwoFactorVerify = async (code) => {
    setShowTwoFactorModal(false);
    setLoading(true);

    try {
      const result = await verify2FA(code);

      if (result?.success) {
        setModalData({
          message: "Two-factor authentication successful!",
          userData: result.user,
        });
        setShowSuccessModal(true);

        setTimeout(() => {
          setShowSuccessModal(false);
          navigate("/dashboard");
        }, 1500);
      }
    } catch (error) {
      setModalData({
        message: "2FA verification failed",
        errorDetails:
          error.response?.data?.message || "Invalid verification code",
      });
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      await forgotPassword(email);
    } catch (error) {
      setModalData({
        message: "Failed to send reset link",
        errorDetails: error.response?.data?.message || error.message,
      });
      setShowErrorModal(true);
    }
  };

  const handleResetPassword = async (token, newPassword) => {
    try {
      await resetPassword(token, newPassword);
    } catch (error) {
      setModalData({
        message: "Failed to reset password",
        errorDetails: error.response?.data?.message || error.message,
      });
      setShowErrorModal(true);
    }
  };
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    // Get a cookie by name
    const storedUser = Cookies.get("user"); // name of the cookie
    if (storedUser) {
      setCookieValue(JSON.parse(storedUser)); // parse if JSON stored
    }
  }, []); 
  // -------------------- Animations --------------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // -------------------- JSX --------------------
  return (
    <>
      {/* Modals */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={modalData.message}
        userData={modalData.userData}
      />

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        message={modalData.message}
        errorDetails={modalData.errorDetails}
      />

      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={handleConfirmLogin}
        onCancel={() => {
          setShowConfirmationModal(false);
          setLoading(false);
        }}
        message={modalData.message}
        details={modalData.details}
      />

      <TwoFactorModal
        isOpen={showTwoFactorModal}
        onVerify={handleTwoFactorVerify}
        onCancel={() => {
          setShowTwoFactorModal(false);
          setLoading(false);
        }}
        email={email}
      />

      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
        onSubmit={handleForgotPassword}
      />

      <ResetPasswordModal
        isOpen={showResetPasswordModal}
        onClose={() => {
          setShowResetPasswordModal(false);
          setResetToken(null);
        }}
        onSubmit={handleResetPassword}
        token={resetToken}
      />

      {/* Login Form */}
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        {/* Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {!apiStatus.checking && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 z-20"
          >
            <div
              className={`px-4 py-2 rounded-lg backdrop-blur-md flex items-center space-x-2 ${
                apiStatus.online
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  apiStatus.online
                    ? "bg-green-500 animate-pulse"
                    : "bg-yellow-500"
                }`}
              ></div>
              <span className="text-sm font-medium">
                {apiStatus.online ? "API Connected" : "API Disconnected"}
              </span>
            </div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20 relative z-10"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300">Sign in to access your dashboard</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <motion.div variants={itemVariants} className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EmailIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants} className="mb-4">
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showPassword ? (
                    <VisibilityOff className="text-gray-400 hover:text-white transition-colors" />
                  ) : (
                    <Visibility className="text-gray-400 hover:text-white transition-colors" />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between mb-6"
            >
              <label className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
                      rememberMe
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent"
                        : "border-white/30 group-hover:border-white/50"
                    }`}
                  >
                    {rememberMe && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                onClick={() => setShowForgotPasswordModal(true)}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot Password?
              </button>
            </motion.div>

            {/* Submit */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300"></div>
            </motion.button>
          </form>
        </motion.div>

        {/* Animations */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </>
  );
};
