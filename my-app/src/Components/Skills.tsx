import React from 'react';

interface Skill {
  name: string;
  level: string;
  icon?: string;
}

const skills: Skill[] = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3/Tailwind', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Git', level: 'Advanced' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    skill.level === 'Advanced'
                      ? 'bg-blue-600 w-4/5'
                      : 'bg-green-500 w-3/5'
                  }`}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 