/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  Error,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://api.example.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const socialLinks = [
    { icon: <Twitter />, url: "https://twitter.com/yourhandle" },
    { icon: <GitHub />, url: "https://github.com/yourusername" },
    { icon: <LinkedIn />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <Instagram />, url: "https://instagram.com/yourhandle" },
    { icon: <YouTube />, url: "https://youtube.com/yourchannel" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "One Of Projects", url: "/7893/1673" },
    { name: "Messages", url: "/7782/8191" },
    { name: "About", url: "/7283/2829" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-4"
            >
              <Code className="text-indigo-500 text-4xl mr-3" />
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                LD
              </h2>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Full Stack Web Developer specializing in modern JavaScript <br />
              frameworks. I build fast, responsive, and accessible web <br />
              applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.Link
                  key={index}
                  to={link.url}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {React.cloneElement(link.icon, { fontSize: "large" })}
                </motion.Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Me
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Email className="text-indigo-400 mr-3 mt-1" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  leonakingeneye2002@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="text-indigo-400 mr-3 mt-1" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  +250 (78) 794 - 4577
                </span>
              </li>
              <li className="flex items-start">
                <LocationOn className="text-indigo-400 mr-3 mt-1" />
                <span className="text-gray-400 hover:text-white transition-colors">
                  Kigali, Rwanda
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
                  >
                    <button className="w-full bg-gradient-to-r from-indigo-100 to-purple-200">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-8 mb-12 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-800 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-800 rounded-full opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-indigo-600 opacity-10"></div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">
              Subscribe to my Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest web development tips and resources delivered to
              your inbox.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 text-green-400 p-4 rounded-lg flex items-center justify-center space-x-2"
              >
                <CheckCircle />
                <span>{message}</span>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 text-red-400 p-4 rounded-lg flex items-center justify-center space-x-2"
              >
                <Error />
                <span>{message}</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 bg-white/90 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                    status === "loading"
                      ? "bg-indigo-700 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send fontSize="small" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} LD.</p>
        </div>
      </div>
    </footer>
  );
};
