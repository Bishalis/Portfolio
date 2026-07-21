import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Logo from '../assets/Logo.png';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bishalshahi1/',
    icon: <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />,
  },
  {
    name: 'Github',
    url: 'https://github.com/dashboard',
    icon: <FaGithub className="h-4 w-4 text-gray-900 dark:text-white" />,
  },
  {
    name: 'Email',
    url: 'mailto:shahibishal786526@gmail.com',
    icon: <MdEmail className="h-4 w-4 text-red-500" />,
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">Bishal Shahi</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive, and user-friendly web applications using
              cutting-edge technologies.
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

          <div className="relative w-full max-w-[400px] shrink-0 pt-10">
            <div className="absolute -top-1 left-4 z-10 bg-white dark:bg-gray-800  px-3 py-1.5 rounded-md shadow-sm border-l-4 border-blue-500 hover:border-b-4 hover:border-blue-500 transition-all duration-300">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Personal details
              </span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg px-6 pt-10 pb-6 flex flex-col items-center text-center">
              <img
                src={Logo}
                alt="Bishal Shahi"
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4  hover:bg-blue-500 hover:scale-110 transition-all duration-300"
              />

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Bishal Shahi
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-5">
                Full Stack Developer
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-800 dark:text-gray-200 hover:opacity-70 transition-opacity"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full py-2.5 px-4 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                View Resume
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
