// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import WorkIcon from "@mui/icons-material/Work";
// import EmailIcon from "@mui/icons-material/Email";
// import CloseIcon from "@mui/icons-material/Close";
// import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_14_43 AM.png";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export const Hero = () => {
//   const [hireModalOpen, setHireModalOpen] = useState(false);
//   const [contactModalOpen, setContactModalOpen] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     budget: "$500-$1000",
//   });
//   const [modalScrollTop, setModalScrollTop] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleHireSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null); // Reset any previous status

//     try {
//       const response = await axios.post(
//         "https://leonstatusprofile.onrender.com/hire",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Check if the request was successful (2xx status)
//       if (response.status >= 200 && response.status < 300) {
//         // Show success toast if you're using toast notifications
//         toast.success("Hire request submitted successfully!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });

//         // Set success state in modal
//         setSubmitStatus("success");

//         // Reset form data (but keep modal open to show success message)
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//           budget: "",
//         });
//       } else {
//         throw new Error(
//           response.data?.message ||
//             `Request failed with status ${response.status}`
//         );
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       // Set error state in modal
//       setSubmitStatus("error");
//       setErrorMessage(
//         error.response?.data?.message ||
//           error.message ||
//           "Failed to submit hire request. Please try again,OR Message us on Contact Us componentnts"
//       );

//       // Show error toast if you're using toast notifications
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to submit hire request. Please try again.",
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         }
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Replace with your actual API endpoint
//       const response = await axios.post(
//         "https://leonstatusprofile.onrender.com/messages",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status >= 200 && response.status < 300) {
//         // Show success toast
//         toast.success("Message sent successfully!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });

//         // Set success state and reset form
//         setSubmitStatus("success");
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         });
//       } else {
//         throw new Error(response.data?.message || "Failed to send message");
//       }
//     } catch (error) {
//       console.error("Error submitting contact form:", error);

//       // Set error state
//       setSubmitStatus("error");
//       setErrorMessage(
//         error.response?.data?.message ||
//           error.message ||
//           "Failed to send message. Please try again."
//       );

//       // Show error toast
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to send message. Please try again.",
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         }
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const handleScroll = (direction, modalRef) => {
//     if (modalRef.current) {
//       const scrollAmount = 100; // Adjust scroll amount as needed
//       if (direction === "up") {
//         modalRef.current.scrollTop -= scrollAmount;
//       } else {
//         modalRef.current.scrollTop += scrollAmount;
//       }
//       setModalScrollTop(modalRef.current.scrollTop);
//     }
//   };

//   const hireModalRef = React.createRef();
//   const contactModalRef = React.createRef();

//   return (
//     <>
//       <section className="hero w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-16 md:py-24">
//         <div className="w-full px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
//             {/* Hero Content */}
//             <div className="mb-12 md:mb-0">
//               <div className="w-full">
//                 <div className="w-full">
//                   <p className="text-lg text-indigo-600 mb-2 font-medium">
//                     Hello, I'm
//                   </p>
//                   <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                     Leon AKINGENEYE
//                   </h2>
//                   <div className="mt-4 text-xl md:text-2xl text-gray-600 mb-6">
//                     <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-100 px-2">
//                       <span className="relative text-indigo-600 font-medium">
//                         Web Designer
//                       </span>
//                     </span>
//                     <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-100 px-2 ml-2">
//                       <span className="relative text-purple-600 font-medium">
//                         Web Developer
//                       </span>
//                     </span>
//                     <br />
//                     <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
//                       <span className="relative text-blue-600 font-medium">
//                         Front End Developer
//                       </span>
//                     </span>
//                     <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
//                       <span className="relative text-green-600 font-medium">
//                         Back End Developer
//                       </span>
//                     </span>
//                     <br />
//                     <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-100 px-2 ml-2">
//                       <span className="relative text-red-300 font-medium">
//                         Graphic Designer
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="justify-items-center w-full">
//                   <div className="w-full mt-25 justify-center items-center grid grid-cols-2 gap-4">
//                     <button
//                       onClick={() => setHireModalOpen(true)}
//                       className="btn bg-gradient-to-r from-indigo-400 to-purple-300 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//                     >
//                       <WorkIcon className="mr-2" /> Hire Me
//                     </button>
//                     <button
//                       onClick={() => setContactModalOpen(true)}
//                       className="btn border-2 bg-gradient-to-r from-indigo-200 to-purple-200 hover:bg-indigo-50 px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
//                     >
//                       <EmailIcon className="mr-2" /> Contact Me
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Image */}
//             <div className="flex justify-center md:justify-center">
//               <div className="hero-image relative">
//                 <div className="relative group">
//                   <img
//                     src={image}
//                     alt=""
//                     className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-bounce">
//                   <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-full">
//                     <WorkIcon className="text-indigo-600 size-6" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Hire Me Modal */}
//         {hireModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm">
//             <div
//               ref={hireModalRef}
//               className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto transition-all duration-300 transform translate-y-0"
//             >
//               <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex justify-between items-center">
//                 <h3 className="text-xl font-bold text-gray-900 flex items-center">
//                   <WorkIcon
//                     className="text-indigo-600 mr-2"
//                     style={{ fontSize: 24 }}
//                   />
//                   Hire Me
//                 </h3>
//                 <button
//                   onClick={() => {
//                     setHireModalOpen(false);
//                     setSubmitStatus(null); // Reset status when closing
//                   }}
//                   className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100"
//                 >
//                   <CloseIcon style={{ fontSize: 24 }} />
//                 </button>
//               </div>

