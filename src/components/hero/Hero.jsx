/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_14_43 AM.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });
  const [modalScrollTop, setModalScrollTop] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHireSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset any previous status

    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/hire",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the request was successful (2xx status)
      if (response.status >= 200 && response.status < 300) {
        // Show success toast if you're using toast notifications
        toast.success("Hire request submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Set success state in modal
        setSubmitStatus("success");

        // Reset form data (but keep modal open to show success message)
        setFormData({
          name: "",
          email: "",
          message: "",
          budget: "",
        });
      } else {
        throw new Error(
          response.data?.message ||
            `Request failed with status ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Set error state in modal
      setSubmitStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to submit hire request. Please try again."
      );

      // Show error toast if you're using toast notifications
      toast.error(
        error.response?.data?.message ||
          "Failed to submit hire request. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/messages",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        // Show success toast
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Set success state and reset form
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(response.data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);

      // Set error state
      setSubmitStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to send message. Please try again."
      );

      // Show error toast
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleScroll = (direction, modalRef) => {
    if (modalRef.current) {
      const scrollAmount = 100; // Adjust scroll amount as needed
      if (direction === "up") {
        modalRef.current.scrollTop -= scrollAmount;
      } else {
        modalRef.current.scrollTop += scrollAmount;
      }
      setModalScrollTop(modalRef.current.scrollTop);
    }
  };

  const hireModalRef = React.createRef();
  const contactModalRef = React.createRef();

  return (
    <>
      <section className="hero w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-16 md:py-24">
        <div className=" px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Hero Content */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="w-full">
                <div className="w-full">
                  <p className="text-lg text-indigo-600 mb-2 font-medium">
                    Hello, I'm
                  </p>
                  <h2 className="text-4xl  md:text-5xl font-bold text-gray-800 mb-3 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Leon AKINGENEYE
                  </h2>
                  <div className="mt-4  text-xl md:text-2xl text-gray-600 mb-6">
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-100 px-2">
                      <span className="relative text-indigo-600 font-medium">
                        Web Designer
                      </span>
                    </span>
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-100 px-2 ml-2">
                      <span className="relative text-purple-600 font-medium">
                        Web Developer
                      </span>
                    </span>
                    <br />
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
                      <span className="relative text-blue-600 font-medium">
                        Front End Developer
                      </span>
                    </span>
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
                      <span className="relative text-green-600 font-medium">
                        Back End Developer
                      </span>
                    </span>
                    <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
                      <span className="relative text-red-300 font-medium">
                        Graphic Designer
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mt-25 justify-center item-center flex space-x-4">
                  <button
                    onClick={() => setHireModalOpen(true)}
                    className="btn bg-gradient-to-r from-indigo-400 to-purple-300 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <WorkIcon className="mr-2" /> Hire Me
                  </button>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="btn border-2 bg-gradient-to-r from-indigo-200 to-purple-200 hover:bg-indigo-50 px-6 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                  >
                    <EmailIcon className="mr-2" /> Contact Me
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="hero-image relative">
                <div className="relative group">
                  <img
                    src={image}
                    alt=""
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-full">
                    <WorkIcon className="text-indigo-600 size-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Me Modal */}
        {hireModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div
              ref={hireModalRef}
              className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto transition-all duration-300 transform translate-y-0"
            >
              <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <WorkIcon
                    className="text-indigo-600 mr-2"
                    style={{ fontSize: 24 }}
                  />
                  Hire Me
                </h3>
                <button
                  onClick={() => {
                    setHireModalOpen(false);
                    setSubmitStatus(null); // Reset status when closing
                  }}
                  className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100"
                >
                  <CloseIcon style={{ fontSize: 24 }} />
                </button>
              </div>

              <div className="p-6">
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for your interest. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setHireModalOpen(false);
                        setSubmitStatus(null);
                      }}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Submission Failed
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {errorMessage ||
                        "Something went wrong. Please try again."}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Try Again
                      </button>
                      <button
                        onClick={() => {
                          setHireModalOpen(false);
                          setSubmitStatus(null);
                        }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleHireSubmit}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    {/* Header with decorative SVG */}
                    <div className="text-center mb-8 relative">
                      <div className="absolute -top-6 left-0 right-0 flex justify-center">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="url(#paint0_linear)"
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 16V16.01M12 8V12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="12"
                              y1="2"
                              x2="12"
                              y2="22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#6366F1" />
                              <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 pt-4">
                        Get in Touch
                      </h3>
                      <p className="text-gray-500 mt-1">
                        Let's discuss your project needs
                      </p>
                    </div>

                    {/* Name Field */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="admin"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-indigo-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="admin@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-indigo-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Budget Field */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        Project Budget (USD)
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all bg-gray-50"
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select budget range</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                        Project Details
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          placeholder="Hi, I need to develop websites which attract customers !"
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded">
                          <button
                            type="button"
                            onClick={() => handleScroll("up", hireModalRef)}
                            className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                              ></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleScroll("down", hireModalRef)}
                            className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setHireModalOpen(false)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 hover:shadow-sm flex items-center"
                      >
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center transition-all transform hover:-translate-y-0.5 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-5 h-5 mr-1 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                            Submit Request
                          </>
                        )}
                      </button>
                    </div>

                    {/* Decorative footer */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                      <svg
                        width="120"
                        height="8"
                        viewBox="0 0 120 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="4"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.5"
                        />
                        <circle
                          cx="20"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.3"
                        />
                        <circle
                          cx="36"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.2"
                        />
                        <circle
                          cx="52"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.1"
                        />
                        <circle
                          cx="68"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.05"
                        />
                        <circle
                          cx="84"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.05"
                        />
                        <circle
                          cx="100"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.1"
                        />
                        <circle
                          cx="116"
                          cy="4"
                          r="4"
                          fill="#6366F1"
                          fillOpacity="0.2"
                        />
                      </svg>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Me Modal */}
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
            <div
              ref={contactModalRef}
              className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden transition-all duration-300 transform translate-y-0"
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-10 p-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl bg-white">
                <h3 className="text-xl font-light bg-gradient-to-r flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Contact Me
                </h3>
                <button
                  onClick={() => {
                    setContactModalOpen(false);
                    setSubmitStatus(null);
                  }}
                  className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto h-[calc(80vh-56px)]">
                <div className="p-6">
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 mb-6">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <button
                        onClick={() => {
                          setContactModalOpen(false);
                          setSubmitStatus(null);
                        }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  ) : submitStatus === "error" ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Message Failed
                      </h3>
                      <p className="text-gray-500 mb-6">
                        {errorMessage ||
                          "Something went wrong. Please try again."}
                      </p>
                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={() => setSubmitStatus(null)}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                          Try Again
                        </button>
                        <button
                          onClick={() => {
                            setContactModalOpen(false);
                            setSubmitStatus(null);
                          }}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Contact Info Card */}
                      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-200 p-5 rounded-xl border border-indigo-100 relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-indigo-100 opacity-20"></div>
                        <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-purple-100 opacity-20"></div>

                        <h4 className="text-lg font-medium bg-gradient-to-l p-4 rounded-2xl from-indigo-200 to-purple-200 justify-center text-gray-800 mb-3 flex items-center relative z-10">
                          <svg
                            className="w-5 h-5 text-indigo-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          Contact Information
                        </h4>
                        <div className="space-y-3 relative z-10">
                          <div
                            onClick={() =>
                              (window.location.href =
                                "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new")
                            }
                            className="flex items-center bg-gradient-to-r from-indigo-300 to-purple-100 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5 text-indigo-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span className="text-gray-700">
                              leonakingeneye2002@gmail.com
                            </span>
                          </div>
                          <div
                            onClick={() =>
                              (window.location.href = "tel:+250787944577")
                            }
                            className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5 text-indigo-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              ></path>
                            </svg>
                            <span className="text-gray-700">
                              +250 (78) 794-4577
                            </span>
                          </div>
                          <Link
                            to={
                              "https://www.google.com/maps/place/Kigali,+Rwanda"
                            }
                            rel="noopener noreferrer"
                            className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5 text-indigo-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                            <span className="text-gray-700">
                              Kigali, Rwanda
                            </span>
                          </Link>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <form
                        onSubmit={handleContactSubmit}
                        className="text-black bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl"
                      >
                        {/* Name Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                            Your Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              placeholder="LD"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="admin@example.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                            Message
                          </label>
                          <div className="relative">
                            <textarea
                              name="message"
                              rows="5"
                              placeholder="Hi,am glad to have you here!"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                            <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded shadow-sm">
                              <button
                                type="button"
                                onClick={() =>
                                  handleScroll("up", contactModalRef)
                                }
                                className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleScroll("down", contactModalRef)
                                }
                                className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Form Buttons */}
                        <div className="mt-8 flex justify-end space-x-3">
                          <button
                            type="button"
                            onClick={() => setContactModalOpen(false)}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 hover:shadow-sm flex items-center"
                          >
                            <svg
                              className="w-5 h-5 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center transition-all transform hover:-translate-y-0.5 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-5 h-5 mr-1 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  ></path>
                                </svg>
                                Send Message
                              </>
                            )}
                          </button>
                        </div>
                        {/* Decorative footer */}
                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                          <svg
                            width="120"
                            height="8"
                            viewBox="0 0 120 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="4"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.5"
                            />
                            <circle
                              cx="20"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.3"
                            />
                            <circle
                              cx="36"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.2"
                            />
                            <circle
                              cx="52"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.1"
                            />
                            <circle
                              cx="68"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.05"
                            />
                            <circle
                              cx="84"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.05"
                            />
                            <circle
                              cx="100"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.1"
                            />
                            <circle
                              cx="116"
                              cy="4"
                              r="4"
                              fill="#6366F1"
                              fillOpacity="0.2"
                            />
                          </svg>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
