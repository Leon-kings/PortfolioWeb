// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// export const Message = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccessPage, setShowSuccessPage] = useState(false);
//   const [submissionError, setSubmissionError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmissionError(null);

//     try {
//       const response = await axios.post(
//         "https://leonstatusprofile.onrender.com/messages",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setShowSuccessPage(true);
//     } catch (error) {
//       let errorMessage = "Something went wrong!";

//       if (error.response) {
//         errorMessage =
//           error.response.data.message ||
//           `Server responded with ${error.response.status}`;
//       } else if (error.request) {
//         errorMessage = "No response from server - please try again later";
//       } else {
//         errorMessage = error.message;
//       }

//       toast.error(errorMessage);
//       setSubmissionError(errorMessage);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setShowSuccessPage(false);
//     setSubmissionError(null);
//   };

//   return (
//     <section className="w-full relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-300 to-violet-500">

//       {/* SVG Decorations */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden">
//         <svg
//           className="w-full h-24 text-blue-100"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity=".25"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity=".5"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             fill="currentColor"
//           ></path>
//         </svg>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         {showSuccessPage ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white text-black p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
//           >
//             <svg
//               className="w-20 h-20 mx-auto text-green-500 mb-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Message Sent Successfully!
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               Thank you for reaching out. I'll get back to you soon.
//             </p>
//             <motion.button
//               onClick={resetForm}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
//             >
//               Send Another Message
//             </motion.button>
//           </motion.div>
//         ) : (
//           <>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center w-full mb-12"
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Get in Touch
//               </h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Have a project in mind or want to collaborate? Drop me a message
//                 below.
//               </p>
//             </motion.div>

//             <div className="grid w-full md:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-auto"
//               >
//                 <svg viewBox="0 0 500 500" className="w-full h-auto">
//                   <rect
//                     x="50"
//                     y="50"
//                     width="400"
//                     height="400"
//                     rx="20"
//                     fill="#f0f9ff"
//                     stroke="#3B82F6"
//                     strokeWidth="2"
//                   />

//                   <motion.rect
//                     x="100"
//                     y="100"
//                     width="300"
//                     height="300"
//                     rx="15"
//                     fill="white"
//                     stroke="#3B82F6"
//                     strokeWidth="2"
//                     animate={{ y: [100, 90, 100] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                   />

//                   <g transform="translate(0, -20)">
//                     <motion.rect
//                       x="120"
//                       y="150"
//                       width="180"
//                       height="50"
//                       rx="10"
//                       fill="#e0f2fe"
//                       initial={{ width: 0 }}
//                       animate={{ width: 180 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                     <text
//                       x="130"
//                       y="180"
//                       fontFamily="Arial"
//                       fontSize="14"
//                       fill="#0369a1"
//                     >
//                       Hi there! Message us below
//                     </text>

//                     <motion.rect
//                       x="300"
//                       y="220"
//                       width="180"
//                       height="50"
//                       rx="10"
//                       fill="#3B82F6"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: 180 }}
//                       transition={{ duration: 0.5, delay: 1 }}
//                     />
//                     <motion.text
//                       x="310"
//                       y="250"
//                       fontFamily="Arial"
//                       fontSize="14"
//                       fill="white"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3, delay: 1.3 }}
//                     >
//                       Hello Leon! I'd like to connect
//                     </motion.text>

//                     <motion.g
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3, delay: 2.5 }}
//                     >
//                       <motion.circle
//                         cx="140"
//                         cy="300"
//                         r="5"
//                         fill="#9ca3af"
//                         animate={{ cy: [300, 290, 300] }}
//                         transition={{ duration: 1, delay: 3, repeat: Infinity }}
//                       />
//                       <motion.circle
//                         cx="160"
//                         cy="300"
//                         r="5"
//                         fill="#9ca3af"
//                         animate={{ cy: [300, 290, 300] }}
//                         transition={{
//                           duration: 1,
//                           delay: 3.2,
//                           repeat: Infinity,
//                         }}
//                       />
//                       <motion.circle
//                         cx="180"
//                         cy="300"
//                         r="5"
//                         fill="#9ca3af"
//                         animate={{ cy: [300, 290, 300] }}
//                         transition={{
//                           duration: 1,
//                           delay: 3.4,
//                           repeat: Infinity,
//                         }}
//                       />
//                       <text
//                         x="200"
//                         y="305"
//                         fontFamily="Arial"
//                         fontSize="12"
//                         fill="#6b7280"
//                       >
//                         Leon is typing...
//                       </text>
//                     </motion.g>
//                   </g>

//                   <motion.g transform="translate(150, 370)">
//                     <motion.rect
//                       x="0"
//                       y="0"
//                       width="200"
//                       height="50"
//                       rx="25"
//                       fill="#3B82F6"
//                       animate={{ fill: ["#3B82F6", "#2563eb", "#3B82F6"] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     />
//                     <motion.text
//                       x="100"
//                       y="30"
//                       fontFamily="Arial"
//                       fontSize="16"
//                       fill="white"
//                       textAnchor="middle"
//                       fontWeight="bold"
//                       animate={{ fontSize: ["16px", "17px", "16px"] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       Message Us Now
//                     </motion.text>