//               <div className="p-6">
//                 {submitStatus === "success" ? (
//                   <div className="text-center py-8">
//                     <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//                       <svg
//                         className="h-6 w-6 text-green-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">
//                       Message Sent!
//                     </h3>
//                     <p className="text-gray-500 mb-6">
//                       Thank you for your interest. I'll get back to you soon.
//                     </p>
//                     <button
//                       onClick={() => {
//                         setHireModalOpen(false);
//                         setSubmitStatus(null);
//                       }}
//                       className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 ) : submitStatus === "error" ? (
//                   <div className="text-center py-8">
//                     <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
//                       <svg
//                         className="h-6 w-6 text-red-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">
//                       Submission Failed
//                     </h3>
//                     <p className="text-gray-500 mb-6">
//                       {errorMessage ||
//                         "Something went wrong. Please try again."}
//                     </p>
//                     <div className="flex justify-center space-x-3">
//                       <button
//                         onClick={() => setSubmitStatus(null)}
//                         className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                       >
//                         Try Again
//                       </button>
//                       <button
//                         onClick={() => {
//                           setHireModalOpen(false);
//                           setSubmitStatus(null);
//                         }}
//                         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <form
//                     onSubmit={handleHireSubmit}
//                     className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
//                   >
//                     {/* Header with decorative SVG */}
//                     <div className="text-center mb-8 relative">
//                       <div className="absolute -top-6 left-0 right-0 flex justify-center">
//                         <svg
//                           width="48"
//                           height="48"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//                             fill="url(#paint0_linear)"
//                             stroke="#4F46E5"
//                             strokeWidth="2"
//                           />
//                           <path
//                             d="M12 16V16.01M12 8V12"
//                             stroke="white"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                           />
//                           <defs>
//                             <linearGradient
//                               id="paint0_linear"
//                               x1="12"
//                               y1="2"
//                               x2="12"
//                               y2="22"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#6366F1" />
//                               <stop offset="1" stopColor="#8B5CF6" />
//                             </linearGradient>
//                           </defs>
//                         </svg>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-800 pt-4">
//                         Get in Touch
//                       </h3>
//                       <p className="text-gray-500 mt-1">
//                         Let's discuss your project needs
//                       </p>
//                     </div>

//                     {/* Name Field */}
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                         <svg
//                           className="w-4 h-4 mr-1 text-indigo-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           ></path>
//                         </svg>
//                         Your Name
//                       </label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="admin"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                           <svg
//                             className="w-5 h-5 text-indigo-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             ></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Email Field */}
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                         <svg
//                           className="w-4 h-4 mr-1 text-indigo-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                           ></path>
//                         </svg>
//                         Email Address
//                       </label>
//                       <div className="relative">
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="admin@example.com"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                           <svg
//                             className="w-5 h-5 text-indigo-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             ></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Budget Field */}
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                         <svg
//                           className="w-4 h-4 mr-1 text-indigo-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           ></path>
//                         </svg>
//                         Project Budget (USD)
//                       </label>
//                       <div className="relative">
//                         <select
//                           name="budget"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all bg-gray-50"
//                           value={formData.budget}
//                           onChange={handleInputChange}
//                           required
//                         >
//                           <option value="">Select budget range</option>
//                           <option value="500-1000"> $500-$1000 </option>
//                           <option value="1000-5000"> $1000-$5000 </option>
//                           <option value="5000-10000"> $5000-$10000 </option>
//                           <option value="10000+"> $10000+ </option>
//                         </select>
//                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                           <svg
//                             className="w-5 h-5 text-gray-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M19 9l-7 7-7-7"
//                             ></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project Details */}
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                         <svg
//                           className="w-4 h-4 mr-1 text-indigo-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                           ></path>
//                         </svg>
//                         Project Details
//                       </label>
//                       <div className="relative">
//                         <textarea
//                           name="message"
//                           placeholder="Hi, I need to develop websites which attract customers !"
//                           rows="5"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           required
//                         ></textarea>
//                         <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded">
//                           <button
//                             type="button"
//                             onClick={() => handleScroll("up", hireModalRef)}
//                             className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
//                           >
//                             <svg
//                               className="w-5 h-5"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 15l7-7 7 7"
//                               ></path>
//                             </svg>
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleScroll("down", hireModalRef)}
//                             className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
//                           >
//                             <svg
//                               className="w-5 h-5"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M19 9l-7 7-7-7"
//                               ></path>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-8 flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         onClick={() => setHireModalOpen(false)}
//                         className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 hover:shadow-sm flex items-center"
//                       >
//                         <svg
//                           className="w-5 h-5 mr-1"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M6 18L18 6M6 6l12 12"
//                           ></path>
//                         </svg>
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center transition-all transform hover:-translate-y-0.5 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg
//                               className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                             >
//                               <circle
//                                 className="opacity-25"
//                                 cx="12"
//                                 cy="12"
//                                 r="10"
//                                 stroke="currentColor"
//                                 strokeWidth="4"
//                               ></circle>
//                               <path
//                                 className="opacity-75"
//                                 fill="currentColor"
//                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                               ></path>
//                             </svg>
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             <svg
//                               className="w-5 h-5 mr-1 text-white"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                               ></path>
//                             </svg>
//                             Submit Request
//                           </>
//                         )}
//                       </button>
//                     </div>

