/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import {
//   Web, Code,
//   Close, Email, Send, Business
// } from '@mui/icons-material';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [contactModalOpen, setContactModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     budget: '',
//     service: ''
//   });

//   const services = [
//     {
//       icon: <Web className="text-indigo-600 text-4xl" />,
//       title: "User Interface",
//       description: "Crafting beautiful, responsive websites with modern UI/UX principles that engage users and drive conversions.",
//       features: ["UI/UX Design", "Responsive Layouts", "Prototyping", "Material UI"],
//       details: "I create visually stunning websites that are optimized for all devices. My design process focuses on user experience, accessibility, and brand consistency. From initial wireframes to final implementation, I ensure your website not only looks great but also performs exceptionally."
//     },
//     {
//       icon: <Code className="text-purple-600 text-4xl" />,
//       title: "Web Development",
//       description: "Building robust, scalable web applications using cutting-edge technologies and frameworks.",
//       features: ["React JS", "Node.js", "TypeScript", "REST APIs"],
//       details: "Specializing in full-stack JavaScript development, I build custom web applications tailored to your business needs. Whether you need a simple brochure site or a complex web application, I deliver secure, performant solutions with clean, maintainable code."
//     }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     toast.success('Your message has been sent successfully!', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//     setContactModalOpen(false);
//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//       budget: '',
//       service: ''
//     });
//   };

//   const openContactModal = (service = '') => {
//     setFormData(prev => ({ ...prev, service }));
//     setContactModalOpen(true);
//   };

//   return (
//     <section className="w-full py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <p className="text-indigo-600 font-medium mb-2">What I Do</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Development Services</span>
//           </h2>
//           <p className="text-gray-600">
//             Comprehensive solutions tailored to your business needs, from concept to deployment and beyond.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
//             >
//               <div className="p-6">
//                 <div className="w-16 h-16 mb-4 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center">
//                       <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   onClick={() => setSelectedService(service)}
//                   className="bg-gradient-to-r from-indigo-300 to-purple-100  text-sm font-medium flex items-center transition-colors duration-200"
//                 >
//                   Learn more
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Service Details Modal */}
//         {selectedService && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//             <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mr-4">
//                       {selectedService.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
//                   </div>
//                   <button
//                     onClick={() => setSelectedService(null)}
//                     className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
//                   >
//                     <Close />
//                   </button>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-gray-800 mb-2">Service Details</h4>
//                   <p className="text-gray-600 mb-4">{selectedService.details}</p>

//                   <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                     {selectedService.features.map((feature, i) => (
//                       <div key={i} className="flex items-start">
//                         <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></div>
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex justify-end space-x-3">
//                   <button
//                     onClick={() => setSelectedService(null)}
//                     className="px-4 py-2 border bg-gradient-to-r from-red-500 to-red-300 font-medium rounded-lg text-gray-700 hover:bg-gray-50"
//                   >
//                     Close
//                   </button>
//                   <button
//                     onClick={() => {
//                       setSelectedService(null);
//                       openContactModal(selectedService.title);
//                     }}
//                     className="px-4 py-2 bg-gradient-to-r from-indigo-300 to-purple-500 font-medium text-white rounded-lg hover:bg-indigo-700 flex items-center"
//                   >
//                     <Send className="mr-2" /> Get This Service
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Contact Modal */}
//         {contactModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//             <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-xl font-bold text-gray-800 flex items-center">
//                     <Email className="text-indigo-600 mr-2" />
//                     Get In Touch
//                   </h3>
//                   <button
//                     onClick={() => setContactModalOpen(false)}
//                     className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
//                   >
//                     <Close />
//                   </button>
//                 </div>

