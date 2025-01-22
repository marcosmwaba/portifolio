import React from 'react';
import { Code2, Database, Globe, Terminal, Coffee, Download, EyeIcon } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern CSS frameworks',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Python, Django, and Java',
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'System Administration',
      description: 'Linux expert with advanced Bash scripting skills',
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Java Development',
      description: 'Desktop application development with JavaFX and Maven build automation',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Architecture',
      description: 'Experienced in designing scalable web applications',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=1000"
              alt="Profile"
              className="rounded-lg shadow-xl mb-6"
            />
            <div className="flex space-x-4">
                  <a
                  href="src/peter-mwaba-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 gap-2"
                  >
                  <EyeIcon className="w-5 h-5" />
                  View CV
                  </a>
              <a
              href="src/peter-mwaba-cv.pdf"
              download
              className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 gap-2"
              >
              <Download className="w-5 h-5" />
              Download CV
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate software developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create scalable
              and user-friendly solutions that solve real-world problems. My expertise spans across
              multiple technologies and platforms, from web development to system administration.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-dark-200 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}