//                     {/* Decorative footer */}
//                     <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
//                       <svg
//                         width="120"
//                         height="8"
//                         viewBox="0 0 120 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle
//                           cx="4"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.5"
//                         />
//                         <circle
//                           cx="20"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.3"
//                         />
//                         <circle
//                           cx="36"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.2"
//                         />
//                         <circle
//                           cx="52"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.1"
//                         />
//                         <circle
//                           cx="68"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.05"
//                         />
//                         <circle
//                           cx="84"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.05"
//                         />
//                         <circle
//                           cx="100"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.1"
//                         />
//                         <circle
//                           cx="116"
//                           cy="4"
//                           r="4"
//                           fill="#6366F1"
//                           fillOpacity="0.2"
//                         />
//                       </svg>
//                     </div>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Contact Me Modal */}
//         {contactModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
//             <div
//               ref={contactModalRef}
//               className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden transition-all duration-300 transform translate-y-0"
//             >
//               {/* Sticky Header */}
//               <div className="sticky top-0 z-10 p-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl bg-white">
//                 <h3 className="text-xl font-light bg-gradient-to-r flex items-center">
//                   <svg
//                     className="w-6 h-6 text-indigo-600 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     ></path>
//                   </svg>
//                   Contact Me
//                 </h3>
//                 <button
//                   onClick={() => {
//                     setContactModalOpen(false);
//                     setSubmitStatus(null);
//                   }}
//                   className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100 transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>

//               {/* Scrollable Content */}
//               <div className="overflow-y-auto h-[calc(80vh-56px)]">
//                 <div className="p-6">
//                   {submitStatus === "success" ? (
//                     <div className="text-center py-8">
//                       <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//                         <svg
//                           className="h-6 w-6 text-green-600"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <h3 className="text-lg font-medium text-gray-900 mb-2">
//                         Message Sent!
//                       </h3>
//                       <p className="text-gray-500 mb-6">
//                         Thank you for reaching out. I'll get back to you soon.
//                       </p>
//                       <button
//                         onClick={() => {
//                           setContactModalOpen(false);
//                           setSubmitStatus(null);
//                         }}
//                         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   ) : submitStatus === "error" ? (
//                     <div className="text-center py-8">
//                       <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
//                         <svg
//                           className="h-6 w-6 text-red-600"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>
//                       </div>
//                       <h3 className="text-lg font-medium text-gray-900 mb-2">
//                         Message Failed
//                       </h3>
//                       <p className="text-gray-500 mb-6">
//                         {errorMessage ||
//                           "Something went wrong. Please try again."}
//                       </p>
//                       <div className="flex justify-center space-x-3">
//                         <button
//                           onClick={() => setSubmitStatus(null)}
//                           className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                         >
//                           Try Again
//                         </button>
//                         <button
//                           onClick={() => {
//                             setContactModalOpen(false);
//                             setSubmitStatus(null);
//                           }}
//                           className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       {/* Contact Info Card */}
//                       <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-200 p-5 rounded-xl border border-indigo-100 relative overflow-hidden">
//                         <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-indigo-100 opacity-20"></div>
//                         <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-purple-100 opacity-20"></div>

//                         <h4 className="text-lg font-medium bg-gradient-to-l p-4 rounded-2xl from-indigo-200 to-purple-200 justify-center text-gray-800 mb-3 flex items-center relative z-10">
//                           <svg
//                             className="w-5 h-5 text-indigo-600 mr-2"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                             ></path>
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                             ></path>
//                           </svg>
//                           Contact Information
//                         </h4>
//                         <div className="space-y-3 relative z-10">
//                           <div
//                             onClick={() =>
//                               (window.location.href =
//                                 "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new")
//                             }
//                             className="flex items-center bg-gradient-to-r from-indigo-300 to-purple-100 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
//                           >
//                             <svg
//                               className="w-5 h-5 text-indigo-600 mr-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                               ></path>
//                             </svg>
//                             <span className="text-gray-700">
//                               leonakingeneye2002@gmail.com
//                             </span>
//                           </div>
//                           <div
//                             onClick={() =>
//                               (window.location.href = "tel:+250787944577")
//                             }
//                             className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
//                           >
//                             <svg
//                               className="w-5 h-5 text-indigo-600 mr-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                               ></path>
//                             </svg>
//                             <span className="text-gray-700">
//                               +250 (78) 794-4577
//                             </span>
//                           </div>
//                           <Link
//                             to={
//                               "https://www.google.com/maps/place/Kigali,+Rwanda"
//                             }
//                             rel="noopener noreferrer"
//                             className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
//                           >
//                             <svg
//                               className="w-5 h-5 text-indigo-600 mr-2"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                               ></path>
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                               ></path>
//                             </svg>
//                             <span className="text-gray-700">
//                               Kigali, Rwanda
//                             </span>
//                           </Link>
//                         </div>
//                       </div>

