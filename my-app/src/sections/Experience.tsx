import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Experience as ExperienceType } from "../types";

const experiences: ExperienceType[] = [
  {
    title: "Master of Software Engineering",
    company: "Charles Darwin University",
    period: "Present",
    location: "Darwin, Australia",
  },
  {
    title: "Bachelor of Information Technology",
    company: "Crown Institute of Higher Education",
    period: "2023-2026",
    location: "Sydney, Australia",
  },
  {
    title: "Higher Secondary Education (HSE)",
    company: "Bernhardt Secondary School",
    period: "2020-2022",
    location: "Kathmandu, Nepal",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Education
      </h3>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="relative pl-8 pb-8 last:pb-0"
          >
            <div className="absolute left-3 top-2 bottom-0 w-px bg-gray-300 dark:bg-gray-700 last:hidden"></div>

            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>

            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 text-xs font-semibold uppercase mb-2">
              {experience.period}
            </span>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-300">
              {experience.company}
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {experience.location}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;