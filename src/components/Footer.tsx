import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-mono font-bold text-primary-600 dark:text-primary-400">
              Marcos Mwaba
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/marcosmwaba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/marcosmwaba-825219280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-300">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Peter Mwaba. Marcos Enterprise  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}