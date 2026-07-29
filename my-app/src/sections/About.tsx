import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Title } from "../Components/Title";
import HoverBorderEffect from "../Components/HoverBorderEffect";
import Experience from "./Experience";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
  ];

  return (
    <section id="about" className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative flex justify-center items-center">
            <Title title="About Me" className="left-0" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in
              both frontend and backend technologies. With a keen eye for design
              and a commitment to writing clean, efficient code, I strive to
              create seamless user experiences that make a difference.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beyond the screen, I have a love for football, which keeps me
              active and sharp both mentally and physically. I’m currently
              expanding my skillset by diving into the world of Artificial
              Intelligence, exploring how it can be integrated efficiently into
              real-world applications to improve user experiences and optimize
              performance. Whether it’s writing clean code or learning how AI
              can enhance development workflows, I’m always driven by curiosity
              and a desire to grow.
            </p>
          </motion.div>

          <Experience />
        </div>
      </div>
    </section>
  );
};

export default About;
