import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../utils/skills";
import {
  SiPython,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiSpacy,
  SiLangchain,
  SiHuggingface,
  SiMlflow,
  SiMeta,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { Title } from "../Components/Title";
import HoverBorderEffect from "../Components/HoverBorderEffect";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aiSkills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "SpaCy", icon: SiSpacy, color: "#09A3D5" },
    { name: "NLTK", icon: SiPython, color: "#306998" },
    { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "FAISS", icon: SiMeta, color: "#0467DF" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <Title title="Technologies Worked On" className="right-auto top-5"/>
        {/* </motion.div> */}

        {/* AI/ML Category */}
        <div className="relative overflow-visible group mt-12 rounded-lg shadow-lg border border-gray-200 bg-gray-50 px-8 pt-16 pb-10  dark:border-gray-700 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <HoverBorderEffect />
          {/* Floating Title */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-xl border border-gray-200 bg-white px-8 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <h3 className="whitespace-nowrap text-xl font-bold text-gray-900 dark:text-white z-20">
                Machine Learning, AI & Agentic Frameworks
              </h3>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {aiSkills.map((skill, index) => {
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
