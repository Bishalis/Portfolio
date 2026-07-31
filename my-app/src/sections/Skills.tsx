import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { Title } from "../Components/Title";
import HoverBorderEffect from "../Components/HoverBorderEffect";

const Skills = () => {

const softwareSkills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <Title title="Technologies Worked On" className="right-auto top-5"/>
        {/* </motion.div> */}

        {/* Web dev category */}
        <div className="relative overflow-visible group mt-12 rounded-lg shadow-lg border border-gray-200 bg-gray-50 px-8 pt-16 pb-10  dark:border-gray-700 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <HoverBorderEffect />
          {/* Floating Title */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-xl border border-gray-200 bg-white px-8 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <h3 className="whitespace-nowrap text-xl font-bold text-gray-900 dark:text-white z-20">
                Web Development technologies
              </h3>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {softwareSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex h-24 items-center justify-center gap-4 rounded-2xl border border-transparent bg-white px-5 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:bg-gray-900"
                >
                  <Icon
                    className="text-4xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />

                  <span className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
