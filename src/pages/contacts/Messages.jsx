/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowSuccessPage(true);
    } catch (error) {
      let errorMessage = "Something went wrong!";
      
      if (error.response) {
        errorMessage = error.response.data.message || 
                      `Server responded with ${error.response.status}`;
      } else if (error.request) {
        errorMessage = "No response from server - please try again later";
      } else {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
      setSubmissionError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccessPage(false);
    setSubmissionError(null);
  };

  return (
    <section className="w-full relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-300 to-violet-500">
      {/* SVG Decorations */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-24 text-blue-100"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {showSuccessPage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
          >
            <svg
              className="w-20 h-20 mx-auto text-green-500 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <motion.button
              onClick={resetForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Drop me a message
                below.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-auto"
          >
            <svg viewBox="0 0 500 500" className="w-full h-auto">
              <rect
                x="50"
                y="50"
                width="400"
                height="400"
                rx="20"
                fill="#f0f9ff"
                stroke="#3B82F6"
                strokeWidth="2"
              />

              <motion.rect
                x="100"
                y="100"
                width="300"
                height="300"
                rx="15"
                fill="white"
                stroke="#3B82F6"
                strokeWidth="2"
                animate={{ y: [100, 90, 100] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <g transform="translate(0, -20)">
                <motion.rect
                  x="120"
                  y="150"
                  width="180"
                  height="50"
                  rx="10"
                  fill="#e0f2fe"
                  initial={{ width: 0 }}
                  animate={{ width: 180 }}
                  transition={{ duration: 0.5 }}
                />
                <text
                  x="130"
                  y="180"
                  fontFamily="Arial"
                  fontSize="14"
                  fill="#0369a1"
                >
                  Hi there! Message us below
                </text>

                <motion.rect
                  x="300"
                  y="220"
                  width="180"
                  height="50"
                  rx="10"
                  fill="#3B82F6"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 180 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                <motion.text
                  x="310"
                  y="250"
                  fontFamily="Arial"
                  fontSize="14"
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                >
                  Hello Leon! I'd like to connect
                </motion.text>

                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.5 }}
                >
                  <motion.circle
                    cx="140"
                    cy="300"
                    r="5"
                    fill="#9ca3af"
                    animate={{ cy: [300, 290, 300] }}
                    transition={{ duration: 1, delay: 3, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="160"
                    cy="300"
                    r="5"
                    fill="#9ca3af"
                    animate={{ cy: [300, 290, 300] }}
                    transition={{ duration: 1, delay: 3.2, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="180"
                    cy="300"
                    r="5"
                    fill="#9ca3af"
                    animate={{ cy: [300, 290, 300] }}
                    transition={{ duration: 1, delay: 3.4, repeat: Infinity }}
                  />
                  <text
                    x="200"
                    y="305"
                    fontFamily="Arial"
                    fontSize="12"
                    fill="#6b7280"
                  >
                    Leon is typing...
                  </text>
                </motion.g>
              </g>

              <motion.g transform="translate(150, 370)">
                <motion.rect
                  x="0"
                  y="0"
                  width="200"
                  height="50"
                  rx="25"
                  fill="#3B82F6"
                  animate={{ fill: ["#3B82F6", "#2563eb", "#3B82F6"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.text
                  x="100"
                  y="30"
                  fontFamily="Arial"
                  fontSize="16"
                  fill="white"
                  textAnchor="middle"
                  fontWeight="bold"
                  animate={{ fontSize: ["16px", "17px", "16px"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Message Us Now
                </motion.text>

                <motion.polygon
                  points="180,15 195,25 180,35"
                  fill="white"
                  animate={{
                    points: [
                      "180,15 195,25 180,35",
                      "185,15 200,25 185,35",
                      "180,15 195,25 180,35",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.g>

              <text
                x="250"
                y="80"
                fontFamily="Arial"
                fontSize="24"
                fill="#3B82F6"
                textAnchor="middle"
                fontWeight="bold"
              >
                Leon
              </text>
            </svg>
          </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                {submissionError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700"
                  >
                    <p>{submissionError}</p>
                  </motion.div>
                )}

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
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
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            </div>
          </>
        )}
      </div>

      {/* Bottom SVG Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="w-full h-24 text-blue-100"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

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
        theme="colored"
      />
    </section>
  );
};