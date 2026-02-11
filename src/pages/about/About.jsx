// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import {
//   Code,
//   DesignServices,
//   DataObject,
//   School,
//   Download,
//   Article,
//   DesignServicesTwoTone,
//   Settings,
// } from "@mui/icons-material";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_33_05 AM.png";
// import { Link } from "react-router-dom";

// export const About = () => {
//   const [open, setOpen] = useState(false);
//   const [viewMode, setViewMode] = useState("pdf"); // 'pdf' or 'google'
//   const [pdfUrl] = useState(
//     "https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing"
//   ); // Replace with your actual PDF URL

//   // Google Docs document ID (replace with your actual document ID)

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const openInGoogleDocs = () => {
//     window.open(
//       `https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing`,
//       "_blank"
//     );
//   };

//   const downloadPdf = () => {
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "VC.pdf";
//     link.click();
//   };

//   const skills = [
//     {
//       name: "Frontend Development",
//       percent: 95,
//       icon: <Code className="text-indigo-600" />,
//       tech: ["React JS", "PostCSS", "Tailwind CSS"],
//     },
//     {
//       name: "Backend Development",
//       percent: 90,
//       icon: <DataObject className="text-purple-600" />,
//       tech: ["Node JS", "Express", "PHP"],
//     },
//     {
//       name: "UI/UX Design",
//       percent: 85,
//       icon: <DesignServices className="text-violet-600" />,
//       tech: ["Material UI", "Framer Motion", "Typography"],
//     },
//     {
//       name: "Graphic Design",
//       percent: 75,
//       icon: <DesignServicesTwoTone className="text-blue-600" />,
//       tech: ["Photoshop", "Illustrator"],
//     },
//     {
//       name: "Computer Maintenance",
//       percent: 85,
//       icon: <Settings className="text-indigo-600" />,
//       tech: ["Hard Ware", "Software", "Troubleshooting"],
//     },
//   ];

//   return (
//     <>
//       <section className="w-full  md:w-full py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* About Image */}
//             <div className="lg:w-1/2">
//               <div className="relative group">
//                 <img
//                   src={image}
//                   alt=""
//                   className="rounded-xl shadow-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
//                   <div className="text-3xl font-bold">2+</div>
//                   <div className="text-sm font-medium">Years Experience</div>
//                 </div>
//               </div>
//             </div>

//             {/* About Content */}
//             <div className="lg:w-1/2">
//               <div className="mb-8">
//                 <p className="text-indigo-600 font-medium mb-2 flex items-center">
//                   <School className="mr-2" /> Learn About Me
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                   Full Stack{" "}
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//                     Web Developer
//                   </span>
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   I'm a passionate developer with over a decade of experience
//                   building modern web applications. My expertise spans the
//                   entire development stack, from crafting beautiful user
//                   interfaces to designing scalable backend architectures. I
//                   specialize in JavaScript ecosystems and love solving complex
//                   problems with clean, efficient code.
//                 </p>
//               </div>

//               {/* Skills */}
//               <div className="mb-8 w-full bg-gradient-to-r from-violet-100 to-indigo-200 p-6 rounded-2xl shadow-2xl">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-6">
//                   My Skills
//                 </h3>
//                 <div className="space-y-5">
//                   {skills.map((skill, index) => (
//                     <div key={index}>
//                       <div className="flex justify-between items-center mb-1">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mr-3">
//                             {skill.icon}
//                           </div>
//                           <span className="font-medium text-gray-700">
//                             {skill.name}
//                           </span>
//                         </div>
//                         <span className="text-gray-600">{skill.percent}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-4">
//                         <div
//                           className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full"
//                           style={{ width: `${skill.percent}%` }}
//                         ></div>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {skill.tech.map((tech, i) => (
//                           <span
//                             key={i}
//                             className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={handleOpen}
//                 className="px-6 py-3 bg-gradient-to-r from-indigo-300 to-purple-400 text-white rounded-lg hover:from-indigo-200 hover:to-purple-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
//               >
//                 <Article className="mr-2" />
//                 View Full Resume
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Resume Modal */}
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="resume-modal-title"
//           aria-describedby="resume-modal-description"
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "90%",
//               maxWidth: "900px",
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               borderRadius: "12px",
//               outline: "none",
//             }}
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2
//                 id="resume-modal-title"
//                 className="text-2xl font-bold text-gray-800"
//               >
//                 My Resume
//               </h2>
//               <button
//                 onClick={handleClose}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="mb-4">
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <button
//                   onClick={downloadPdf}
//                   className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
//                 >
//                   <Download className="mr-2" />
//                   Download PDF
//                 </button>
//               </div>

