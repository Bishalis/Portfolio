import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

const ProjectCard = ({ title, imageUrl, description }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          y: isHovered ? -100 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-sm text-gray-200 mt-1">{description}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 