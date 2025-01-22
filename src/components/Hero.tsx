import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const name = useTypewriter({
    words: ["Hi, I'm Peter Mwaba"],
    typingSpeed: 100,
    loop: false,
  });

  const role = useTypewriter({
    words: [
      "Full Stack Developer",
      "Software Engineer",
      "Teacher"
    ],
    typingSpeed: 80,
    loop: true,
  });

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white dark:from-dark-200 dark:to-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 min-h-[4rem]">
            <span className="text-primary-600 dark:text-primary-400">{name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 min-h-[2.5rem]">
            {role}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300 animate-bounce-slow"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-dark-200 transition-colors duration-300 animate-blip"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}