//               <div className="h-[70vh] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
//                 {viewMode === "pdf" ? (
//                   <>
//                     <div className="view text-black flex justify-center items-center ">
//                       <div className="fixed  z-50">
//                         {/* Main floating container */}
//                         <div className="relative group">
//                           {/* Documentation direction arrow */}
//                           <div className="absolute top-46 -right-4 transform rotate-12 hidden md:block">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-24 w-24 text-blue-400 opacity-80"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={1.5}
//                                 d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                               />
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//                                 className="text-blue-600 animate-pulse"
//                               />
//                             </svg>
//                             <p className="absolute top-8 right-12 text-sm font-bold text-blue-700">
//                               Check Docs →
//                             </p>
//                           </div>

//                           {/* Clickable info button */}
//                           <Link
//                             to={
//                               "https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing"
//                             }
//                             className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
//                             aria-label="Documentation Help"
//                           >
//                             {/* Information SVG icon */}
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-8 w-8 text-white"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                               />
//                             </svg>

//                             {/* Expanded tooltip */}
//                             <div className="absolute right-16 w-64 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                               <div className="flex items-start">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
//                                   viewBox="0 0 20 20"
//                                   fill="currentColor"
//                                 >
//                                   <path
//                                     fillRule="evenodd"
//                                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//                                     clipRule="evenodd"
//                                   />
//                                 </svg>
//                                 <div>
//                                   <h3 className="font-bold text-blue-600 mb-1">
//                                     Need Help?
//                                   </h3>
//                                   <p>
//                                     Click this button to access the official
//                                     Tailwind CSS documentation for detailed
//                                     guides and examples.
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <iframe
//                     src={`https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing`}
//                     width="100%"
//                     height="100%"
//                     title="Google Docs Resume"
//                     style={{ border: "none" }}
//                   />
//                 )}
//               </div>
//             </div>

//             <div className="flex justify-end space-x-4 mt-4">
//               <Button
//                 variant="outlined"
//                 onClick={openInGoogleDocs}
//                 startIcon={
//                   <img
//                     src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
//                     alt="Google Docs"
//                     className="w-5 h-5"
//                   />
//                 }
//                 sx={{
//                   textTransform: "none",
//                   color: "#4f46e5",
//                   borderColor: "#4f46e5",
//                   "&:hover": {
//                     borderColor: "#4338ca",
//                     backgroundColor: "rgba(79, 70, 229, 0.04)",
//                   },
//                 }}
//               >
//                 Open in Google Docs
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleClose}
//                 sx={{
//                   textTransform: "none",
//                   background: "linear-gradient(to right, #4f46e5, #7c3aed)",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #4338ca, #6d28d9)",
//                   },
//                 }}
//               >
//                 Close
//               </Button>
//             </div>
//           </Box>
//         </Modal>
//       </section>
//     </>
//   );
// };

// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code,
//   DesignServices,
//   DataObject,
//   School,
//   Download,
//   Article,
//   DesignServicesTwoTone,
//   Settings,
//   CheckCircle,
//   Error as ErrorIcon,
//   Warning,
//   Info,
//   Close,
//   Verified,
//   Schedule,
//   TrendingUp,
//   EmojiEvents,
//   Work,
//   Computer,
//   Web,
//   Storage,
//   Brush,
//   GitHub,
//   LinkedIn,
//   Twitter,
//   InsertDriveFile,
//   PictureAsPdf,
//   Visibility,
//   CloudDownload,
// } from "@mui/icons-material";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_33_05 AM.png";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const About = () => {
//   const [open, setOpen] = useState(false);
//   const [viewMode, setViewMode] = useState("pdf");
//   const [pdfUrl] = useState(
//     "https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing"
//   );

//   // Experience counter - starting from 2023
//   const [experienceYears, setExperienceYears] = useState(0);
//   const [projectsCount, setProjectsCount] = useState(0);
//   const [clientsCount, setClientsCount] = useState(0);

//   // Modal states
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [modalAction, setModalAction] = useState(null);
//   const [isDownloading, setIsDownloading] = useState(false);

//   // Calculate experience from 2023 to current year
//   useEffect(() => {
//     const startYear = 2023;
//     const currentYear = new Date().getFullYear();
//     const years = currentYear - startYear;

