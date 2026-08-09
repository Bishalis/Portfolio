import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Profile from "../assets/myProfile.jpg";
import { Title } from "../Components/Title";
import HoverBorderEffect from "../Components/HoverBorderEffect";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bishalshahi1/",
    icon: <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />,
  },
  {
    name: "Github",
    url: "https://github.com/dashboard",
    icon: <FaGithub className="h-4 w-4 text-gray-900 dark:text-white" />,
  },
  {
    name: "Email",
    url: "mailto:shahibishal786526@gmail.com",
    icon: <MdEmail className="h-4 w-4 text-red-500" />,
  },
];

const Hero = () => {
  const titles = ["Full Stack Developer", "Software Engineer"];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Bishal Shahi
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mb-8 h-12 flex items-center justify-center lg:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[currentTitle]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="absolute"
                >
                  {titles[currentTitle]}
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive, and user-friendly web applications
              using cutting-edge technologies .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[450px] shrink-0 pt-10">
            <Title title="Profile" />

            <div
              className="
    group
    relative
    overflow-hidden
    rounded-xl
    bg-white
    dark:bg-gray-800
    px-6
    pt-10
    pb-6
    flex
    flex-col
    items-center
    text-center
    cursor-pointer
    shadow-lg
    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
  "
            >
              <HoverBorderEffect />

              {/* Profile Image */}
              <div className="relative group">
                <div
                  className="
      absolute
      -inset-1
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-indigo-600
      opacity-0
      blur-sm
      transition-all
      duration-500
      group-hover/image:opacity-100
      group-hoverimage:scale-110
    "
                />

                <img
                  src={Profile}
                  alt="Bishal Shahi"
                  className="
      relative
      w-32 h-32 sm:w-40 sm:h-40
      rounded-full
      object-cover
      z-10
      border-4
      border-white
      dark:border-gray-800
      shadow-lg
      transition-all
      duration-500
      group-hover:scale-105
    "
                />
              </div>

              {/* Name */}
              <h3
                className="
      relative
      z-10
      mt-4
      text-lg
      font-bold
      text-gray-900
      dark:text-white
      transition-colors
      duration-300
      group-hover:text-blue-500
    "
              >
                Bishal Shahi
              </h3>

              {/* Role */}
              <p
                className="
      relative
      z-10
      mt-1
      mb-5
      text-sm
      text-gray-600
      dark:text-gray-400
    "
              >
                Full Stack Developer
              </p>

              {/* Social Links */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex
          items-center
          gap-1.5
          text-sm
          text-gray-700
          dark:text-gray-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:text-blue-500
        "
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <a href="https://drive.google.com/file/d/1N_XVFP7A3Qp6WlNiBR51KYe14uucPWEq/view?usp=sharing" target="_blank" rel="noopener noreferrer">

                <div
                  className="
      relative
      z-10
      overflow-hidden
      w-full
      rounded-lg
      border
      border-gray-300
      dark:border-gray-600
      py-2.5
      px-4
      text-sm
      font-medium
      text-gray-800
      dark:text-gray-200
      bg-gray-100
      dark:bg-gray-700
      transition-all
      duration-300
      hover:border-blue-500
      hover:text-blue-500
      hover:bg-white
      dark:hover:bg-gray-800
    "
                >
                  View Resume
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
