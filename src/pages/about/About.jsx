/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Code,
  DesignServices,
  DataObject,
  School,
  Download,
  Article,
  DesignServicesTwoTone,
  Settings,
} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import image from "../../assets/images/ChatGPT Image Aug 16, 2025, 03_33_05 AM.png";
import { Link } from "react-router-dom";

export const About = () => {
  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState("pdf"); // 'pdf' or 'google'
  const [pdfUrl] = useState(
    "https://drive.google.com/file/d/157XtHzDIztiEqPKuT3QJ8Qtf_ZOjVHiH/view?usp=drive_link"
  ); // Replace with your actual PDF URL

  // Google Docs document ID (replace with your actual document ID)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openInGoogleDocs = () => {
    window.open(
      `https://drive.google.com/file/d/157XtHzDIztiEqPKuT3QJ8Qtf_ZOjVHiH/view?usp=drive_link`,
      "_blank"
    );
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "VC.pdf";
    link.click();
  };

  const skills = [
    {
      name: "Frontend Development",
      percent: 95,
      icon: <Code className="text-indigo-600" />,
      tech: ["React JS", "PostCSS", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      percent: 90,
      icon: <DataObject className="text-purple-600" />,
      tech: ["Node JS", "Express", "PHP"],
    },
    {
      name: "UI/UX Design",
      percent: 85,
      icon: <DesignServices className="text-violet-600" />,
      tech: ["Material UI", "Framer Motion", "Typography"],
    },
    {
      name: "Graphic Design",
      percent: 75,
      icon: <DesignServicesTwoTone className="text-blue-600" />,
      tech: ["Photoshop", "Illustrator"],
    },
    {
      name: "Computer Maintenance",
      percent: 85,
      icon: <Settings className="text-indigo-600" />,
      tech: ["Hard Ware", "Software", "Troubleshooting"],
    },
  ];

  return (
    <>
      <section className="w-full  md:w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* About Image */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <img
                  src={image}
                  alt=""
                  className="rounded-xl shadow-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <p className="text-indigo-600 font-medium mb-2 flex items-center">
                  <School className="mr-2" /> Learn About Me
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Full Stack{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    Web Developer
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  I'm a passionate developer with over a decade of experience
                  building modern web applications. My expertise spans the
                  entire development stack, from crafting beautiful user
                  interfaces to designing scalable backend architectures. I
                  specialize in JavaScript ecosystems and love solving complex
                  problems with clean, efficient code.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-8 w-full bg-gradient-to-l from-violet-300 to-indigo-300 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  My Skills
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mr-3">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600">{skill.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {skill.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleOpen}
                className="px-6 py-3 bg-gradient-to-r from-indigo-300 to-purple-400 text-white rounded-lg hover:from-indigo-200 hover:to-purple-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <Article className="mr-2" />
                View Full Resume
              </button>
            </div>
          </div>
        </div>

        {/* Resume Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="resume-modal-title"
          aria-describedby="resume-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "900px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "12px",
              outline: "none",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2
                id="resume-modal-title"
                className="text-2xl font-bold text-gray-800"
              >
                My Resume
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={downloadPdf}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center"
                >
                  <Download className="mr-2" />
                  Download PDF
                </button>
              </div>

              <div className="h-[70vh] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                {viewMode === "pdf" ? (
                  <>
                    <div className="view text-black flex justify-center items-center ">
                      <div className="fixed  z-50">
                        {/* Main floating container */}
                        <div className="relative group">
                          {/* Documentation direction arrow */}
                          <div className="absolute top-46 -right-4 transform rotate-12 hidden md:block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-24 w-24 text-blue-400 opacity-80"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                className="text-blue-600 animate-pulse"
                              />
                            </svg>
                            <p className="absolute top-8 right-12 text-sm font-bold text-blue-700">
                              Check Docs →
                            </p>
                          </div>

                          {/* Clickable info button */}
                          <Link
                            to={
                              "https://drive.google.com/file/d/157XtHzDIztiEqPKuT3QJ8Qtf_ZOjVHiH/view?usp=drive_link"
                            }
                            className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                            aria-label="Documentation Help"
                          >
                            {/* Information SVG icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            {/* Expanded tooltip */}
                            <div className="absolute right-16 w-64 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex items-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <div>
                                  <h3 className="font-bold text-blue-600 mb-1">
                                    Need Help?
                                  </h3>
                                  <p>
                                    Click this button to access the official
                                    Tailwind CSS documentation for detailed
                                    guides and examples.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://drive.google.com/file/d/157XtHzDIztiEqPKuT3QJ8Qtf_ZOjVHiH/view?usp=drive_link`}
                    width="100%"
                    height="100%"
                    title="Google Docs Resume"
                    style={{ border: "none" }}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <Button
                variant="outlined"
                onClick={openInGoogleDocs}
                startIcon={
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                    alt="Google Docs"
                    className="w-5 h-5"
                  />
                }
                sx={{
                  textTransform: "none",
                  color: "#4f46e5",
                  borderColor: "#4f46e5",
                  "&:hover": {
                    borderColor: "#4338ca",
                    backgroundColor: "rgba(79, 70, 229, 0.04)",
                  },
                }}
              >
                Open in Google Docs
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(to right, #4f46e5, #7c3aed)",
                  "&:hover": {
                    background: "linear-gradient(to right, #4338ca, #6d28d9)",
                  },
                }}
              >
                Close
              </Button>
            </div>
          </Box>
        </Modal>
      </section>
    </>
  );
};
