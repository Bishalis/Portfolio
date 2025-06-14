import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Developed and maintained full-stack applications, implemented CI/CD pipelines, and optimized application performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Created responsive web applications and collaborated with designers to implement pixel-perfect UI components.',
    technologies: ['React', 'JavaScript', 'SASS', 'Webpack'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              <div className="flex flex-col sm:flex-row items-start mb-2 group-last:before:hidden before:absolute before:left-3 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 dark:before:bg-gray-700 before:ml-0.5 before:top-8 before:group-last:h-[calc(100%-4rem)]">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                  {experience.period}
                </time>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">
                {experience.company}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 