/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Material Icons
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import ForumIcon from '@mui/icons-material/Forum';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';

export const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.warning("👤 Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.warning("📧 Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.warning("📧 Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.warning("💬 Please enter your message");
      return false;
    }
    if (formData.message.trim().length < 10) {
      toast.warning("📝 Message should be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmModal(true);
    }
  };

  const handleSubmit = async () => {
    setShowConfirmModal(false);
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/messages",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("✨ Message delivered successfully!", {
        icon: "🚀",
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      
      setFormData({ name: "", email: "", message: "" });
      setShowSuccessModal(true);
    } catch (error) {
      let errorMessage = "Unable to send message. Please try again.";

      if (error.response) {
        errorMessage =
          error.response.data.message ||
          `Server error (${error.response.status})`;
      } else if (error.request) {
        errorMessage = "No response from server. Check your connection.";
      } else {
        errorMessage = error.message;
      }

      toast.error(`❌ ${errorMessage}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      
      setSubmissionError(errorMessage);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
    setSubmissionError(null);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast.success("📋 Email copied to clipboard!");
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      toast.success("📋 Phone number copied to clipboard!");
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="w-full relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 overflow-hidden">
      
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600 dark:text-blue-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-48 h-48 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            <ForumIcon className="text-4xl text-white relative z-10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm just one message away from turning ideas into reality.
          </p>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setShowSuccessModal(false)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-green-500/30 dark:border-green-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Success Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full"
                      style={{ left: '50%', top: '50%' }}
                      animate={{
                        x: [0, Math.random() * 200 - 100],
                        y: [0, Math.random() * 200 - 100],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors bg-gray-100 dark:bg-gray-700 rounded-full p-1"
                >
                  <CloseIcon />
                </button>
                
                <div className="text-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full mb-6 shadow-xl"
                  >
                    <CheckCircleIcon className="text-6xl text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 mb-4"
                  >
                    <VerifiedIcon className="text-lg" />
                    <span className="text-sm font-medium">Verified & Delivered</span>
                  </motion.div>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-300 mb-6"
                  >
                    Thank you for reaching out, <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>! I'll review your message and get back to you within <span className="text-blue-600 dark:text-blue-400 font-semibold">24 hours</span>.
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 mb-6 border border-blue-100 dark:border-blue-800"
                  >
                    <div className="flex items-start space-x-3">
                      <MarkunreadIcon className="text-blue-600 dark:text-blue-400 text-lg mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-300">A confirmation has been sent to:</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{formData.email}</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex space-x-3"
                  >
                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <SendIcon className="text-lg" />
                      <span>Send Another Message</span>
                    </motion.button>
                    <motion.button
                      onClick={() => setShowSuccessModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-none px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <CloseIcon />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Error Modal */}
          {showErrorModal && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setShowErrorModal(false)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-red-500/30 dark:border-red-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Error Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-400 rounded-full"
                      style={{ left: '50%', top: '50%' }}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setShowErrorModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors bg-gray-100 dark:bg-gray-700 rounded-full p-1"
                >
                  <CloseIcon />
                </button>
                
                <div className="text-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-full mb-6 shadow-xl"
                  >
                    <ErrorIcon className="text-6xl text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Failed
                    </h3>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 mb-4"
                  >
                    <WarningIcon className="text-lg" />
                    <span className="text-sm font-medium">Delivery Error</span>
                  </motion.div>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-300 mb-6"
                  >
                    {submissionError || "Something went wrong. Please try again."}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-xl p-4 mb-6 border border-red-100 dark:border-red-800"
                  >
                    <div className="flex items-start space-x-3">
                      <InfoIcon className="text-red-600 dark:text-red-400 text-lg mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">📋 Troubleshooting Tips:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                          <li>Check your internet connection</li>
                          <li>Verify email address is correct</li>
                          <li>Try again in a few minutes</li>
                          <li>Contact me directly at <span className="font-medium text-blue-600 dark:text-blue-400">leonakingeneye2002@gmail.com</span></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex space-x-3"
                  >
                    <motion.button
                      onClick={() => {
                        setShowErrorModal(false);
                        setShowConfirmModal(true);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <ReplayIcon className="text-lg" />
                      <span>Try Again</span>
                    </motion.button>
                    <motion.button
                      onClick={() => setShowErrorModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Confirm Modal */}
          {showConfirmModal && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setShowConfirmModal(false)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-blue-500/30 dark:border-blue-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-6 shadow-xl"
                  >
                    <SendIcon className="text-5xl text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Confirm Your Message
                    </h3>
                  </motion.div>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 mb-6"
                  >
                    Please review your message before sending
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-800 rounded-xl p-5 mb-6 text-left space-y-4"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PersonIcon className="text-blue-600 dark:text-blue-400 text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Full Name</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{formData.name || "Not provided"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <EmailIcon className="text-indigo-600 dark:text-indigo-400 text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Email Address</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">{formData.email || "Not provided"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageIcon className="text-purple-600 dark:text-purple-400 text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Message</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                          "{formData.message || "No message provided"}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex space-x-3"
                  >
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="text-lg" />
                          <span>Confirm & Send</span>
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      onClick={() => setShowConfirmModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Edit Message
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Professional Details */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Professional Contact Card */}
            <div className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <RocketLaunchIcon className="text-white text-xl" />
                  </div>
                  Why Connect With Me?
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center">
                      <AccessTimeIcon className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">24/7 Availability</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">I respond within 24 hours, often much faster</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center">
                      <VerifiedIcon className="text-green-600 dark:text-green-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">NDA Ready</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Your ideas and projects are 100% confidential</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center">
                      <CheckCircleIcon className="text-purple-600 dark:text-purple-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Free Consultation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">30-minute strategy call at no cost</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-5 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <EmailIcon className="text-white text-lg" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 break-all">leonakingeneye2002@gmail.com</p>
                <button
                  onClick={() => copyToClipboard("leonakingeneye2002@gmail.com", "email")}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center space-x-1 transition-colors"
                >
                  <ContentCopyIcon className="text-sm" />
                  <span>{copiedEmail ? "Copied!" : "Copy email"}</span>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-5 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="text-white text-lg" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">+250 787 944 577</p>
                <button
                  onClick={() => copyToClipboard("+250787944577", "phone")}
                  className="text-xs text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium flex items-center space-x-1 transition-colors"
                >
                  <ContentCopyIcon className="text-sm" />
                  <span>{copiedPhone ? "Copied!" : "Copy number"}</span>
                </button>
              </motion.div>
            </div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-5 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <LocationOnIcon className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Kigali, Rwanda</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-start space-x-4">
              <motion.a
                href="https://github.com/Leon-kings"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-lg"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/leon-akingeneye"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all shadow-lg"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://twitter.com/leon_kings"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-all shadow-lg"
              >
                <TwitterIcon />
              </motion.a>
            </div>

            {/* Animated Illustration */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden lg:block mt-8"
            >
              <div className="relative">
                <svg viewBox="0 0 500 300" className="w-full h-auto">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.2 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.2 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Background Circles */}
                  <circle cx="250" cy="150" r="120" fill="url(#grad1)" />
                  <circle cx="280" cy="130" r="80" fill="url(#grad2)" />
                  
                  {/* Envelope Base */}
                  <rect x="180" y="90" width="140" height="100" rx="12" fill="#3B82F6" />
                  <rect x="180" y="90" width="140" height="100" rx="12" fill="white" className="dark:fill-gray-800" />
                  
                  {/* Envelope Flap */}
                  <polygon points="180,90 250,140 320,90" fill="#3B82F6" fillOpacity="0.3" />
                  <polygon points="180,90 250,140 320,90" fill="white" className="dark:fill-gray-800" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Envelope Bottom */}
                  <polygon points="180,190 210,150 250,170 290,150 320,190" fill="#3B82F6" fillOpacity="0.4" />
                  
                  {/* Paper Airplane */}
                  <motion.g
                    animate={{ 
                      x: [0, 40, 0],
                      y: [0, -20, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <polygon points="320,120 360,100 380,120 360,140" fill="#6366F1" />
                    <polygon points="360,140 380,120 370,130" fill="#4F46E5" />
                  </motion.g>
                  
                  {/* Dots */}
                  <circle cx="210" cy="130" r="3" fill="#3B82F6" />
                  <circle cx="230" cy="150" r="3" fill="#6366F1" />
                  <circle cx="270" cy="120" r="3" fill="#8B5CF6" />
                  <circle cx="290" cy="140" r="3" fill="#EC4899" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
                  Send a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Fill out the form below and I'll get back to you shortly</p>
              </div>

              <form onSubmit={handleConfirmSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PersonIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EmailIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute top-3.5 left-0 pl-3 pointer-events-none">
                      <MessageIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="block w-full pl-10 pr-3 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all resize-none"
                      placeholder="Tell me about your project, idea, or collaboration..."
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Minimum 10 characters
                    </p>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {formData.message.length}/500
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="text-xl group-hover:rotate-12 transition-transform" />
                      <span>Send Message</span>
                      <RocketLaunchIcon className="text-xl group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center space-x-2 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-xs">🔒</span>
                    </div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Encrypted & Secure • No spam ever
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
    </section>
  );
};