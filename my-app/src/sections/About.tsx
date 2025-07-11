import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
              With a keen eye for design and a commitment to writing clean, efficient code, I strive to create
              seamless user experiences that make a difference.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            Beyond the screen, I have a love for football, which keeps me active and sharp both mentally and physically. I’m currently expanding my skillset by diving into the world of Artificial Intelligence, exploring how it can be integrated efficiently into real-world applications to improve user experiences and optimize performance. Whether it’s writing clean code or learning how AI can enhance development workflows, I’m always driven by curiosity and a desire to grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 