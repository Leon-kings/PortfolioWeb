/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Web,
  PhoneAndroid,
  SportsEsports,
  ExpandMore,
  Close,
  GitHub,
  OpenInNew,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: "*", name: "All", icon: <ExpandMore /> },
    { id: "web", name: "Web Design", icon: <Web /> },
    { id: "mobile", name: "Mobile Apps", icon: <PhoneAndroid /> },
    { id: "game", name: "Game Dev", icon: <SportsEsports /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern eCommerce Platform",
      category: "web",
      image:
        "https://www.shutterstock.com/image-photo/singapore-november-06-2023-interior-600nw-2408572559.jpg",
      description:
        "Hexalio is your shopping destination for fashion, home, beauty, kids' clothes and more. Browse the latest collections and find quality pieces at affordable ...",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      links: {
        live: "https://hexalio.vercel.app/",
        code: "https://github.com/Leon-kings/Hexalios",
      },
    },
    {
      id: 2,
      title: "Hotels bookings",
      category: "web",
      image:
        "https://www.ca.kayak.com/rimg/dimg/dynamic/186/2023/08/295ffd3a54bd51fc33810ce59382d1da.webp",
      description:
        "Browse Hotels · Mövenpick Kigali (Opening September 2025) · Mantis Kivu Queen uBuranga · Mantis EPIC Hotel & Suites · Mantis Akagera Game Lodge · Mantis Kivu ",
      technologies: ["React JS", "axios", "Node JS", "MongoDB", "Stripe"],
      links: {
        live: "https://ld-hotels.vercel.app",
        code: "https://github.com/Leon-kings/Hotels",
      },
    },
    {
      id: 3,
      title: "Internet Speed Monitor",
      category: "Mobile",
      image:
        "https://i.pcmag.com/imagery/articles/03xdeDG4m4n0gJG3CbFNIgm-17..v1661444591.png",
      description:
        "How fast is your download speed? In seconds, ISP's simple Internet speed test will estimate your ISP speed",
      technologies: ["React", "JS", "Tailwinds"],
      links: {
        live: "https://word-game.example.com",
        code: "https://github.com/Leon-kings/ISP-Tests",
      },
    },
    {
      id: 4,
      title: "Camera Home Safety",
      category: "web",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/11/467259570/KS/GL/VW/211422720/oob-automation-security-and-surveillance.jpg",
      description:
        "From wireless surveillance systems to smart home cameras, our range offers reliable and high-quality options to keep your home or business safe and secure.",
      technologies: ["React JS", "Node JS", "Express", "MongoDB", "Nodemailer"],
      links: {
        live: "https://home-safety.vercel.app",
        code: "https://github.com/Leon-kings/CamSafety",
      },
    },
    {
      id: 5,
      title: "Coffee Shop App",
      category: "Web",
      image:
        "https://cdn.shopify.com/s/files/1/0491/2165/6981/files/Eco-Friendly_and_Sustainable_480x480.webp?v=1733402305",
      description:
        "This is probably Rwanda's most famous coffee shop with two branches in Kigali. It is billed as a social enterprise, supporting women coffee growers.",
      technologies: ["React JS", "Node JS", "Express", "MongoDB", "Nodemailer"],
      links: {
        live: "https://coffee-app-six-delta.vercel.app",
        code: "https://github.com/Leon-kings/coffee-app",
      },
    },
    {
      id: 6,
      title: "Restaurants",
      category: "Web",
      image:
        "https://images.ctfassets.net/trvmqu12jq2l/6FV4Opt7wUyR91t2FXyOIr/f32972fce10fc87585e831b334ea17ef/header.jpg?q=70&w=1208&h=1080&f=faces&fit=fill",
      description:
        "Experience our Afro fusion cuisine at the boho restaurant, offering stunning views, laid-back vibes, and a perfect setting for your next business lunch.",
      technologies: ["React JS", "Node JS", "Express", "MongoDB", "Nodemailer"],
      links: {
        live: "https://restorantapp.vercel.app",
        code: "https://github.com/Leon-kings/Restorant",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-indigo-600 font-medium mb-2">My Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Selected{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-600">
            A collection of my best work across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 flex items-center transition-colors duration-200 ${
                activeFilter === filter.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {project.category.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
                >
                  <Close />
                </button>

                {/* Project Image */}
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {selectedProject.category.toUpperCase()}
                    </span>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.links.live && (
                      <button
                      
                        onClick={() => {
                          const newWindow = window.open("", "_blank");
                          newWindow.document.write(`
      <!DOCTYPE html>
      <html class="h-full">
      <head>
        <title>LD</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="h-full flex flex-col">
        <div class="bg-indigo-600 p-2 flex justify-between items-center">
          <span class="text-white font-medium">LD Trial space </span>
          <button onclick="window.close()" class="text-red-500 hover:text-gray-200 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <iframe src="${selectedProject.links.live}" class="flex-1 w-full border-0" title="Demo"></iframe>
      </body>
      </html>
    `);
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-200 to-purple-300  rounded-lg  flex items-center transition-colors duration-200"
                      >
                        <OpenInNew className="mr-2" /> Live Demo
                      </button>
                    )}
                    {selectedProject.links.code && (
                      <Link
                        to={selectedProject.links.code}
                        className="px-4 py-2 border bg-gradient-to-r from-indigo-200 to-purple-400 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHub className="mr-2" /> View Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
