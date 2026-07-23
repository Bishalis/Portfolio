import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Project } from '../types';
import Ecommerce from '../assets/Ecommerce.png';
import Weather from '../assets/Weather.png';
import Bookstore from '../assets/Bookstore.png';
import { Title } from '../Components/Title';
import HoverBorderEffect from '../Components/HoverBorderEffect';

const projects: Project[] = [
  {
    title: 'CWB E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: Ecommerce,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/Bishalis/updated-Ecommerce',
    liveUrl: 'https://updated-ecommerce-frontend.onrender.com/login',
  },
  {
    title: 'CWB Book Store',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: Weather,
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Bishalis/BookStore',
    liveUrl: 'https://taskmanager-demo.com',
  },

  {
    title: 'CWB Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data using external APIs.',
    image: Bookstore,
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/Bishalis/Portfolio',
    liveUrl: 'https://weather-demo.com',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="card group relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    >
         <HoverBorderEffect/>
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        animate={ {opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
      </motion.div>

      
    </div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Title title="FeaturedProjects" className="left-auto top-10"/>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 