//                     <motion.polygon
//                       points="180,15 195,25 180,35"
//                       fill="white"
//                       animate={{
//                         points: [
//                           "180,15 195,25 180,35",
//                           "185,15 200,25 185,35",
//                           "180,15 195,25 180,35",
//                         ],
//                       }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     />
//                   </motion.g>

//                   <text
//                     x="250"
//                     y="80"
//                     fontFamily="Arial"
//                     fontSize="24"
//                     fill="#3B82F6"
//                     textAnchor="middle"
//                     fontWeight="bold"
//                   >
//                     Leon
//                   </text>
//                 </svg>
//               </motion.div>

//               <motion.form
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 onSubmit={handleSubmit}
//                 className="bg-white text-black w-full p-8 rounded-2xl shadow-xl border border-gray-100"
//               >
//                 {submissionError && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700"
//                   >
//                     <p>{submissionError}</p>
//                   </motion.div>
//                 )}

//                 <div className="mb-6">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div className="mb-8">
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     placeholder="Tell me about your project..."
//                   ></textarea>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : (
//                     "Send Message"
//                   )}
//                 </motion.button>
//               </motion.form>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Bottom SVG Decoration */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
//         <svg
//           className="w-full h-24 text-blue-100"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity=".25"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity=".5"
//             fill="currentColor"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             fill="currentColor"
//           ></path>
//         </svg>
//       </div>

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
//         theme="colored"
//       />
//     </section>
//   );
// };
























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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.warning("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.warning("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.warning("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      toast.warning("Please enter your message");
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

      toast.success("✨ Message delivered successfully!");
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

      toast.error(errorMessage);
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

  return (
    <section className="w-full relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 overflow-hidden">
      
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative">
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6"
          >
            <ForumIcon className="text-4xl text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm just one message away.
          </p>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
                  <CloseIcon />
                </button>
                
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
                  >
                    <CheckCircleIcon className="text-5xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 mb-4">
                    <VerifiedIcon className="text-lg" />
                    <span className="text-sm font-medium">Verified & Delivered</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out, <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>! I'll review your message and get back to you within 24 hours.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MarkunreadIcon className="text-blue-600 dark:text-blue-400 text-lg mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-300">A confirmation has been sent to:</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{formData.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      Send Another Message
                    </motion.button>
                    <motion.button
                      onClick={() => setShowSuccessModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-none px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <CloseIcon />
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
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
                  <CloseIcon />
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
                    Message Failed
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 mb-4">
                    <WarningIcon className="text-lg" />
                    <span className="text-sm font-medium">Delivery Error</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {submissionError || "Something went wrong. Please try again."}
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <InfoIcon className="text-red-600 dark:text-red-400 text-lg mt-0.5" />
                      <div className="text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Possible solutions:</p>
                        <ul className="text-sm text-gray-900 dark:text-white font-medium list-disc list-inside mt-1">
                          <li>Check your internet connection</li>
                          <li>Verify email is correct</li>
                          <li>Try again in a few minutes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={() => {
                        setShowErrorModal(false);
                        setShowConfirmModal(true);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      Try Again
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

          {/* Confirm Modal */}
          {showConfirmModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-blue-100 dark:border-blue-900"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-6"
                  >
                    <SendIcon className="text-4xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Confirm Message
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Please review your message before sending.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 mb-6 text-left space-y-3">
                    <div className="flex items-start space-x-2">
                      <PersonIcon className="text-gray-500 dark:text-gray-400 text-lg mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{formData.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <EmailIcon className="text-gray-500 dark:text-gray-400 text-lg mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{formData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MessageIcon className="text-gray-500 dark:text-gray-400 text-lg mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Message</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{formData.message}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      Confirm & Send
                    </motion.button>
                    <motion.button
                      onClick={() => setShowConfirmModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      Edit
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <RocketLaunchIcon className="mr-2 text-blue-600 dark:text-blue-400" />
                Why Connect With Leon?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="text-blue-600 dark:text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">24h Response Time</span> - I prioritize quick replies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="text-indigo-600 dark:text-indigo-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">NDA Ready</span> - Your ideas are safe with me</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="text-purple-600 dark:text-purple-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Free Consultation</span> - Let's discuss your project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Illustration */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden lg:block"
            >
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background Circle */}
                <circle cx="250" cy="200" r="150" fill="url(#grad1)" />
                
                {/* Envelope Icon */}
                <motion.g
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <rect x="170" y="130" width="160" height="120" rx="16" fill="#3B82F6" />
                  <rect x="170" y="130" width="160" height="120" rx="16" fill="white" className="dark:fill-slate-800" />
                  <polygon points="170,130 250,190 330,130" fill="#3B82F6" fillOpacity="0.2" />
                  <polygon points="170,250 210,200 250,230 290,200 330,250" fill="#3B82F6" fillOpacity="0.3" />
                </motion.g>
                
                {/* Paper Airplane */}
                <motion.g
                  animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <polygon points="300,160 320,140 340,160 320,200" fill="#6366F1" />
                </motion.g>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-slate-700">
              <form onSubmit={handleConfirmSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PersonIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EmailIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <MessageIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="Tell me about your project, idea, or collaboration..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                  Your information is secure and will never be shared
                </p>
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
      `}</style>
    </section>
  );
};