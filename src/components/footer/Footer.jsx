/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Email,
  Phone,
  LocationOn,
  Twitter,
  GitHub,
  LinkedIn,
  Instagram,
  YouTube,
  Code,
  Send,
  CheckCircle,
  Error as ErrorIcon,
  Warning,
  Info,
  Close,
  Verified,
  MarkunreadMailbox,
  Campaign,
  Subscriptions,
  ArrowForward,
  NewLabel,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  
  // Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      
      // Show error modal
      setSubscriptionEmail(email);
      setShowErrorModal(true);
      
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Show confirmation modal
    setSubscriptionEmail(email);
    setShowConfirmModal(true);
  };

  const confirmSubscription = async () => {
    setShowConfirmModal(false);
    setStatus("loading");

    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/subscription",
        { email: subscriptionEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      );

      setStatus("success");
      setMessage("Thank you for subscribing! You'll receive updates soon.");
      setEmail("");
      setSubscriptionEmail("");
      
      // Show success modal
      setShowSuccessModal(true);
      
      toast.success("✨ Successfully subscribed to newsletter!");
    } catch (error) {
      let errorMessage = "Subscription failed. Please try again later.";

      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection.";
      }

      setStatus("error");
      setMessage(errorMessage);
      
      // Show error modal
      setShowErrorModal(true);
      
      toast.error(errorMessage);
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setMessage("");
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  const socialLinks = [
    { 
      icon: <GitHub />, 
      url: 'https://github.com/Leon-kings',
      name: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: <LinkedIn />, 
      url: 'https://www.linkedin.com/in/akingeneye-leon-5302502b7/',
      name: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Twitter />, 
      url: '',
      name: 'Twitter',
      color: 'hover:text-blue-400'
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/", icon: <Code className="text-sm" /> },
    { name: "Portfolio", url: "/7893/1673", icon: <Subscriptions className="text-sm" /> },
    { name: "Messages", url: "/7782/8191", icon: <MarkunreadMailbox className="text-sm" /> },
    { name: "About", url: "/7283/2829", icon: <Info className="text-sm" /> },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-green-100 dark:border-green-900"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 transition-colors"
              >
                <Close />
              </button>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
                >
                  <CheckCircle className="text-5xl text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Successfully Subscribed!
                </h3>
                
                <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 mb-4">
                  <Verified className="text-lg" />
                  <span className="text-sm font-medium">Email Confirmed</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for subscribing to my newsletter! You'll receive the latest web development tips and resources directly in your inbox.
                </p>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MarkunreadMailbox className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Confirmation sent to:</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{subscriptionEmail}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    onClick={resetForm}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Done
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setEmail("");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    Subscribe Another
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-red-100 dark:border-red-900"
            >
              <button
                onClick={() => setShowErrorModal(false)}
                className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 text-white transition-colors"
              >
                <Close />
              </button>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6"
                >
                  <ErrorIcon className="text-5xl text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Subscription Failed
                </h3>
                
                <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 mb-4">
                  <Warning className="text-lg" />
                  <span className="text-sm font-medium">Invalid Email</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {message || "Please enter a valid email address to subscribe."}
                </p>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Info className="text-red-600 dark:text-red-400 text-lg mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email format should be:</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">name@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    onClick={() => setShowErrorModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Try Again
                  </motion.button>
                  <motion.button
                    onClick={() => setShowErrorModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border bg-gradient-to-b from-red-400 to-red-500 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Confirm Modal */}
        {showConfirmModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-indigo-100 dark:border-indigo-900"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-6"
                >
                  <Campaign className="text-4xl text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Confirm Subscription
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You're subscribing to the LD Newsletter. You'll receive updates about web development, tips, and resources.
                </p>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Email className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email to subscribe:</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{subscriptionEmail}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    onClick={confirmSubscription}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirm
                  </motion.button>
                  <motion.button
                    onClick={() => setShowConfirmModal(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border py-3 px-4 rounded-lg bg-gradient-to-b from-red-400 to-red-500 text-white transition-colors"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* About Section - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Code className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  Leon
                </h2>
              </motion.div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Full Stack Web Developer specializing in modern JavaScript frameworks. 
                I build fast, responsive, and accessible web applications that deliver 
                exceptional user experiences.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-400 ${link.color} transition-all duration-300`}
                    title={link.name}
                  >
                    {React.cloneElement(link.icon, { fontSize: "large" })}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-2">
                  <Email className="text-indigo-400 text-lg" />
                </div>
                Contact Info
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 transition-colors">
                    <Email className="text-indigo-400 text-sm" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors break-all">
                    leonakingeneye2002@gmail.com
                  </span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 transition-colors">
                    <Phone className="text-indigo-400 text-sm" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    +250 (78) 794 - 4577
                  </span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 transition-colors">
                    <LocationOn className="text-indigo-400 text-sm" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    Kigali, Rwanda
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-2">
                  <Subscriptions className="text-purple-400 text-lg" />
                </div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.url}
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      <div className="w-6 h-6 bg-purple-500/10 rounded-lg flex items-center justify-center mr-2 group-hover:bg-purple-500/20 transition-colors">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                      <ArrowForward className="text-xs ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 h-full">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-2">
                  <Campaign className="text-indigo-400 text-lg" />
                </div>
                Newsletter
              </h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  500+
                </div>
                <p className="text-sm text-gray-400">Active Subscribers</p>
              </div>
              <div className="flex justify-center space-x-2 text-xs text-gray-500">
                <span className="flex items-center"><Verified className="text-green-400 text-sm mr-1" /> Weekly updates</span>
                <span className="flex items-center"><Verified className="text-green-400 text-sm mr-1" /> No spam</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 overflow-hidden border border-indigo-500/30 shadow-2xl"
        >
          {/* Animated background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600 rounded-full opacity-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600 rounded-full opacity-10"
          />

          <div className="relative">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4"
              >
                <NewLabel className="text-3xl text-white" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Stay Updated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Leon's Newsletter</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest web development tips, tutorials, and resources delivered weekly.
              </p>
            </div>

            {status === "success" && !showSuccessModal ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 backdrop-blur-sm text-green-400 p-6 rounded-xl max-w-2xl mx-auto border border-green-500/30"
              >
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <CheckCircle className="text-3xl" />
                  <span className="text-xl font-medium">{message}</span>
                </div>
                <button
                  onClick={resetForm}
                  className="text-sm text-green-400 hover:text-green-300 underline underline-offset-4"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              >
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Email className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 min-w-[160px] ${
                    status === "loading"
                      ? "bg-gradient-to-r from-indigo-400 to-purple-400 cursor-not-allowed opacity-70"
                      : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send fontSize="small" />
                      <span>Subscribe Now</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}

            <p className="text-xs text-center text-gray-500 mt-4">
              By subscribing, you agree to receive occasional emails. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">Leon</span>. All rights reserved. Built with ❤️ in Rwanda.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Full Stack Developer • UI/UX Enthusiast • Problem Solver
          </p>
        </motion.div>
      </div>

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
        theme="dark"
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
      `}</style>
    </footer>
  );
};