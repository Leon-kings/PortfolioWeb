/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Web,
  PhoneAndroid,
  SportsEsports,
  ExpandMore,
  Close,
  GitHub,
  OpenInNew,
  NavigateNext,
  Code,
  Visibility,
  Star,
  TrendingUp,
  Devices,
  CheckCircle,
  Launch,
  ArrowForward,
  SmartDisplay,
  Brush,
  MobileFriendly,
  Info,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);
  const [liveDemoUrl, setLiveDemoUrl] = useState("");
  const [iframeLoading, setIframeLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsPerPage = 6;

  const filters = [
    { id: "*", name: "All Projects", icon: <ExpandMore />, color: "from-indigo-500 to-purple-600" },
    { id: "web", name: "Web Design", icon: <Web />, color: "from-blue-500 to-cyan-600" },
    { id: "mobile", name: "Mobile Apps", icon: <PhoneAndroid />, color: "from-green-500 to-teal-600" },
    { id: "game", name: "Game Dev", icon: <SportsEsports />, color: "from-orange-500 to-red-600" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern eCommerce Platform",
      category: "web",
      image: "https://www.shutterstock.com/image-photo/singapore-november-06-2023-interior-600nw-2408572559.jpg",
      hoverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
      description:
        "Hexalio is your shopping destination for fashion, home, beauty, kids' clothes and more.",
      fullDescription:
        "A fully-featured eCommerce platform with product management, user authentication, shopping cart, secure payments via Stripe, and email notifications. The platform is built with modern technologies and follows best practices for performance and SEO.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Stripe API",
        "Nodemailer",
        "Tailwind CSS",
        "Redux Toolkit",
        "JWT Auth",
      ],
      features: [
        "User authentication & profiles",
        "Product search & filters",
        "Shopping cart & wishlist",
        "Secure payment processing",
        "Order tracking",
        "Admin dashboard",
      ],
      links: {
        live: "https://hexalio.vercel.app/",
        code: "https://github.com/Leon-kings/Hexalios",
      },
      stats: {
        clients: "500+",
        rating: "4.9",
        projects: "15+",
      },
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "Luxury Hotel Booking Platform",
      category: "web",
      image: "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
      hoverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      description:
        "Browse Hotels · Mövenpick Kigali · Mantis Kivu Queen · Mantis EPIC Hotel & Suites",
      fullDescription:
        "A comprehensive hotel booking platform featuring real-time availability, room management, booking system, and payment integration. Users can search hotels by location, dates, and amenities with an intuitive interface.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Stripe API",
        "Nodemailer",
        "Tailwind CSS",
        "Express",
        "Cloudinary",
      ],
      features: [
        "Real-time availability",
        "Room management",
        "Booking calendar",
        "Payment processing",
        "Email confirmations",
        "Admin panel",
      ],
      links: {
        live: "https://ld-hotels.vercel.app",
        code: "https://github.com/Leon-kings/Hotels",
      },
      stats: {
        clients: "200+",
        rating: "4.8",
        projects: "12+",
      },
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Internet Speed Monitor",
      category: "mobile",
      image: "https://i.pcmag.com/imagery/articles/03xdeDG4m4n0gJG3CbFNIgm-17..v1661444591.png",
      hoverImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600",
      description:
        "How fast is your download speed? In seconds, ISP's simple Internet speed test will estimate your ISP speed.",
      fullDescription:
        "A responsive mobile application that accurately measures internet download and upload speeds. Features real-time graphs, history tracking, and detailed analytics of your connection performance over time.",
      technologies: ["React Native", "Expo", "Tailwind CSS", "Chart.js", "Axios"],
      features: [
        "Download speed test",
        "Upload speed test",
        "Ping measurement",
        "History tracking",
        "Data visualization",
        "Export reports",
      ],
      links: {
        live: "https://internet-speed-gamma.vercel.app/",
        code: "https://github.com/Leon-kings/ISP-Tests",
      },
      stats: {
        clients: "1000+",
        rating: "4.7",
        projects: "8+",
      },
      color: "from-green-500 to-teal-600",
    },
    {
      id: 4,
      title: "Smart Home Security System",
      category: "web",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/11/467259570/KS/GL/VW/211422720/oob-automation-security-and-surveillance.jpg",
      hoverImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
      description:
        "From wireless surveillance systems to smart home cameras, reliable options to keep your home or business safe.",
      fullDescription:
        "A comprehensive security monitoring platform that integrates with various camera systems and sensors. Features live streaming, motion detection alerts, recording management, and remote access capabilities.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "WebRTC",
        "Socket.io",
        "Tailwind CSS",
        "FFmpeg",
      ],
      features: [
        "Live camera streaming",
        "Motion detection",
        "Alert notifications",
        "Cloud recording",
        "Multi-device support",
        "Security analytics",
      ],
      links: {
        live: "https://home-safety.vercel.app",
        code: "https://github.com/Leon-kings/CamSafety",
      },
      stats: {
        clients: "150+",
        rating: "4.9",
        projects: "10+",
      },
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      title: "Artisan Coffee Shop",
      category: "web",
      image: "https://cdn.shopify.com/s/files/1/0491/2165/6981/files/Eco-Friendly_and_Sustainable_480x480.webp?v=1733402305",
      hoverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
      description:
        "Rwanda's most famous coffee shop supporting women coffee growers with two branches in Kigali.",
      fullDescription:
        "An elegant e-commerce platform for a specialty coffee roaster. Features product catalog, subscription management, coffee brewing guides, and a storytelling interface that highlights the journey from bean to cup.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Stripe API",
        "Nodemailer",
        "Tailwind CSS",
        "Framer Motion",
      ],
      features: [
        "Product catalog",
        "Subscription plans",
        "Brewing guides",
        "Coffee quiz",
        "Gift cards",
        "Order tracking",
      ],
      links: {
        live: "https://coffee-app-six-delta.vercel.app",
        code: "https://github.com/Leon-kings/coffee-app",
      },
      stats: {
        clients: "300+",
        rating: "4.8",
        projects: "12+",
      },
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 6,
      title: "Afro Fusion Restaurant",
      category: "web",
      image: "https://images.ctfassets.net/trvmqu12jq2l/6FV4Opt7wUyR91t2FXyOIr/f32972fce10fc87585e831b334ea17ef/header.jpg?q=70&w=1208&h=1080&f=faces&fit=fill",
      hoverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      description:
        "Experience Afro fusion cuisine at the boho restaurant with stunning views and laid-back vibes.",
      fullDescription:
        "A modern restaurant management system with online reservations, digital menu, table management, and customer feedback. Includes QR code ordering and real-time kitchen notifications.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Stripe API",
        "Nodemailer",
        "Tailwind CSS",
        "Socket.io",
      ],
      features: [
        "Online reservations",
        "Digital menu",
        "Table management",
        "QR code ordering",
        "Kitchen display",
        "Customer feedback",
      ],
      links: {
        live: "https://restorantapp.vercel.app",
        code: "https://github.com/Leon-kings/Restorant",
      },
      stats: {
        clients: "180+",
        rating: "4.9",
        projects: "14+",
      },
      color: "from-red-500 to-rose-600",
    },
    {
      id: 7,
      title: "TaskFlow - Project Management",
      category: "web",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      hoverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
      description:
        "A collaborative project management tool for teams to organize tasks and track progress.",
      fullDescription:
        "TaskFlow is a comprehensive project management solution with Kanban boards, Gantt charts, team collaboration features, and real-time updates. Perfect for agile teams of any size.",
      technologies: [
        "React JS",
        "Node JS",
        "PostgreSQL",
        "Socket.io",
        "Tailwind CSS",
        "Redux",
        "JWT",
      ],
      features: [
        "Kanban boards",
        "Gantt charts",
        "Team collaboration",
        "File sharing",
        "Time tracking",
        "Reporting",
      ],
      links: {
        live: "https://taskflow-demo.vercel.app",
        code: "https://github.com/Leon-kings/taskflow",
      },
      stats: {
        clients: "50+",
        rating: "4.8",
        projects: "6+",
      },
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 8,
      title: "FitTrack - Fitness App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=600",
      hoverImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
      description:
        "Track your workouts, monitor progress, and achieve fitness goals with personalized training plans.",
      fullDescription:
        "A comprehensive fitness tracking application that creates personalized workout plans, tracks exercises, monitors nutrition, and provides detailed analytics on your fitness journey.",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Chart.js"],
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress photos",
        "Goal setting",
        "Social sharing",
        "Coach integration",
      ],
      links: {
        live: "https://fittrack-demo.vercel.app",
        code: "https://github.com/Leon-kings/fittrack",
      },
      stats: {
        clients: "200+",
        rating: "4.7",
        projects: "9+",
      },
      color: "from-green-500 to-emerald-600",
    },
  ];

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Check if we need to show the next page button
  const showNextButton =
    filteredProjects.length > projectsPerPage && currentPage < totalPages;

  // Handle filter change - reset to first page
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedProject(null), 300);
  };

  const openLiveDemo = (url) => {
    setLiveDemoUrl(url);
    setIsLiveDemoOpen(true);
    setIframeLoading(true);
    document.body.style.overflow = "hidden";
  };

  const closeLiveDemo = () => {
    setIsLiveDemoOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setLiveDemoUrl("");
      setIframeLoading(true);
    }, 300);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Reset iframe loading state when URL changes
  useEffect(() => {
    if (isLiveDemoOpen) {
      setIframeLoading(true);
    }
  }, [liveDemoUrl, isLiveDemoOpen]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6"
          >
            <Code className="text-4xl text-white" />
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 tracking-wider text-sm uppercase">
            My Portfolio
          </motion.p>
          
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Projects
            </span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A collection of innovative solutions I've crafted, showcasing expertise in modern web and mobile development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons - Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={scaleIn}
              onClick={() => handleFilterChange(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
              }`}
            >
              <span className={`text-lg ${activeFilter === filter.id ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                {filter.icon}
              </span>
              <span className="font-medium">{filter.name}</span>
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-white/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Enhanced with Animations */}
        <motion.div
          key={activeFilter + currentPage}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => openProjectModal(project)}
            >
              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} z-10`}></div>
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={hoveredProject === project.id ? (project.hoverImage || project.image) : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={false}
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay with Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold`}>
                        {project.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{project.stats.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="text-center">
                        <div className="text-sm font-bold">{project.stats.clients}</div>
                        <div className="text-xs text-gray-300">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold">{project.stats.projects}</div>
                        <div className="text-xs text-gray-300">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold">{project.stats.rating}</div>
                        <div className="text-xs text-gray-300">Rating</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openLiveDemo(project.links.live);
                      }}
                      className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                    >
                      <Visibility className="w-5 h-5" />
                    </motion.button>
                    <motion.a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <GitHub className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-indigo-600 dark:text-indigo-400 font-medium text-sm flex items-center"
                  >
                    View Details
                    <ArrowForward className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls - Enhanced Design */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                  currentPage > 1
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }`}
              >
                <NavigateNext className="rotate-180 w-5 h-5" />
                <span>Previous</span>
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2 px-4">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <motion.button
                      key={pageNumber}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === pageNumber
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      {pageNumber}
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                  currentPage < totalPages
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }`}
              >
                <span>Next</span>
                <NavigateNext className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Page <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentPage}</span> of {totalPages}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <Devices className="text-4xl text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal - Enhanced with Animations */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button - Enhanced */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-20 bg-gradient-to-br from-red-500 to-rose-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Close className="w-6 h-6" />
                </motion.button>

                {/* Project Image with Overlay */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedProject.color} rounded-full text-sm font-semibold mb-3`}>
                        {selectedProject.category.toUpperCase()}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {selectedProject.title}
                      </h2>
                    </motion.div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.stats).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-700/50 dark:to-indigo-900/30 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${selectedProject.color} rounded-full mt-2 mr-2`}></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} bg-opacity-10 text-gray-800 dark:text-white rounded-lg text-sm font-medium border border-${selectedProject.color.split(' ')[0].replace('from-', '')}/20`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-700"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        closeModal();
                        openLiveDemo(selectedProject.links.live);
                      }}
                      className={`px-8 py-4 bg-gradient-to-r ${selectedProject.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center`}
                    >
                      <Launch className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.button>
                    
                    <motion.a
                      href={selectedProject.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                    >
                      <GitHub className="w-5 h-5 mr-2" />
                      View Code
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Demo Modal - Fixed Loading Issue, No New Tab Button */}
      <AnimatePresence>
        {isLiveDemoOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-md p-4"
            onClick={closeLiveDemo}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Clean & Simple */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <SmartDisplay className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Demo: {selectedProject?.title}</h3>
                    <p className="text-xs text-indigo-100">Interactive Preview</p>
                  </div>
                </div>
                <motion.button
                  onClick={closeLiveDemo}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  aria-label="Close demo"
                >
                  <Close className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Iframe Container - Fixed Loading Issue */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative">
                {liveDemoUrl && (
                  <iframe
                    src={liveDemoUrl}
                    className="w-full h-full border-0"
                    title={`${selectedProject?.title} Live Demo`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-presentation allow-downloads allow-popups-to-escape-sandbox"
                    loading="lazy"
                    onLoad={handleIframeLoad}
                    allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; payment; autoplay; fullscreen"
                  />
                )}
                
                {/* Loading Overlay - Disappears when iframe loads */}
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Loading preview...</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Please wait while we load the demo</p>
                    
                    {/* Fallback button in case iframe takes too long */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(liveDemoUrl, '_blank')}
                      className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                    >
                      <Launch className="w-4 h-4 mr-2" />
                      Open in Browser
                    </motion.button>
                  </div>
                )}
                
                {/* Error Fallback - If iframe fails to load */}
                {!iframeLoading && (
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-green-500/90 text-white rounded-lg text-sm flex items-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Live Preview Active
                  </div>
                )}
              </div>

              {/* Modal Footer - Simple Info */}
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Secure Connection
                </div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <SmartDisplay className="w-4 h-4 mr-1" />
                    Demo Mode
                  </span>
                  <span>•</span>
                  <span>Click X to close preview</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </section>
  );
};