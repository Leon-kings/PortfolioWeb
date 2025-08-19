/* eslint-disable no-unused-vars */
import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DownloadIcon from "@mui/icons-material/Download";
import { ScreenLockPortrait } from "@mui/icons-material";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      side: "left",
      date: "2024 - 2025",
      title: "Junior Full Stack Developer",
      company: "TechInnovate, KLab, Kacyiru, Kigali",
      description:
        "KLab provides an open space for IT entrepreneurs to collaborate and innovate in Kigali, Rwanda.",
      achievements: [
        "Reduced API response time by 65% through optimization",
        "Web development through JS frameworks",
        "Implemented automated testing reducing bugs by 40%",
      ],
      icon: <CodeIcon />,
    },
    {
      id: 2,
      side: "right",
      date: "2024 - 2025",
      title: "Web Developer Responsive",
      company: "KLab, Kacyiru, Rwanda",
      description:
        "Developed and maintained client websites. Implemented Tailwinds CSS and integrated PostCSS to provide better responsive.",
      achievements: [
        "Delivered clearly and avoid mulresponsive on big project's components.",
        "Build responsive web pages.",
        "Implemented accessibility standards",
      ],
      icon: <ScreenLockPortrait />,
    },
    {
      id: 3,
      side: "left",
      date: "Sept, 2024 - Nov, 2024",
      title: "Web Developer Basics",
      company: "Klab, Online System, Kigali",
      description:
        "Developed and maintained client websites. Implemented components using basic knowledge on HTML , CSS and JS to imprement better responsive web app.",
      achievements: [
        "Reduced page load time by 50%",
        "Implemented accessibility standards",
      ],
      icon: <BusinessCenterIcon />,
    },

    {
      id: 4,
      side: "right",
      date: "2023 - 2024",
      title: "Frontend Lead",
      company: "TechCollege, Kigali International Arts College, Remera, Kigali",
      description:
        "Built responsive web applications with Bootstrap. Collaborated with UX team to implement design systems.",
      achievements: [
        "Developed component and implemented into Projects",
        "Improved Lighthouse designing scores",
        "Introduced state management best practices",
      ],
      icon: <DesignServicesIcon />,
    },

    {
      id: 5,
      side: "left",
      date: "2024",
      title: "Computer Foundermentals",
      company: "Online Sessions",
      description:
        "Perform a Computer foundermentals exams and earn Certificates.",
      achievements: [
        "Earn Silver Certificate",
        "Earn Gold Certificates",
        "Earn Diamonds Certificates",
      ],
      icon: <SchoolIcon />,
    },
  ];

  const education = [
    {
      degree: "A2, Computer Science",
      university: "GS Kigeme A",
      year: "2022",
      courses: [
        "Advanced Algorithms",
        "Computer Maintenance",
        "Computer Programmings",
        "Machine Learning",
      ],
    },
    {
      degree: "Certificate ,Software Developments",
      university: "Kigali International Arts Colleges",
      year: "2025",
      courses: [
        "Data Structures",
        "Web Development",
        "Database Systems",
        "Material UI",
        "Animated Pages",
        "Nodemail",
        "MongoDB",
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 font-medium mb-2 flex items-center justify-center">
            <WorkHistoryIcon className="mr-2" /> My Resume
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Experience
            </span>
          </h2>
          <p className="text-gray-600">
            A decade of building digital products and leading engineering teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-8 md:w-1/2 ${
                exp.side === "left"
                  ? "md:mr-auto md:pr-8"
                  : "md:ml-auto md:pl-8"
              }`}
              data-aos={`fade-${exp.side}`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute top-4 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white items-center justify-center z-10"
                style={{
                  left: exp.side === "left" ? "calc(100% - 3px)" : "-9px",
                }}
              >
                {exp.icon}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 font-medium mb-1">
                  {exp.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-gray-600 mb-3">{exp.company}</h4>
                <p className="text-gray-700 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">
                    Key Achievements:
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
            <SchoolIcon className="text-indigo-600 mr-3" /> Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-800">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 mb-2">
                  {edu.university} · {edu.year}
                </p>

                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 mb-2">
                    Relevant Courses:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