//     // Animate counters
//     const timer1 = setTimeout(() => setExperienceYears(years), 500);
//     const timer2 = setTimeout(() => setProjectsCount(25), 800);
//     const timer3 = setTimeout(() => setClientsCount(18), 1100);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const openInGoogleDocs = () => {
//     window.open(
//       `https://drive.google.com/file/d/14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW/view?usp=sharing`,
//       "_blank"
//     );
//   };

//   const confirmDownload = () => {
//     setModalAction('download');
//     setShowConfirmModal(true);
//   };

//   const confirmGoogleDocs = () => {
//     setModalAction('google');
//     setShowConfirmModal(true);
//   };

//   const handleConfirmedAction = () => {
//     setShowConfirmModal(false);

//     if (modalAction === 'download') {
//       performDownload();
//     } else if (modalAction === 'google') {
//       performGoogleDocs();
//     }
//   };

//   const performDownload = () => {
//     setIsDownloading(true);

//     try {
//       const link = document.createElement("a");
//       link.href = pdfUrl;
//       link.download = "Leon_Resume.pdf";
//       link.click();

//       toast.success("📄 Resume downloaded successfully!");
//       setShowSuccessModal(true);
//     } catch (error) {
//       toast.error("Download failed. Please try again.");
//       setShowErrorModal(true);
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   const performGoogleDocs = () => {
//     try {
//       openInGoogleDocs();
//       toast.success("Opened in Google Docs");
//     } catch (error) {
//       toast.error("Failed to open document");
//       setShowErrorModal(true);
//     }
//   };

//   const skills = [
//     {
//       name: "Frontend Development",
//       percent: 95,
//       icon: <Code className="text-indigo-600" />,
//       tech: ["React JS", "PostCSS", "Tailwind CSS"],
//     },
//     {
//       name: "Backend Development",
//       percent: 90,
//       icon: <DataObject className="text-purple-600" />,
//       tech: ["Node JS", "Express", "PHP"],
//     },
//     {
//       name: "UI/UX Design",
//       percent: 85,
//       icon: <DesignServices className="text-violet-600" />,
//       tech: ["Material UI", "Framer Motion", "Typography"],
//     },
//     {
//       name: "Graphic Design",
//       percent: 75,
//       icon: <DesignServicesTwoTone className="text-blue-600" />,
//       tech: ["Photoshop", "Illustrator"],
//     },
//     {
//       name: "Computer Maintenance",
//       percent: 85,
//       icon: <Settings className="text-indigo-600" />,
//       tech: ["Hardware", "Software", "Troubleshooting"],
//     },
//   ];

//   return (
//     <>
//       <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">

//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5 dark:opacity-10">
//           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
//                 <circle cx="3" cy="3" r="2" fill="currentColor" className="text-indigo-600" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#dots)" />
//           </svg>
//         </div>

//         {/* Decorative Blobs */}
//         <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

//         <div className="container mx-auto px-4 relative">

//           {/* Header Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, type: "spring" }}
//               className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6"
//             >
//               <School className="text-4xl text-white" />
//             </motion.div>

//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Leon</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Full Stack Developer crafting exceptional digital experiences since 2023
//             </p>
//           </motion.div>

//           {/* Success Modal */}
//           <AnimatePresence>
//             {showSuccessModal && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//               >
//                 <motion.div
//                   initial={{ scale: 0.9, y: 20 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.9, y: 20 }}
//                   className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-green-100 dark:border-green-900"
//                 >
//                   <button
//                     onClick={() => setShowSuccessModal(false)}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
//                   >
//                     <Close />
//                   </button>

//                   <div className="text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring" }}
//                       className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
//                     >
//                       <CheckCircle className="text-5xl text-white" />
//                     </motion.div>

//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                       Resume Downloaded!
//                     </h3>

//                     <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 mb-4">
//                       <Verified className="text-lg" />
//                       <span className="text-sm font-medium">Successfully saved</span>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       Your download has started. The file "Leon_Resume.pdf" will be saved to your device.
//                     </p>

//                     <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mb-6">
//                       <div className="flex items-start space-x-3">
//                         <InsertDriveFile className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5" />
//                         <div className="text-left">
//                           <p className="text-sm font-medium text-gray-900 dark:text-white">Leon_Resume.pdf</p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">Updated {new Date().toLocaleDateString()}</p>
//                         </div>
//                       </div>
//                     </div>

//                     <motion.button
//                       onClick={() => setShowSuccessModal(false)}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
//                     >
//                       Close
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* Error Modal */}
//             {showErrorModal && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//               >
//                 <motion.div
//                   initial={{ scale: 0.9, y: 20 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.9, y: 20 }}
//                   className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-red-100 dark:border-red-900"
//                 >
//                   <button
//                     onClick={() => setShowErrorModal(false)}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
//                   >
//                     <Close />
//                   </button>