//                       {/* Contact Form */}
//                       <form
//                         onSubmit={handleContactSubmit}
//                         className="text-black bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl"
//                       >
//                         {/* Name Field */}
//                         <div className="mb-6">
//                           <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                             <svg
//                               className="w-4 h-4 mr-1 text-indigo-500"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                               ></path>
//                             </svg>
//                             Your Name
//                           </label>
//                           <div className="relative">
//                             <input
//                               type="text"
//                               name="name"
//                               placeholder="LD"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                               value={formData.name}
//                               onChange={handleInputChange}
//                               required
//                             />
//                             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                               <svg
//                                 className="w-5 h-5 text-indigo-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth="2"
//                                   d="M5 13l4 4L19 7"
//                                 ></path>
//                               </svg>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Email Field */}
//                         <div className="mb-6">
//                           <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                             <svg
//                               className="w-4 h-4 mr-1 text-indigo-500"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                               ></path>
//                             </svg>
//                             Email Address
//                           </label>
//                           <div className="relative">
//                             <input
//                               type="email"
//                               name="email"
//                               placeholder="admin@example.com"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               required
//                             />
//                             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                               <svg
//                                 className="w-5 h-5 text-indigo-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth="2"
//                                   d="M5 13l4 4L19 7"
//                                 ></path>
//                               </svg>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Message Field */}
//                         <div className="mb-6">
//                           <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
//                             <svg
//                               className="w-4 h-4 mr-1 text-indigo-500"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                               ></path>
//                             </svg>
//                             Message
//                           </label>
//                           <div className="relative">
//                             <textarea
//                               name="message"
//                               rows="5"
//                               placeholder="Hi,am glad to have you here!"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
//                               value={formData.message}
//                               onChange={handleInputChange}
//                               required
//                             ></textarea>
//                             <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded shadow-sm">
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   handleScroll("up", contactModalRef)
//                                 }
//                                 className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
//                               >
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 15l7-7 7 7"
//                                   ></path>
//                                 </svg>
//                               </button>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   handleScroll("down", contactModalRef)
//                                 }
//                                 className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
//                               >
//                                 <svg
//                                   className="w-5 h-5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                   ></path>
//                                 </svg>
//                               </button>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Form Buttons */}
//                         <div className="mt-8 flex justify-end space-x-3">
//                           <button
//                             type="button"
//                             onClick={() => setContactModalOpen(false)}
//                             className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 hover:shadow-sm flex items-center"
//                           >
//                             <svg
//                               className="w-5 h-5 mr-1"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M6 18L18 6M6 6l12 12"
//                               ></path>
//                             </svg>
//                             Cancel
//                           </button>
//                           <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 flex items-center transition-all transform hover:-translate-y-0.5 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
//                           >
//                             {isSubmitting ? (
//                               <>
//                                 <svg
//                                   className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                   ></circle>
//                                   <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                   ></path>
//                                 </svg>
//                                 Sending...
//                               </>
//                             ) : (
//                               <>
//                                 <svg
//                                   className="w-5 h-5 mr-1 text-white"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                   ></path>
//                                 </svg>
//                                 Send Message
//                               </>
//                             )}
//                           </button>
//                         </div>
//                         {/* Decorative footer */}
//                         <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
//                           <svg
//                             width="120"
//                             height="8"
//                             viewBox="0 0 120 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <circle
//                               cx="4"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.5"
//                             />
//                             <circle
//                               cx="20"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.3"
//                             />
//                             <circle
//                               cx="36"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.2"
//                             />
//                             <circle
//                               cx="52"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.1"
//                             />
//                             <circle
//                               cx="68"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.05"
//                             />
//                             <circle
//                               cx="84"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.05"
//                             />
//                             <circle
//                               cx="100"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.1"
//                             />
//                             <circle
//                               cx="116"
//                               cy="4"
//                               r="4"
//                               fill="#6366F1"
//                               fillOpacity="0.2"
//                             />
//                           </svg>
//                         </div>
//                       </form>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };
























