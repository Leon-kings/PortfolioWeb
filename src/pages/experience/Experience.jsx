/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DownloadIcon from "@mui/icons-material/Download";
import { 
  ScreenLockPortrait,
  CalendarMonth,
  LocationOn,
  Verified,
  EmojiEvents,
  TrendingUp,
  Timeline,
  Rocket,
  Lightbulb,
  MenuBook,
  Computer,
  NetworkCheck,
  Storage,
  Brush,
  GitHub,
  LinkedIn,
  Twitter,
  InsertDriveFile,
  PictureAsPdf,
  Visibility,
  CloudDownload,
  OpenInNew,
  Description,
  Print,
  Share,
  Bookmark,
  BookmarkBorder,
  CheckCircle,
  Stars,
  WorkspacePremium,
  Celebration,
  ArrowForward,
  ArrowDownward,
  ExpandMore,
  ExpandLess,
  Close,
} from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [expandedAchievements, setExpandedAchievements] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [showCertificates, setShowCertificates] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Calculate years of experience from 2023
  const getYearsOfExperience = () => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    let years = currentYear - startYear;
    // Adjust for partial year
    if (currentMonth < 8) { // Before September
      years = years - 1 + 0.5;
    }
    return years >= 1 ? `${Math.floor(years)}+` : "1+";
  };

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience-stats');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setAnimatedStats(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAchievements = (id) => {
    setExpandedAchievements(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  const experiences = [
    {
      id: 1,
      side: "left",
      date: "2024 - Present",
      title: "Junior Full Stack Developer",
      company: "TechInnovate",
      location: "KLab, Kacyiru, Kigali",
      description:
        "Working at KLab - an open space for IT entrepreneurs to collaborate and innovate in Kigali, Rwanda. Leading full-stack development initiatives and mentoring junior developers.",
      achievements: [
        "Reduced API response time by 65% through query optimization and caching strategies",
        "Developed 10+ responsive web applications using React.js and Node.js",
        "Implemented automated testing suite with Jest, reducing production bugs by 40%",
        "Integrated CI/CD pipeline reducing deployment time by 70%",
        "Mentored 3 junior developers in modern web development practices",
      ],
      icon: <CodeIcon />,
      color: "from-indigo-500 to-blue-600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Jest"],
      achievements_count: 5,
      type: "work",
    },
    {
      id: 2,
      side: "right",
      date: "2024 - 2025",
      title: "Web Developer (Responsive Design)",
      company: "KLab",
      location: "Kacyiru, Rwanda",
      description:
        "Specialized in creating pixel-perfect, responsive web interfaces. Implemented modern CSS frameworks and ensured cross-browser compatibility.",
      achievements: [
        "Built 15+ responsive websites with mobile-first approach",
        "Implemented Tailwind CSS and PostCSS, improving development speed by 50%",
        "Achieved 98% Lighthouse scores for mobile responsiveness",
        "Created reusable component library with Storybook",
        "Conducted workshops on responsive design for 20+ developers",
      ],
      icon: <ScreenLockPortrait />,
      color: "from-purple-500 to-pink-600",
      technologies: ["Tailwind CSS", "PostCSS", "Figma", "Storybook", "Sass"],
      achievements_count: 5,
      type: "work",
    },
    {
      id: 3,
      side: "left",
      date: "Sept 2024 - Nov 2024",
      title: "Web Developer (Fundamentals)",
      company: "KLab Online System",
      location: "Remote, Kigali",
      description:
        "Started web development journey by mastering core technologies. Built foundational projects and contributed to open-source.",
      achievements: [
        "Reduced page load time by 50% through image optimization and lazy loading",
        "Implemented WCAG 2.1 accessibility standards achieving AA compliance",
        "Created 5 portfolio projects using vanilla HTML, CSS, and JavaScript",
        "Won 'Best Beginner Project' award at KLab hackathon",
        "Contributed to 3 open-source repositories",
      ],
      icon: <BusinessCenterIcon />,
      color: "from-green-500 to-emerald-600",
      technologies: ["HTML5", "CSS3", "JavaScript", "Accessibility", "SEO"],
      achievements_count: 5,
      type: "work",
    },
    {
      id: 4,
      side: "right",
      date: "2023 - 2024",
      title: "Frontend Lead",
      company: "TechCollege",
      location: "KIAC, Remera, Kigali",
      description:
        "Led frontend development team at Kigali International Arts College. Established coding standards and mentored student developers.",
      achievements: [
        "Led team of 5 developers, delivering 8 client projects on schedule",
        "Improved Lighthouse scores from 65 to 95+ across all metrics",
        "Established state management patterns with Redux Toolkit",
        "Implemented design system used across 12+ applications",
        "Conducted code reviews and mentored 4 junior developers",
      ],
      icon: <DesignServicesIcon />,
      color: "from-orange-500 to-red-600",
      technologies: ["Redux", "TypeScript", "Material-UI", "Framer Motion", "Jira"],
      achievements_count: 5,
      type: "work",
    },
    {
      id: 5,
      side: "left",
      date: "2024",
      title: "Computer Fundamentals Certification",
      company: "Technology Channel",
      location: "Online",
      description:
        "Comprehensive certification program covering computer hardware, software, networking, and programming fundamentals.",
      achievements: [
        "Earned Silver, Gold, and Diamond certificates with 95%+ scores",
        "Completed 50+ hands-on labs and projects",
        "Mastered computer hardware assembly and troubleshooting",
        "Configured complex network topologies",
        "Achieved top 1% in final certification exam",
      ],
      icon: <SchoolIcon />,
      color: "from-cyan-500 to-teal-600",
      technologies: ["Hardware", "Networking", "OS", "Troubleshooting", "Security"],
      achievements_count: 5,
      type: "education",
    },
  ];

  const education = [
    {
      degree: "A2, Computer Science",
      university: "GS Kigeme A",
      location: "Rwanda",
      year: "2022",
      grade: "Distinction",
      achievements: "Top 5% of graduating class",
      courses: [
        "Advanced Algorithms",
        "Computer Maintenance",
        "Computer Programming (Java, Python)",
        "Machine Learning Fundamentals",
        "Database Design",
        "Network Security",
      ],
      icon: <SchoolIcon />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      degree: "Certificate, Software Development",
      university: "Kigali International Arts College (KIAC)",
      location: "Remera, Kigali",
      year: "2025",
      grade: "First Class Honors",
      achievements: "Project of the Year Award",
      courses: [
        "Data Structures & Algorithms",
        "Advanced Web Development",
        "PHP & Laravel",
        "Java Enterprise Edition",
        "Database Systems (MySQL, PostgreSQL)",
        "UI/UX Design Principles",
        "Motion Design with Framer",
      ],
      icon: <WorkspacePremium />,
      color: "from-purple-500 to-pink-600",
    },
    {
      degree: "Certificate, Software Development",
      university: "KLab (Knowledge Labs)",
      location: "Kigali, Rwanda",
      year: "2025",
      grade: "Excellence Award",
      achievements: "Best Capstone Project",
      courses: [
        "Modern Web Development",
        "NoSQL Databases (MongoDB)",
        "Material UI & Component Libraries",
        "Framer Motion & Animations",
        "Nodemailer & Email Systems",
        "RESTful API Design",
        "GraphQL Fundamentals",
      ],
      icon: <Rocket />,
      color: "from-green-500 to-teal-600",
    },
    {
      degree: "Certificate, Computer Fundamentals",
      university: "Technology Channel",
      location: "Online",
      year: "2025",
      grade: "Diamond Level",
      achievements: "Perfect Score in Hardware Module",
      courses: [
        "Computer Hardware & Assembly",
        "System Maintenance & Repair",
        "Network Administration",
        "IT Security Fundamentals",
        "Cloud Computing Basics",
        "Programming Logic",
        "Database Fundamentals",
      ],
      icon: <Computer />,
      color: "from-orange-500 to-red-600",
    },
  ];

  const certificates = [
    {
      name: "Frontend Developer",
      issuer: "KIAC",
      year: "2024",
      credential: "ABC123XYZ",
      url: "https://drive.google.com/file/d/1rtzOeXMkYCx1BFZ68mqZtvwe6F6ZbVF2/view?usp=sharing"
    },
    {
      name: "Silver Certificate",
      issuer: "Google",
      year: "2023",
      credential: "DEF456UVW",
      url: "https://drive.google.com/file/d/1XsjBnc7TfQO6xsCI5Jk6V3id7Zz25hj2/view?usp=sharing"
    },
    {
      name: "KLab Certification",
      issuer: "Knowledge Lab",
      year: "2024",
      credential: "GHI789RST",
      url: "https://drive.google.com/file/d/1XsjBnc7TfQO6xsCI5Jk6V3id7Zz25hj2/view?usp=sharing"
    },
    {
      name: "Advanced Web Development",
      issuer: "TechInnovate",
      year: "2024",
      credential: "JKL012MNO",
      url: "https://drive.google.com/file/d/1rtzOeXMkYCx1BFZ68mqZtvwe6F6ZbVF2/view?usp=sharing"
    }
  ];

  const stats = [
    { 
      icon: <WorkHistoryIcon />, 
      value: getYearsOfExperience(), 
      label: "Years Experience",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      icon: <CodeIcon />, 
      value: "20+", 
      label: "Projects Completed",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <EmojiEvents />, 
      value: "4", 
      label: "Certifications",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: <Stars />, 
      value: "5+", 
      label: "Technologies",
      color: "from-green-500 to-teal-500"
    },
  ];

  const filteredExperiences = activeFilter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter);

  return (
    <>
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 right-40 w-96 h-96 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative z-10">
          
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
              <WorkHistoryIcon className="text-4xl text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Crafting digital experiences with passion and precision since 2023
            </p>
          </motion.div>

          {/* Stats Cards - No hover background */}
          <div id="experience-stats" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-slate-700 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div>
                      <motion.div 
                        className="text-3xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={animatedStats ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      >
                        {animatedStats ? stat.value : "0"}
                      </motion.div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-slate-800 rounded-2xl shadow-inner">
              {["all", "work", "education"].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl font-medium capitalize transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {filter === "all" ? "All Experience" : filter}
                  {filter === "work" && " 💼"}
                  {filter === "education" && " 🎓"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full"
              style={{ boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
            ></motion.div>

            <AnimatePresence>
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:w-1/2 ${
                    exp.side === "left"
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Timeline dot with pulse animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute top-8 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 items-center justify-center z-20 shadow-lg"
                    style={{
                      left: exp.side === "left" ? "calc(100% - 12px)" : "-16px",
                    }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </motion.div>

                  {/* Experience Card - No hover background */}
                  <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-500">
                    
                    {/* Date Badge */}
                    <div className={`absolute -top-4 left-6 px-4 py-2 bg-gradient-to-r ${exp.color} rounded-lg shadow-lg`}>
                      <span className="text-sm font-semibold text-white flex items-center">
                        <CalendarMonth className="mr-1 text-sm" />
                        {exp.date}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg flex items-center justify-center text-white transform rotate-6`}>
                      {exp.icon}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-12">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <LocationOn className="mr-1 text-sm" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            className={`bg-gradient-to-r ${exp.color} bg-opacity-10 text-gray-800 dark:text-white dark:bg-opacity-20 font-medium`}
                          />
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <button
                          onClick={() => toggleAchievements(exp.id)}
                          className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <EmojiEvents className="mr-2 text-lg" />
                          Key Achievements ({exp.achievements_count})
                          {expandedAchievements[exp.id] ? (
                            <ExpandLess className="ml-2" />
                          ) : (
                            <ExpandMore className="ml-2" />
                          )}
                        </button>

                        <AnimatePresence>
                          {expandedAchievements[exp.id] && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-2 pl-2 overflow-hidden"
                            >
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start text-gray-600 dark:text-gray-400"
                                >
                                  <CheckCircle className="mr-2 text-green-500 text-sm mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Education Section - No hover background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <SchoolIcon className="text-4xl text-indigo-600 dark:text-indigo-400 mr-3" />
                Academic & Professional Education
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Continuous learning journey in technology and development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative h-full bg-white dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-500">
                    
                    {/* Header with gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${edu.color} rounded-t-2xl`}></div>
                    
                    <div className="mt-4 text-center">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${edu.color} rounded-xl shadow-lg mb-4`}>
                        <div className="text-white text-2xl">
                          {edu.icon}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2">
                        <LocationOn className="mr-1 text-sm" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {edu.university}
                      </p>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <Badge
                          badgeContent={edu.year}
                          color="primary"
                          className="w-full"
                        >
                          <Chip
                            icon={<Verified />}
                            label={edu.grade}
                            size="small"
                            className={`bg-gradient-to-r ${edu.color} bg-opacity-10 text-gray-800 dark:text-white font-medium`}
                          />
                        </Badge>
                      </div>

                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                        {edu.achievements}
                      </p>

                      <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                        <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                          Completed Courses:
                        </h5>
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {edu.courses.slice(0, 5).map((course, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                          {edu.courses.length > 5 && (
                            <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                              +{edu.courses.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Section - Single View Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <button
                onClick={() => setShowCertificates(!showCertificates)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <WorkspacePremium className="mr-2" />
                View Professional Certificates
                {showCertificates ? <ExpandLess className="ml-2" /> : <ExpandMore className="ml-2" />}
              </button>
            </div>

            <AnimatePresence>
              {showCertificates && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-500 hover:shadow-2xl">
                          <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                              <WorkspacePremium className="text-white text-2xl" />
                            </div>
                            <Chip
                              label={cert.year}
                              size="small"
                              className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                            />
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {cert.name}
                          </h4>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {cert.issuer}
                          </p>
                          
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                            Credential ID: {cert.credential}
                          </p>
                          
                          {/* Single View Button - Opens Certificate in Modal */}
                          <Tooltip title="View Certificate in Modal" arrow>
                            <Button
                              variant="contained"
                              size="large"
                              fullWidth
                              onClick={() => openCertificateModal(cert)}
                              startIcon={<Visibility />}
                              sx={{
                                textTransform: "none",
                                background: "linear-gradient(to top, #4f46e5, #6366f1)",
                                color: "white",
                                py: 1.5,
                                "&:hover": {
                                  background: "linear-gradient(to top, #4338ca, #4f46e5)",
                                  transform: "scale(1.02)",
                                },
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.3)",
                              }}
                            >
                              View Certificate
                            </Button>
                          </Tooltip>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Google Drive Certificate Modal - Opens PDF in Modal */}
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            bgcolor: 'background.paper',
            boxShadow: 24,
            position: 'relative',
            height: '90vh',
          }
        }}
      >
        <DialogTitle sx={{ 
          m: 0, 
          p: 2.5, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(to right, #f9fafb, #ffffff)',
          dark: {
            background: 'linear-gradient(to right, #1f2937, #111827)',
          }
        }}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar sx={{ 
              bgcolor: '#4f46e5', 
              width: 32, 
              height: 32 
            }}>
              <PictureAsPdf sx={{ fontSize: 18 }} />
            </Avatar>
            <Box>
              <span className="font-semibold text-gray-900 dark:text-white text-lg">
                {selectedCertificate?.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                • {selectedCertificate?.issuer}
              </span>
            </Box>
          </Box>
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              color: 'grey.500',
              '&:hover': {
                color: 'grey.700',
                backgroundColor: 'rgba(0,0,0,0.04)',
              }
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, height: 'calc(90vh - 70px)' }}>
          {selectedCertificate && (
            <iframe
              src={`${selectedCertificate.url.replace('/view', '/preview')}`}
              width="100%"
              height="100%"
              title={selectedCertificate.name}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              style={{ border: 'none' }}
            />
          )}
        </DialogContent>
      </Dialog>

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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};