//                   <div className="text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring" }}
//                       className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6"
//                     >
//                       <ErrorIcon className="text-5xl text-white" />
//                     </motion.div>

//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                       Download Failed
//                     </h3>

//                     <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 mb-4">
//                       <Warning className="text-lg" />
//                       <span className="text-sm font-medium">Connection Error</span>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       Unable to download the resume. Please check your internet connection and try again.
//                     </p>

//                     <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6">
//                       <div className="flex items-start space-x-3">
//                         <Info className="text-red-600 dark:text-red-400 text-lg mt-0.5" />
//                         <div className="text-left">
//                           <p className="text-sm text-gray-600 dark:text-gray-300">Try these solutions:</p>
//                           <ul className="text-sm text-gray-900 dark:text-white font-medium list-disc list-inside mt-1">
//                             <li>Check your internet connection</li>
//                             <li>Disable any ad blockers</li>
//                             <li>Try opening in Google Docs</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex space-x-3">
//                       <motion.button
//                         onClick={performDownload}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
//                       >
//                         Try Again
//                       </motion.button>
//                       <motion.button
//                         onClick={() => setShowErrorModal(false)}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
//                       >
//                         Close
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* Confirm Modal */}
//             {showConfirmModal && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//               >
//                 <motion.div
//                   initial={{ scale: 0.9, y: 20 }}
//                   animate={{ scale: 1, y: 0 }}
//                   exit={{ scale: 0.9, y: 20 }}
//                   className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-indigo-100 dark:border-indigo-900"
//                 >
//                   <div className="text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring" }}
//                       className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-6"
//                     >
//                       {modalAction === 'download' ? <CloudDownload className="text-4xl text-white" /> : <Visibility className="text-4xl text-white" />}
//                     </motion.div>

//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                       {modalAction === 'download' ? 'Download Resume' : 'Open in Google Docs'}
//                     </h3>

//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       {modalAction === 'download'
//                         ? 'This will download "Leon_Resume.pdf" to your device.'
//                         : 'This will open the document in Google Docs in a new tab.'}
//                     </p>

//                     <div className="flex space-x-3">
//                       <motion.button
//                         onClick={handleConfirmedAction}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
//                       >
//                         Confirm
//                       </motion.button>
//                       <motion.button
//                         onClick={() => setShowConfirmModal(false)}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
//                       >
//                         Cancel
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <div className="flex flex-col lg:flex-row items-start gap-12">
//             {/* About Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="lg:w-1/2"
//             >
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
//                 <img
//                   src={image}
//                   alt="Leon - Full Stack Developer"
//                   className="rounded-xl shadow-2xl w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 relative"
//                 />

//                 {/* Experience Badge - Animated Counter */}
//                 <motion.div
//                   initial={{ scale: 0, x: 20, y: -20 }}
//                   whileInView={{ scale: 1, x: 0, y: 0 }}
//                   transition={{ delay: 0.5, type: "spring" }}
//                   viewport={{ once: true }}
//                   className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-2xl"
//                 >
//                   <motion.div
//                     className="text-4xl font-bold flex items-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                   >
//                     {experienceYears}+
//                     <TrendingUp className="ml-2 text-2xl" />
//                   </motion.div>
//                   <div className="text-sm font-medium opacity-90">Years Experience</div>
//                   <div className="text-xs mt-1 opacity-75">Since 2023</div>
//                 </motion.div>

//                 {/* Stats Cards */}
//                 <div className="absolute -top-6 -left-6 flex space-x-3">
//                   <motion.div
//                     initial={{ scale: 0, x: -20, y: -20 }}
//                     whileInView={{ scale: 1, x: 0, y: 0 }}
//                     transition={{ delay: 0.7, type: "spring" }}
//                     viewport={{ once: true }}
//                     className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4"
//                   >
//                     <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{projectsCount}+</div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ scale: 0, x: -20, y: -20 }}
//                     whileInView={{ scale: 1, x: 0, y: 0 }}
//                     transition={{ delay: 0.9, type: "spring" }}
//                     viewport={{ once: true }}
//                     className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4"
//                   >
//                     <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{clientsCount}+</div>
//                     <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* About Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="lg:w-1/2"
//             >
//               <div className="mb-8">
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 flex items-center"
//                 >
//                   <School className="mr-2" /> Learn About Me
//                 </motion.p>
//                 <motion.h2
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
//                 >
//                   Full Stack{" "}
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
//                     Web Developer
//                   </span>
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
//                 >
//                   I'm Leon, a passionate Full Stack Developer with <strong>{experienceYears}+ years</strong> of hands-on experience
//                   building modern web applications. Since 2023, I've been crafting beautiful user interfaces
//                   and scalable backend solutions. I specialize in the JavaScript ecosystem and love solving
//                   complex problems with clean, efficient code. My approach combines technical excellence with
//                   creative design thinking.
//                 </motion.p>
//               </div>

