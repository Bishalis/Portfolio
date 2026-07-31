import { motion } from "framer-motion";
import type { Project } from "../types";
import { useInView } from "react-intersection-observer";
import Ecommerce from "../assets/Ecommerce.png";
import tisacleaning from "../assets/tisacleaning.png";
import resumeAnalyser from "../assets/resumeAnalyser.png";
import { Title } from "../Components/Title";
import HoverBorderEffect from "../Components/HoverBorderEffect";
import { useState } from "react";

const projects: Project[] = [
  {
    title: "Professional Cleaning Services",
    description:
      "A professional cleaning services website that allows users to book cleaning appointments and manage their services.",
    image: tisacleaning,
    technologies: ["Nextjs", "Tailwind", "TypeScript", "Resend"],
    githubUrl: "https://github.com/Bishalis/cleaningCo",
    liveUrl: "https://www.tisacleaning.com.au/",
  },

  {
    title: "Resume Analyzer",
    description:
      "A resume analyzer that uses AI to analyze resumes and provide feedback on how to improve them with score.",
    image: resumeAnalyser,
    technologies: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/Bishalis/Resume-ai",
    liveUrl: "https://resume-661u9ni5d-bishalis-projects.vercel.app/",
  },

  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website with product listings, shopping cart, and checkout functionality.",
    image: Ecommerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/Bishalis/Ecommerce-App",
    liveUrl: "https://ecommerce-demo.com",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div className="card group relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <HoverBorderEffect />
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative overflow-hidden rounded-xl h-72 group">
          <img
            src={project.image}
            alt={project.title}
            className="absolute top-0 left-0 w-full transition-transform duration-[5000ms] ease-linear group-hover:-translate-y-[calc(100%-18rem)]"
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

  const [view, setView] = useState(false);

  const toggleViewAllProject = () => {
    setView(!view);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Title title="Featured Projects" className="left-auto top-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {view? (projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))) :(projects.slice(0, 2).map((project, index) => (
             <ProjectCard key={project.title} project={project} index={index} />
          )))}
        </div>
    
        <button
          onClick={toggleViewAllProject}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-blue-500 px-4 py-2 rounded-md"
        >
          {view ? "< Hide Projects />" :"`< View All Projects />"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