//                 <form onSubmit={handleContactSubmit} className='text-black'>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder='LD'
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder='admin2example.com'
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   {formData.service && (
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
//                         value={formData.service}
//                         readOnly
//                       />
//                     </div>
//                   )}

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Project Budget (USD)</label>
//                     <select
//                       name="budget"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="">Select budget range</option>
//                       <option value="500-2000">$500 - $2,000</option>
//                       <option value="2000-5000">$2,000 - $5,000</option>
//                       <option value="5000-10000">$5,000 - $10,000</option>
//                       <option value="10000+">$10,000+</option>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
//                     <textarea
//                       name="message"
//                       rows="4"
//                       placeholder='Hi LD , Am pleassed to ask you a help!'
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="flex justify-end space-x-3">
//                     <button
//                       type="button"
//                       onClick={() => setContactModalOpen(false)}
//                       className="px-4 py-2 border bg-gradient-to-r from-red-500 to-red-300 font-medium rounded-lg text-gray-700 hover:bg-gray-50"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-purple-600 font-medium text-white rounded-lg hover:bg-indigo-700 flex items-center"
//                     >
//                       <Send className="mr-2" /> Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Additional CTA */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8 md:p-10 inline-block max-w-3xl">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Have a custom project in mind?</h3>
//             <p className="text-gray-600 mb-6">
//               Let's discuss how I can help bring your ideas to life with tailored solutions.
//             </p>
//             <button
//               onClick={() => openContactModal()}
//               className="bg-gradient-to-r from-indigo-400 to-blue-600  text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center mx-auto"
//             >
//               <Business className="mr-2" /> Mail Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };






























import React, { useState } from "react";
import {
  Web,
  Code,
  Close,
  Email,
  Send,
  Business,
  CheckCircle,
  Error,
  Warning,
  Info,
  ArrowForward,
  Work,
  Speed,
  DesignServices,
  Storage,
  Security,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationModal, setConfirmationModal] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
    onConfirm: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    service: "",
  });

  const services = [
    {
      icon: <Web className="text-indigo-600 text-4xl" />,
      title: "Frontend Development",
      description:
        "Creating dynamic, responsive, and maintainable user interfaces for modern web applications.",
      features: [
        "React JS / Vue / Angular",
        "Responsive Design",
        "Component Libraries",
        "State Management",
        "Tailwind CSS",
        "Framer Motion",
      ],
      details:
        "I build frontend systems that are visually appealing, performant, and easy to maintain. I focus on reusable components, responsive layouts, and user-centric designs that work across all devices.",
      longDescription:
        "Using modern frontend frameworks and best practices, I create interfaces that are fast and accessible. From state management to smooth animations, every aspect is optimized for the end-user experience and long-term maintainability.",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      stats: {
        projects: "15+",
        satisfaction: "100%",
        delivery: "On Time",
      },
    },
    {
      icon: <Code className="text-purple-600 text-4xl" />,
      title: "Full-Stack Development",
      description:
        "Designing and developing end-to-end applications with seamless integration of frontend and backend.",
      features: [
        "Node.js / Express",
        "React / TypeScript",
        "REST & GraphQL APIs",
        "MongoDB / PostgreSQL",
        "Authentication & Authorization",
        "Unit & Integration Testing",
      ],
      details:
        "I deliver complete full-stack solutions that align with your business requirements. Whether it's building a SaaS platform or a custom web app, I ensure code quality, performance, and scalability.",
      longDescription:
        "My full-stack development approach focuses on building reliable, maintainable, and high-performance applications. I combine frontend and backend expertise to create solutions that are secure, efficient, and ready for production.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      stats: {
        projects: "20+",
        satisfaction: "100%",
        delivery: "Fast",
      },
    },
    {
      icon: <Storage className="text-green-600 text-4xl" />,
      title: "Backend & API Development",
      description:
        "Building robust server-side systems, scalable APIs, and database architectures for reliable applications.",
      features: [
        "Node.js / Express / NestJS",
        "SQL & NoSQL Databases",
        "RESTful & GraphQL APIs",
        "Authentication & Security",
        "Server Optimization",
        "Cloud Integration",
      ],
      details:
        "I develop backend systems that handle high traffic, ensure data consistency, and integrate seamlessly with frontend components. Security, scalability, and maintainability are always top priorities.",
      longDescription:
        "With deep backend expertise, I create APIs and server systems that support complex business logic. Using best practices in architecture and security, I ensure your backend is fast, reliable, and scalable for future growth.",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      stats: {
        projects: "10+",
        satisfaction: "100%",
        delivery: "Reliable",
      },
    },
    {
      icon: <Security className="text-orange-600 text-4xl" />,
      title: "DevOps & Cloud Engineering",
      description:
        "Automating deployments, managing cloud infrastructure, and ensuring application reliability at scale.",
      features: [
        "AWS / Azure / GCP",
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "Monitoring & Logging",
        "Infrastructure as Code",
        "Auto-Scaling & Load Balancing",
      ],
      details:
        "I streamline deployment processes and manage cloud infrastructure to ensure applications run efficiently and securely. I implement CI/CD pipelines, container orchestration, and monitoring solutions.",
      longDescription:
        "Modern software requires modern infrastructure. I create cloud environments that are scalable, cost-effective, and resilient. With automation and best practices, your applications stay up and perform optimally.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      stats: {
        projects: "8+",
        satisfaction: "100%",
        delivery: "Efficient",
      },
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showConfirmationModal(
        "error",
        "Validation Error",
        "Please enter your name"
      );
      return false;
    }
    if (!formData.email.trim()) {
      showConfirmationModal(
        "error",
        "Validation Error",
        "Please enter your email address"
      );
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showConfirmationModal(
        "error",
        "Invalid Email",
        "Please enter a valid email address"
      );
      return false;
    }
    if (!formData.budget) {
      showConfirmationModal(
        "error",
        "Validation Error",
        "Please select your budget range"
      );
      return false;
    }
    if (!formData.message.trim()) {
      showConfirmationModal(
        "error",
        "Validation Error",
        "Please tell us about your project"
      );
      return false;
    }
    return true;
  };

  const showConfirmationModal = (type, title, message, onConfirm = null) => {
    setConfirmationModal({
      open: true,
      type,
      title,
      message,
      onConfirm,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "https://leonstatusprofile.onrender.com/messages",
        {
          name: formData.name,
          email: formData.email,
          message: `Service: ${formData.service || 'Not specified'}\nBudget: ${formData.budget}\n\n${formData.message}`,
          budget: formData.budget,
          service: formData.service || 'General Inquiry'
        },
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
          icon: "✨",
        });

        setSubmitStatus("success");
        showConfirmationModal(
          "success",
          "Message Sent!",
          "Thank you for reaching out. I'll get back to you within 24 hours."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
          budget: "",
          service: "",
        });
        
        // Close contact modal
        setContactModalOpen(false);
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

      toast.error(
        "❌ " +
          (error.response?.data?.message ||
            "Failed to send message. Please try again."),
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );

      showConfirmationModal(
        "error",
        "Message Failed",
        error.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openContactModal = (service = "") => {
    setFormData((prev) => ({ ...prev, service }));
    setContactModalOpen(true);
  };

  const getModalIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-5xl text-green-500" />;
      case "error":
        return <Error className="text-5xl text-red-500" />;
      case "confirm":
        return <Warning className="text-5xl text-yellow-500" />;
      default:
        return <Info className="text-5xl text-blue-500" />;
    }
  };

  const getModalGradient = (type) => {
    switch (type) {
      case "success":
        return "from-green-500 to-emerald-600";
      case "error":
        return "from-red-500 to-rose-600";
      case "confirm":
        return "from-yellow-500 to-amber-600";
      default:
        return "from-blue-500 to-indigo-600";
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 right-40 w-96 h-96 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6"
            >
              <Code className="text-4xl text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Development Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Comprehensive solutions tailored to your business needs, from
              concept to deployment and beyond.
            </p>
          </motion.div>

          {/* Services Grid - Responsive */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div
                  className={`relative h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl`}
                >
                  {/* Top Gradient Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color} rounded-t-2xl`}
                  ></div>

                  {/* Icon with Animation */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mb-4 rounded-xl ${service.bgColor} dark:bg-opacity-20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="text-4xl">{service.icon}</div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2`}
                        ></div>
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                    {service.features.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {service.stats.projects}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {service.stats.satisfaction}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Happy
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {service.stats.delivery}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Delivery
                      </div>
                    </div>
                  </div>

                  {/* Learn More Button - Fixed gradient */}
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300`}
                  >
                    Learn more
                    <ArrowForward className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional CTA - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 md:p-10 lg:p-12 max-w-4xl mx-auto backdrop-blur-sm">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Have a custom project in mind?
                </h3>
              </motion.div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                Let's discuss how I can help bring your ideas to life with
                tailored solutions.
              </p>
              <motion.button
                onClick={() => openContactModal()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto text-base md:text-lg group"
              >
                <Business className="mr-2 group-hover:rotate-12 transition-transform" />
                Start Your Project
                <ArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal - Responsive with Animation */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 rounded-xl ${selectedService.bgColor} dark:bg-opacity-20 flex items-center justify-center mr-4`}
                    >
                      <div className="text-4xl">{selectedService.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedService.title}
                      </h3>
                      <span
                        className={`text-sm bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent font-medium`}
                      >
                        Premium Service
                      </span>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-b from-red-500 to-red-700 text-white p-2 rounded-full self-start"
                  >
                    <Close />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {/* Service Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Info className="mr-2 text-indigo-600" />
                      Service Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {selectedService.details}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Work className="mr-2 text-purple-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${selectedService.color} rounded-full mt-2 mr-2`}
                          ></div>
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl">
                    {Object.entries(selectedService.stats).map(
                      ([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {value}
                          </div>
                          <div className="text-xs capitalize text-gray-600 dark:text-gray-400">
                            {key}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border-2 bg-gradient-to-b from-red-400 to-red-500 text-white font-medium rounded-xl transition-colors order-2 sm:order-1"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setSelectedService(null);
                      openContactModal(selectedService.title);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 bg-gradient-to-r ${selectedService.color} text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center order-1 sm:order-2`}
                  >
                    <Send className="mr-2" />
                    Get This Service
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal - Responsive with Animation */}
      <AnimatePresence>
        {contactModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                      <Email className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    Get In Touch
                  </h3>
                  <motion.button
                    onClick={() => setContactModalOpen(false)}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-b from-red-500 to-red-700 text-white p-2 rounded-full"
                  >
                    <Close />
                  </motion.button>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-5 text-black">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Service Field - Read Only */}
                  {formData.service && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Service Interested In
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="font-medium">{formData.service}</span>
                      </div>
                    </div>
                  )}

                  {/* Budget Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Budget (USD)
                    </label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="$500 - $2,000">$500 - $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell me about your project, goals, and requirements..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition-all resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => setContactModalOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors order-2 sm:order-1"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center order-1 sm:order-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                          <Send className="mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success/Error/Confirm Modal - Responsive with Animation */}
      <AnimatePresence>
        {confirmationModal.open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full"
            >
              <div className="p-8 text-center">
                {/* Icon with Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className="flex justify-center mb-4"
                >
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${getModalGradient(confirmationModal.type)} bg-opacity-10`}
                  >
                    {getModalIcon(confirmationModal.type)}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {confirmationModal.title}
                </motion.h3>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-6"
                >
                  {confirmationModal.message}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  {confirmationModal.type === "confirm" ? (
                    <>
                      <motion.button
                        onClick={() =>
                          setConfirmationModal({
                            ...confirmationModal,
                            open: false,
                          })
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 font-medium rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          if (confirmationModal.onConfirm) {
                            confirmationModal.onConfirm();
                          }
                          setConfirmationModal({
                            ...confirmationModal,
                            open: false,
                          });
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-6 py-3 bg-gradient-to-r ${getModalGradient(confirmationModal.type)} text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Confirm
                      </motion.button>
                    </>
                  ) : (
                    <motion.button
                      onClick={() =>
                        setConfirmationModal({
                          ...confirmationModal,
                          open: false,
                        })
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-8 py-3 bg-gradient-to-r ${getModalGradient(confirmationModal.type)} text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[150px]`}
                    >
                      {confirmationModal.type === "success"
                        ? "Great!"
                        : "Try Again"}
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer />

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
    </>
  );
};