//               {/* Skills Section - Redesigned */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="mb-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700"
//               >
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <Work className="mr-2 text-indigo-600 dark:text-indigo-400" />
//                   Technical Expertise
//                 </h3>
//                 <div className="space-y-6">
//                   {skills.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.7 + index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <div className="flex items-center">
//                           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mr-3">
//                             {skill.icon}
//                           </div>
//                           <div>
//                             <span className="font-semibold text-gray-800 dark:text-white">
//                               {skill.name}
//                             </span>
//                             <div className="flex flex-wrap gap-2 mt-1">
//                               {skill.tech.map((tech, i) => (
//                                 <span
//                                   key={i}
//                                   className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
//                                 >
//                                   {tech}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                         <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
//                           {skill.percent}%
//                         </span>
//                       </div>
//                       <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${skill.percent}%` }}
//                           transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
//                           viewport={{ once: true }}
//                           className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
//                         ></motion.div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Action Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <motion.button
//                   onClick={handleOpen}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
//                 >
//                   <Article className="mr-2" />
//                   View Full Resume
//                 </motion.button>

//                 <motion.button
//                   onClick={confirmDownload}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   disabled={isDownloading}
//                   className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-slate-600 flex items-center disabled:opacity-50"
//                 >
//                   {isDownloading ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2" />
//                       Downloading...
//                     </>
//                   ) : (
//                     <>
//                       <CloudDownload className="mr-2" />
//                       Download Resume
//                     </>
//                   )}
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Resume Modal */}
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="resume-modal-title"
//           aria-describedby="resume-modal-description"
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "90%",
//               maxWidth: "1000px",
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               borderRadius: "16px",
//               outline: "none",
//             }}
//             className="dark:bg-slate-800"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2
//                 id="resume-modal-title"
//                 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center"
//               >
//                 <Article className="mr-2 text-indigo-600" />
//                 Leon's Resume
//               </h2>
//               <button
//                 onClick={handleClose}
//                 className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
//               >
//                 <Close />
//               </button>
//             </div>

//             <div className="mb-4">
//               <div className="flex flex-wrap gap-3 mb-4">
//                 <motion.button
//                   onClick={confirmDownload}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center shadow-md hover:shadow-lg transition-all"
//                 >
//                   <CloudDownload className="mr-2" />
//                   Download PDF
//                 </motion.button>

//                 <motion.button
//                   onClick={confirmGoogleDocs}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600 flex items-center transition-all"
//                 >
//                   <Visibility className="mr-2" />
//                   Open in Google Docs
//                 </motion.button>
//               </div>

//               <div className="h-[60vh] border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-900 relative">
//                 <div className="flex items-center justify-center h-full">
//                   <div className="text-center">
//                     <PictureAsPdf className="text-6xl text-gray-400 dark:text-gray-600 mb-4" />
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                       Click below to view or download the resume
//                     </p>
//                     <div className="flex justify-center space-x-4">
//                       <motion.button
//                         onClick={confirmDownload}
//                         whileHover={{ scale: 1.05 }}
//                         className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex items-center"
//                       >
//                         <CloudDownload className="mr-2" />
//                         Download Resume
//                       </motion.button>
//                       <motion.button
//                         onClick={confirmGoogleDocs}
//                         whileHover={{ scale: 1.05 }}
//                         className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all flex items-center"
//                       >
//                         <Visibility className="mr-2" />
//                         View Online
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end mt-4">
//               <Button
//                 variant="contained"
//                 onClick={handleClose}
//                 sx={{
//                   textTransform: "none",
//                   background: "linear-gradient(to right, #4f46e5, #7c3aed)",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #4338ca, #6d28d9)",
//                   },
//                 }}
//               >
//                 Close
//               </Button>
//             </div>
//           </Box>
//         </Modal>
//       </section>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </>
//   );
// };












