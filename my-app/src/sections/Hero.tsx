import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bishal Shahi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I build modern, responsive, and user-friendly web applications using cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 