/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import HelpIcon from "@mui/icons-material/Help";
import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_14_43 AM.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'hire' or 'contact'
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'confirm', or null
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "$500-$1000",
  });
  const [modalScrollTop, setModalScrollTop] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [particleEffects, setParticleEffects] = useState([]);

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98, y: -2 },
    initial: { scale: 1, y: 0 }
  };

  const successIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      }
    }
  };

  const errorIconVariants = {
    hidden: { scale: 0, x: -20 },
    visible: { 
      scale: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      }
    }
  };

  const confirmIconVariants = {
    hidden: { scale: 0, y: 20 },
    visible: { 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      transition: {
        duration: 1,
        delay: i * 0.05,
        repeat: Infinity,
        repeatDelay: 2
      }
    })
  };

  // Add particles on success/error
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error' || submitStatus === 'confirm') {
      const particles = Array.from({ length: 12 }, (_, i) => i);
      setParticleEffects(particles);
      
      // Auto close confirm modal after 3 seconds
      if (submitStatus === 'confirm') {
        const timer = setTimeout(() => {
          setSubmitStatus(null);
          setConfirmModalOpen(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Confirm before submitting
  const handleConfirmSubmit = (type) => {
    setModalType(type);
    setSubmitStatus('confirm');
    setConfirmModalOpen(true);
  };

  const handleHireSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setConfirmModalOpen(false);

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

      if (response.status >= 200 && response.status < 300) {
        toast.success("✅ Hire request submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          icon: "🎉"
        });

        setSubmitStatus("success");
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

      setSubmitStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to submit hire request. Please try again, OR message us on Contact Us component"
      );

      toast.error("❌ " + (error.response?.data?.message || "Failed to submit hire request. Please try again."), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setConfirmModalOpen(false);

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

      if (response.status >= 200 && response.status < 300) {
        toast.success("📨 Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          icon: "✨"
        });

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

      setSubmitStatus("error");
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Failed to send message. Please try again."
      );

      toast.error("❌ " + (error.response?.data?.message || "Failed to send message. Please try again."), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScroll = (direction, modalRef) => {
    if (modalRef.current) {
      const scrollAmount = 100;
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

  // Gradient button color combinations
  const buttonGradients = {
    hire: {
      from: 'from-indigo-500',
      to: 'to-purple-600',
      hoverFrom: 'from-indigo-600',
      hoverTo: 'to-purple-700',
      shadow: 'shadow-indigo-200'
    },
    contact: {
      from: 'from-blue-400',
      to: 'to-cyan-500',
      hoverFrom: 'from-blue-500',
      hoverTo: 'to-cyan-600',
      shadow: 'shadow-blue-200'
    },
    success: {
      from: 'from-green-400',
      to: 'to-emerald-500',
      hoverFrom: 'from-green-500',
      hoverTo: 'to-emerald-600',
      shadow: 'shadow-green-200'
    },
    error: {
      from: 'from-red-400',
      to: 'to-rose-500',
      hoverFrom: 'from-red-500',
      hoverTo: 'to-rose-600',
      shadow: 'shadow-red-200'
    },
    confirm: {
      from: 'from-amber-400',
      to: 'to-orange-500',
      hoverFrom: 'from-amber-500',
      hoverTo: 'to-orange-600',
      shadow: 'shadow-amber-200'
    },
    cancel: {
      from: 'from-gray-300',
      to: 'to-gray-400',
      hoverFrom: 'from-gray-400',
      hoverTo: 'to-gray-500',
      shadow: 'shadow-gray-200'
    }
  };

  return (
    <>
      <section className="hero w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-16 md:py-24 relative overflow-hidden">
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-200/20"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="w-full px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
            {/* Hero Content */}
            <motion.div 
              className="mb-12 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full">
                <div className="w-full">
                  <motion.p 
                    className="text-lg text-indigo-600 mb-2 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Hello, I'm
                  </motion.p>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Leon AKINGENEYE
                  </motion.h2>
                  <div className="mt-4 text-xl md:text-2xl text-gray-600 mb-6">
                    {[
                      'Web Designer', 
                      'Web Developer', 
                      'Front End Developer', 
                      'Back End Developer', 
                      'Graphic Designer'
                    ].map((title, index) => (
                      <motion.span
                        key={title}
                        className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-100 px-2 ml-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        <span className={`relative font-medium ${
                          index === 0 ? 'text-indigo-600' :
                          index === 1 ? 'text-purple-600' :
                          index === 2 ? 'text-blue-600' :
                          index === 3 ? 'text-green-600' :
                          'text-red-400'
                        }`}>
                          {title}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="justify-items-center w-full">
                  <div className="w-full mt-25 justify-center items-center grid grid-cols-2 gap-4">
                    <motion.button
                      onClick={() => setHireModalOpen(true)}
                      className={`btn bg-gradient-to-r ${buttonGradients.hire.from} ${buttonGradients.hire.to} hover:${buttonGradients.hire.hoverFrom} hover:${buttonGradients.hire.hoverTo} text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg ${buttonGradients.hire.shadow}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredButton('hire')}
                      onHoverEnd={() => setHoveredButton(null)}
                    >
                      <WorkIcon className="mr-2" /> Hire Me
                    </motion.button>
                    <motion.button
                      onClick={() => setContactModalOpen(true)}
                      className={`btn border-2 bg-gradient-to-r ${buttonGradients.contact.from} ${buttonGradients.contact.to} hover:${buttonGradients.contact.hoverFrom} hover:${buttonGradients.contact.hoverTo} text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg ${buttonGradients.contact.shadow}`}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredButton('contact')}
                      onHoverEnd={() => setHoveredButton(null)}
                    >
                      <EmailIcon className="mr-2" /> Contact Me
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="flex justify-center md:justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="hero-image relative">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={image}
                    alt="Leon AKINGENEYE"
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl transition-all duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  ></motion.div>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-full">
                    <WorkIcon className="text-indigo-600 size-6" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Confirm Modal */}
        <AnimatePresence>
          {confirmModalOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="p-6 text-center">
                  {/* Particle effects */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particleEffects.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                        style={{ left: '50%', top: '50%' }}
                        variants={particleVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                      />
                    ))}
                  </div>

                  <motion.div 
                    className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 mb-4"
                    variants={confirmIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <HelpIcon className="h-8 w-8 text-amber-600" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Confirm Submission
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Are you sure you want to submit this {modalType === 'hire' ? 'hire request' : 'message'}?
                  </motion.p>
                  
                  <motion.div 
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      onClick={() => {
                        setConfirmModalOpen(false);
                        setSubmitStatus(null);
                      }}
                      className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.cancel.from} ${buttonGradients.cancel.to} hover:${buttonGradients.cancel.hoverFrom} hover:${buttonGradients.cancel.hoverTo} text-white rounded-lg shadow-md transition-all`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        if (modalType === 'hire') {
                          handleHireSubmit({ preventDefault: () => {} });
                        } else {
                          handleContactSubmit({ preventDefault: () => {} });
                        }
                      }}
                      disabled={isSubmitting}
                      className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.confirm.from} ${buttonGradients.confirm.to} hover:${buttonGradients.confirm.hoverFrom} hover:${buttonGradients.confirm.hoverTo} text-white rounded-lg shadow-md transition-all flex items-center`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Confirm'
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hire Me Modal */}
        <AnimatePresence>
          {hireModalOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={hireModalRef}
                className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200 flex justify-between items-center">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 flex items-center"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                  >
                    <WorkIcon
                      className="text-indigo-600 mr-2"
                      style={{ fontSize: 24 }}
                    />
                    Hire Me
                  </motion.h3>
                  <motion.button
                    onClick={() => {
                      setHireModalOpen(false);
                      setSubmitStatus(null);
                    }}
                    className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <CloseIcon style={{ fontSize: 24 }} />
                  </motion.button>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {submitStatus === "success" ? (
                      <motion.div 
                        key="success"
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Particle effects */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {particleEffects.map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-green-400 rounded-full"
                              style={{ left: '50%', top: '50%' }}
                              variants={particleVariants}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                            />
                          ))}
                        </div>

                        <motion.div 
                          className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4"
                          variants={successIconVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <CheckCircleIcon className="h-8 w-8 text-green-600" />
                        </motion.div>
                        <motion.h3 
                          className="text-lg font-medium text-gray-900 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Message Sent!
                        </motion.h3>
                        <motion.p 
                          className="text-gray-500 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Thank you for your interest. I'll get back to you soon.
                        </motion.p>
                        <motion.button
                          onClick={() => {
                            setHireModalOpen(false);
                            setSubmitStatus(null);
                          }}
                          className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.success.from} ${buttonGradients.success.to} hover:${buttonGradients.success.hoverFrom} hover:${buttonGradients.success.hoverTo} text-white rounded-lg shadow-md transition-all`}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Close
                        </motion.button>
                      </motion.div>
                    ) : submitStatus === "error" ? (
                      <motion.div 
                        key="error"
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Particle effects */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {particleEffects.map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-red-400 rounded-full"
                              style={{ left: '50%', top: '50%' }}
                              variants={particleVariants}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                            />
                          ))}
                        </div>

                        <motion.div 
                          className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4"
                          variants={errorIconVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <ErrorIcon className="h-8 w-8 text-red-600" />
                        </motion.div>
                        <motion.h3 
                          className="text-lg font-medium text-gray-900 mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Submission Failed
                        </motion.h3>
                        <motion.p 
                          className="text-gray-500 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {errorMessage || "Something went wrong. Please try again."}
                        </motion.p>
                        <motion.div 
                          className="flex justify-center space-x-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.button
                            onClick={() => setSubmitStatus(null)}
                            className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.cancel.from} ${buttonGradients.cancel.to} hover:${buttonGradients.cancel.hoverFrom} hover:${buttonGradients.cancel.hoverTo} text-white rounded-lg shadow-md transition-all`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            Try Again
                          </motion.button>
                          <motion.button
                            onClick={() => {
                              setHireModalOpen(false);
                              setSubmitStatus(null);
                            }}
                            className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.error.from} ${buttonGradients.error.to} hover:${buttonGradients.error.hoverFrom} hover:${buttonGradients.error.hoverTo} text-white rounded-lg shadow-md transition-all`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            Close
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleConfirmSubmit('hire');
                        }}
                        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Form content remains the same but with motion animations */}
                        <div className="text-center mb-8 relative">
                          <motion.div 
                            className="absolute -top-6 left-0 right-0 flex justify-center"
                            animate={{ 
                              y: [0, -5, 0],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
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
                          </motion.div>
                          <h3 className="text-2xl font-bold text-gray-800 pt-4">
                            Get in Touch
                          </h3>
                          <p className="text-gray-500 mt-1">
                            Let's discuss your project needs
                          </p>
                        </div>

                        {/* Name Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            Your Name
                          </label>
                          <div className="relative">
                            <motion.input
                              type="text"
                              name="name"
                              placeholder="admin"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Email Address
                          </label>
                          <div className="relative">
                            <motion.input
                              type="email"
                              name="email"
                              placeholder="admin@example.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Budget Field */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Project Budget (USD)
                          </label>
                          <div className="relative">
                            <motion.select
                              name="budget"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all bg-gray-50"
                              value={formData.budget}
                              onChange={handleInputChange}
                              required
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                              <option value="">Select budget range</option>
                              <option value="500-1000">$500-$1000</option>
                              <option value="1000-5000">$1000-$5000</option>
                              <option value="5000-10000">$5000-$10000</option>
                              <option value="10000+">$10000+</option>
                            </motion.select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Project Details
                          </label>
                          <div className="relative">
                            <motion.textarea
                              name="message"
                              placeholder="Hi, I need to develop websites which attract customers!"
                              rows="5"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              whileFocus={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            ></motion.textarea>
                            <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded">
                              <motion.button
                                type="button"
                                onClick={() => handleScroll("up", hireModalRef)}
                                className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                              </motion.button>
                              <motion.button
                                type="button"
                                onClick={() => handleScroll("down", hireModalRef)}
                                className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                                whileHover={{ scale: 1.2, y: 2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex justify-end space-x-3">
                          <motion.button
                            type="button"
                            onClick={() => setHireModalOpen(false)}
                            className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.cancel.from} ${buttonGradients.cancel.to} hover:${buttonGradients.cancel.hoverFrom} hover:${buttonGradients.cancel.hoverTo} text-white rounded-lg shadow-md transition-all flex items-center`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Cancel
                          </motion.button>
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.hire.from} ${buttonGradients.hire.to} hover:${buttonGradients.hire.hoverFrom} hover:${buttonGradients.hire.hoverTo} text-white rounded-lg shadow-md transition-all flex items-center disabled:opacity-70 disabled:cursor-not-allowed`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Submit Request
                              </>
                            )}
                          </motion.button>
                        </div>

                        {/* Decorative footer */}
                        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                          <motion.svg
                            width="120"
                            height="8"
                            viewBox="0 0 120 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <circle cx="4" cy="4" r="4" fill="#6366F1" fillOpacity="0.5" />
                            <circle cx="20" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
                            <circle cx="36" cy="4" r="4" fill="#6366F1" fillOpacity="0.2" />
                            <circle cx="52" cy="4" r="4" fill="#6366F1" fillOpacity="0.1" />
                            <circle cx="68" cy="4" r="4" fill="#6366F1" fillOpacity="0.05" />
                            <circle cx="84" cy="4" r="4" fill="#6366F1" fillOpacity="0.05" />
                            <circle cx="100" cy="4" r="4" fill="#6366F1" fillOpacity="0.1" />
                            <circle cx="116" cy="4" r="4" fill="#6366F1" fillOpacity="0.2" />
                          </motion.svg>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Me Modal */}
        <AnimatePresence>
          {contactModalOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={contactModalRef}
                className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="sticky top-0 z-10 p-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl bg-white">
                  <motion.h3 
                    className="text-xl font-bold flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                  >
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Contact Me
                  </motion.h3>
                  <motion.button
                    onClick={() => {
                      setContactModalOpen(false);
                      setSubmitStatus(null);
                    }}
                    className="text-gray-400 hover:text-gray-500 rounded-full p-1 hover:bg-gray-100 transition-colors"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </motion.button>
                </div>

                <div className="overflow-y-auto h-[calc(80vh-56px)]">
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {submitStatus === "success" ? (
                        <motion.div 
                          key="contact-success"
                          className="text-center py-8"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Particle effects */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {particleEffects.map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-green-400 rounded-full"
                                style={{ left: '50%', top: '50%' }}
                                variants={particleVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                              />
                            ))}
                          </div>

                          <motion.div 
                            className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4"
                            variants={successIconVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <CheckCircleIcon className="h-8 w-8 text-green-600" />
                          </motion.div>
                          <motion.h3 
                            className="text-lg font-medium text-gray-900 mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            Message Sent!
                          </motion.h3>
                          <motion.p 
                            className="text-gray-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            Thank you for reaching out. I'll get back to you soon.
                          </motion.p>
                          <motion.button
                            onClick={() => {
                              setContactModalOpen(false);
                              setSubmitStatus(null);
                            }}
                            className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.success.from} ${buttonGradients.success.to} hover:${buttonGradients.success.hoverFrom} hover:${buttonGradients.success.hoverTo} text-white rounded-lg shadow-md transition-all`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            Close
                          </motion.button>
                        </motion.div>
                      ) : submitStatus === "error" ? (
                        <motion.div 
                          key="contact-error"
                          className="text-center py-8"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Particle effects */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {particleEffects.map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-red-400 rounded-full"
                                style={{ left: '50%', top: '50%' }}
                                variants={particleVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                              />
                            ))}
                          </div>

                          <motion.div 
                            className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4"
                            variants={errorIconVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <ErrorIcon className="h-8 w-8 text-red-600" />
                          </motion.div>
                          <motion.h3 
                            className="text-lg font-medium text-gray-900 mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            Message Failed
                          </motion.h3>
                          <motion.p 
                            className="text-gray-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {errorMessage || "Something went wrong. Please try again."}
                          </motion.p>
                          <motion.div 
                            className="flex justify-center space-x-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <motion.button
                              onClick={() => setSubmitStatus(null)}
                              className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.cancel.from} ${buttonGradients.cancel.to} hover:${buttonGradients.cancel.hoverFrom} hover:${buttonGradients.cancel.hoverTo} text-white rounded-lg shadow-md transition-all`}
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              Try Again
                            </motion.button>
                            <motion.button
                              onClick={() => {
                                setContactModalOpen(false);
                                setSubmitStatus(null);
                              }}
                              className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.error.from} ${buttonGradients.error.to} hover:${buttonGradients.error.hoverFrom} hover:${buttonGradients.error.hoverTo} text-white rounded-lg shadow-md transition-all`}
                              variants={buttonVariants}
                              whileHover="hover"
                              whileTap="tap"
                            >
                              Close
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="contact-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {/* Contact Info Card */}
                          <motion.div 
                            className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-indigo-100 opacity-20"></div>
                            <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full bg-purple-100 opacity-20"></div>

                            <h4 className="text-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-3 flex items-center relative z-10">
                              <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              Contact Information
                            </h4>
                            <div className="space-y-3 relative z-10">
                              <motion.div
                                onClick={() => window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"}
                                className="flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 p-2 rounded-lg hover:from-indigo-200 hover:to-purple-200 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span className="text-gray-700">leonakingeneye2002@gmail.com</span>
                              </motion.div>
                              <motion.div
                                onClick={() => window.location.href = "tel:+250787944577"}
                                className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-gray-700">+250 (78) 794-4577</span>
                              </motion.div>
                              <motion.div
                                onClick={() => window.open("https://www.google.com/maps/place/Kigali,+Rwanda")}
                                className="flex items-center bg-white/70 backdrop-blur-sm p-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-gray-700">Kigali, Rwanda</span>
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Contact Form */}
                          <motion.form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleConfirmSubmit('contact');
                            }}
                            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {/* Name Field */}
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Your Name
                              </label>
                              <div className="relative">
                                <motion.input
                                  type="text"
                                  name="name"
                                  placeholder="LD"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  required
                                  whileFocus={{ scale: 1.01 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Email Field */}
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Email Address
                              </label>
                              <div className="relative">
                                <motion.input
                                  type="email"
                                  name="email"
                                  placeholder="admin@example.com"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                  whileFocus={{ scale: 1.01 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Message
                              </label>
                              <div className="relative">
                                <motion.textarea
                                  name="message"
                                  rows="5"
                                  placeholder="Hi, I'm glad to have you here!"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-gray-50"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  required
                                  whileFocus={{ scale: 1.01 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                ></motion.textarea>
                                <div className="absolute bottom-3 right-3 flex items-center bg-white p-1 rounded shadow-sm">
                                  <motion.button
                                    type="button"
                                    onClick={() => handleScroll("up", contactModalRef)}
                                    className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                    </svg>
                                  </motion.button>
                                  <motion.button
                                    type="button"
                                    onClick={() => handleScroll("down", contactModalRef)}
                                    className="text-gray-400 hover:text-indigo-600 p-1 transition-colors"
                                    whileHover={{ scale: 1.2, y: 2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                  </motion.button>
                                </div>
                              </div>
                            </div>

                            {/* Form Buttons */}
                            <div className="mt-8 flex justify-end space-x-3">
                              <motion.button
                                type="button"
                                onClick={() => setContactModalOpen(false)}
                                className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.cancel.from} ${buttonGradients.cancel.to} hover:${buttonGradients.cancel.hoverFrom} hover:${buttonGradients.cancel.hoverTo} text-white rounded-lg shadow-md transition-all flex items-center`}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                              >
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Cancel
                              </motion.button>
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-2.5 bg-gradient-to-r ${buttonGradients.contact.from} ${buttonGradients.contact.to} hover:${buttonGradients.contact.hoverFrom} hover:${buttonGradients.contact.hoverTo} text-white rounded-lg shadow-md transition-all flex items-center disabled:opacity-70 disabled:cursor-not-allowed`}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                              >
                                {isSubmitting ? (
                                  <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                  </>
                                ) : (
                                  <>
                                    <svg className="w-5 h-5 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    Send Message
                                  </>
                                )}
                              </motion.button>
                            </div>

                            {/* Decorative footer */}
                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                              <motion.svg
                                width="120"
                                height="8"
                                viewBox="0 0 120 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <circle cx="4" cy="4" r="4" fill="#6366F1" fillOpacity="0.5" />
                                <circle cx="20" cy="4" r="4" fill="#6366F1" fillOpacity="0.3" />
                                <circle cx="36" cy="4" r="4" fill="#6366F1" fillOpacity="0.2" />
                                <circle cx="52" cy="4" r="4" fill="#6366F1" fillOpacity="0.1" />
                                <circle cx="68" cy="4" r="4" fill="#6366F1" fillOpacity="0.05" />
                                <circle cx="84" cy="4" r="4" fill="#6366F1" fillOpacity="0.05" />
                                <circle cx="100" cy="4" r="4" fill="#6366F1" fillOpacity="0.1" />
                                <circle cx="116" cy="4" r="4" fill="#6366F1" fillOpacity="0.2" />
                              </motion.svg>
                            </div>
                          </motion.form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};