/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  DesignServices,
  DataObject,
  School,
  Download,
  Article,
  DesignServicesTwoTone,
  Settings,
  CheckCircle,
  Error as ErrorIcon,
  Warning,
  Info,
  Close,
  Verified,
  Schedule,
  TrendingUp,
  EmojiEvents,
  Work,
  Computer,
  Web,
  Storage,
  Brush,
  GitHub,
  LinkedIn,
  Twitter,
  InsertDriveFile,
  PictureAsPdf,
  Visibility,
  CloudDownload,
  MenuBook,
  OpenInNew,
  Description,
  Print,
  Share,
  Bookmark,
  BookmarkBorder,
  ZoomIn,
  ZoomOut,
  RestartAlt,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Fullscreen,
  FullscreenExit,
} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_33_05 AM.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const About = () => {
  // 🔥 GOOGLE DRIVE FILE ID - REPLACE WITH YOUR ACTUAL FILE ID
  const FILE_ID = "14EC6_g-zXcJCjVbYh3VZ4NgejnQkwNwW";

  // ✅ CORRECT GOOGLE DRIVE URLS - These work 100%
  const pdfPreviewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const pdfViewUrl = `https://drive.google.com/file/d/${FILE_ID}/view`;
  const pdfDownloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  // States
  const [showModal, setShowModal] = useState(false);
  const [showDownloadConfirm, setShowDownloadConfirm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState(false);
  const [experienceYears, setExperienceYears] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Calculate experience from 2023 to current year
  useEffect(() => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    
    // Animate counters
    const timer1 = setTimeout(() => setExperienceYears(years), 500);
    const timer2 = setTimeout(() => setProjectsCount(28), 800);
    const timer3 = setTimeout(() => setClientsCount(22), 1100);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Check bookmark status on mount
  useEffect(() => {
    const bookmarked = localStorage.getItem(`cv_bookmarked_${FILE_ID}`) === 'true';
    setIsBookmarked(bookmarked);
  }, []);

  // ===============================
  // MODAL HANDLERS
  // ===============================
  const handleOpenModal = () => {
    setShowModal(true);
    setRecentlyViewed(true);
    toast.info("📄 Loading CV from Google Drive...");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (isFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // ===============================
  // DOWNLOAD HANDLERS
  // ===============================
  const confirmDownload = () => {
    setShowDownloadConfirm(true);
  };

  const performDownload = () => {
    setIsDownloading(true);
    
    try {
      // Open download URL in new tab
      window.open(pdfDownloadUrl, "_blank");
      toast.success("📥 Download started successfully!");
      setShowDownloadConfirm(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Download failed. Please try again.");
      setShowErrorModal(true);
    } finally {
      setIsDownloading(false);
    }
  };

  // ===============================
  // GOOGLE DRIVE HANDLERS
  // ===============================
  const openInGoogleDrive = () => {
    window.open(pdfViewUrl, "_blank");
    toast.success("📂 Opened in Google Drive");
  };

  // ===============================
  // FULLSCREEN HANDLERS
  // ===============================
  const toggleFullscreen = () => {
    const elem = document.getElementById("cv-viewer-container");
    
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // ===============================
  // ZOOM HANDLERS
  // ===============================
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    toast.info("Zoom reset to 100%");
  };

  // ===============================
  // BOOKMARK HANDLERS
  // ===============================
  const toggleBookmark = () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    localStorage.setItem(`cv_bookmarked_${FILE_ID}`, newBookmarkState);
    
    if (newBookmarkState) {
      toast.success("⭐ CV bookmarked!");
    } else {
      toast.info("Bookmark removed");
    }
  };

  // ===============================
  // SHARE HANDLER
  // ===============================
  const handleShare = () => {
    navigator.clipboard.writeText(pdfViewUrl);
    toast.success("🔗 CV link copied to clipboard!");
  };

  // ===============================
  // PRINT HANDLER
  // ===============================
  const handlePrint = () => {
    toast.info("🖨️ Opening Google Drive for printing...");
    window.open(pdfViewUrl, "_blank");
    setTimeout(() => {
      toast.info("Use browser print (Ctrl+P) from Google Drive");
    }, 1000);
  };

  // Skills data
  const skills = [
    {
      name: "Frontend Development",
      percent: 95,
      icon: <Code className="text-indigo-600" />,
      tech: ["React JS", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      percent: 90,
      icon: <DataObject className="text-purple-600" />,
      tech: ["Node JS", "Express", "PHP", "Python"],
    },
    {
      name: "UI/UX Design",
      percent: 88,
      icon: <DesignServices className="text-violet-600" />,
      tech: ["Material UI", "Framer Motion", "Figma"],
    },
    {
      name: "Graphic Design",
      percent: 78,
      icon: <DesignServicesTwoTone className="text-blue-600" />,
      tech: ["Photoshop", "Illustrator", "Canva"],
    },
    {
      name: "Computer Maintenance",
      percent: 85,
      icon: <Settings className="text-indigo-600" />,
      tech: ["Hardware", "Software", "Troubleshooting", "Networks"],
    },
  ];

  return (
    <>
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2" fill="currentColor" className="text-indigo-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6"
            >
              <School className="text-4xl text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Leon AKINGENEYE</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer crafting exceptional digital experiences since 2023
            </p>
            
            {/* Recently Viewed Badge */}
            {recentlyViewed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
              >
                <Visibility className="mr-2 text-lg" />
                CV recently viewed on Google Drive
              </motion.div>
            )}
          </motion.div>

          {/* Success Modal */}
          <AnimatePresence>
            {showSuccessModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-green-100 dark:border-green-900"
                >
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
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
                      Download Started!
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Your CV download has started successfully from Google Drive.
                    </p>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <InsertDriveFile className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5" />
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Leon_AKINGENEYE_CV_2025.pdf</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <img 
                              src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" 
                              alt="Google Drive"
                              className="w-4 h-4 inline mr-1"
                            />
                            Source: Google Drive
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => setShowSuccessModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      Close
                    </motion.button>
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
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-red-100 dark:border-red-900"
                >
                  <button
                    onClick={() => setShowErrorModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
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
                      Download Failed
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Unable to download CV. Please try opening directly in Google Drive.
                    </p>
                    
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={openInGoogleDrive}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                      >
                        Open in Drive
                      </motion.button>
                      <motion.button
                        onClick={() => setShowErrorModal(false)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src={image}
                  alt="Leon AKINGENEYE - Full Stack Developer"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 relative"
                />
                
                {/* Experience Badge - Animated Counter */}
                <motion.div
                  initial={{ scale: 0, x: 20, y: -20 }}
                  whileInView={{ scale: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-2xl"
                >
                  <motion.div 
                    className="text-4xl font-bold flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {experienceYears}+
                    <TrendingUp className="ml-2 text-2xl" />
                  </motion.div>
                  <div className="text-sm font-medium opacity-90">Years Experience</div>
                  <div className="text-xs mt-1 opacity-75">Since 2023</div>
                </motion.div>

                {/* Stats Cards */}
                <div className="absolute -top-6 -left-6 flex space-x-3">
                  <motion.div
                    initial={{ scale: 0, x: -20, y: -20 }}
                    whileInView={{ scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4"
                  >
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{projectsCount}+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, x: -20, y: -20 }}
                    whileInView={{ scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4"
                  >
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{clientsCount}+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="mb-8">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 flex items-center"
                >
                  <School className="mr-2" /> About Leon AKINGENEYE
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Full Stack{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    Web Developer
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  I'm <strong>Leon AKINGENEYE</strong>, a passionate Full Stack Developer with <strong>{experienceYears}+ years</strong> of hands-on experience 
                  building modern web applications. Since 2023, I've been crafting beautiful user interfaces 
                  and scalable backend solutions. I specialize in the JavaScript ecosystem and love solving 
                  complex problems with clean, efficient code.
                </motion.p>
                
                {/* Quick CV Access */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl mb-6 border border-indigo-100 dark:border-indigo-800"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" 
                        alt="Google Drive"
                        className="w-8 h-8 mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">CV on Google Drive</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">View Leon's complete professional experience</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={handleOpenModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center"
                    >
                      <Visibility className="mr-1 text-lg" />
                      View CV
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Skills Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Work className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Technical Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center mr-3">
                            {skill.icon}
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-white">
                              {skill.name}
                            </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {skill.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {skill.percent}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={handleOpenModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
                >
                  <img 
                    src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" 
                    alt="Google Drive"
                    className="w-5 h-5 mr-2"
                  />
                  View CV on Google Drive
                </motion.button>
                
                <motion.button
                  onClick={confirmDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isDownloading}
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-slate-600 flex items-center disabled:opacity-50"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2" />
                      Starting download...
                    </>
                  ) : (
                    <>
                      <CloudDownload className="mr-2" />
                      Download from Drive
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ================= GOOGLE DRIVE CV VIEWER MODAL ================= */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div
              id="cv-viewer-container"
              className="bg-white dark:bg-slate-800 w-full max-w-6xl h-[90vh] rounded-xl shadow-2xl flex flex-col relative"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <img 
                      src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" 
                      alt="Drive"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Leon AKINGENEYE - CV 2025
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Google Drive • PDF Document
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center bg-gray-100 dark:bg-slate-700 rounded-lg mr-2">
                    <Tooltip title="Zoom Out">
                      <IconButton
                        onClick={handleZoomOut}
                        disabled={zoom <= 0.5}
                        size="small"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <ZoomOut fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    
                    <span className="px-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {Math.round(zoom * 100)}%
                    </span>
                    
                    <Tooltip title="Zoom In">
                      <IconButton
                        onClick={handleZoomIn}
                        disabled={zoom >= 2}
                        size="small"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <ZoomIn fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="Reset Zoom">
                      <IconButton
                        onClick={handleResetZoom}
                        size="small"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <RestartAlt fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>

                  {/* Bookmark */}
                  <Tooltip title={isBookmarked ? "Remove Bookmark" : "Bookmark CV"}>
                    <IconButton
                      onClick={toggleBookmark}
                      className={isBookmarked ? "text-yellow-500" : "text-gray-600 dark:text-gray-300"}
                    >
                      {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                  </Tooltip>

                  {/* Share */}
                  <Tooltip title="Copy Link">
                    <IconButton
                      onClick={handleShare}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      <Share />
                    </IconButton>
                  </Tooltip>

                  {/* Print */}
                  <Tooltip title="Print">
                    <IconButton
                      onClick={handlePrint}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      <Print />
                    </IconButton>
                  </Tooltip>

                  {/* Fullscreen */}
                  <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
                    <IconButton
                      onClick={toggleFullscreen}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
                    </IconButton>
                  </Tooltip>

                  {/* Close */}
                  <Tooltip title="Close">
                    <IconButton
                      onClick={handleCloseModal}
                      className="text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30"
                    >
                      <Close />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              {/* PDF VIEWER */}
              <div className="flex-1 overflow-auto bg-gray-100 dark:bg-slate-900 p-4">
                <div
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "top left",
                    width: zoom > 1 ? `${100 / zoom}%` : "100%",
                    height: zoom > 1 ? `${100 / zoom}%` : "100%",
                  }}
                >
                  <iframe
                    src={pdfPreviewUrl}
                    title="Leon AKINGENEYE CV - Google Drive"
                    className="w-full h-full border-0 rounded-lg shadow-lg"
                    allow="autoplay; encrypted-media; fullscreen"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <img 
                    src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" 
                    alt="Google Drive"
                    className="w-5 h-5 mr-2"
                  />
                  <span>Stored securely on Google Drive</span>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outlined"
                    onClick={handleShare}
                    startIcon={<Share />}
                    sx={{
                      textTransform: "none",
                      borderColor: "#4285F4",
                      color: "#4285F4",
                      "&:hover": {
                        borderColor: "#3367D6",
                        backgroundColor: "rgba(66, 133, 244, 0.04)",
                      },
                    }}
                  >
                    Share
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={openInGoogleDrive}
                    startIcon={<OpenInNew />}
                    sx={{
                      textTransform: "none",
                      borderColor: "#0F9D58",
                      color: "#0F9D58",
                      "&:hover": {
                        borderColor: "#0B7E44",
                        backgroundColor: "rgba(15, 157, 88, 0.04)",
                      },
                    }}
                  >
                    Open in Drive
                  </Button>
                  
                  <Button
                    variant="contained"
                    onClick={confirmDownload}
                    startIcon={<CloudDownload />}
                    disabled={isDownloading}
                    sx={{
                      textTransform: "none",
                      background: "linear-gradient(to right, #4f46e5, #7c3aed)",
                      "&:hover": {
                        background: "linear-gradient(to right, #4338ca, #6d28d9)",
                      },
                    }}
                  >
                    {isDownloading ? "Downloading..." : "Download PDF"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= DOWNLOAD CONFIRM MODAL ================= */}
        {showDownloadConfirm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center relative border border-indigo-100 dark:border-indigo-900"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-4">
                <CloudDownload className="text-3xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Download CV?
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This will download "Leon_AKINGENEYE_CV_2025.pdf" directly from Google Drive.
              </p>
              
              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={performDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Yes, Download
                </motion.button>
                
                <motion.button
                  onClick={() => setShowDownloadConfirm(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-slate-600 transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
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
        
        #cv-viewer-container {
          transition: all 0.3s ease;
        }
        
        iframe {
          transition: transform 0.2s ease;
        }
      `}</style>
    </>
  );
};