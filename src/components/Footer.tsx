
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-primary rounded-md"></div>
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">&lt;/&gt;</span>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                DevConnect
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Connecting developers worldwide through open source contributions, analytics, and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/analytics" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Developer Analytics
                </Link>
              </li>
              <li>
                <Link to="/rankings" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Contribution Rankings
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link to="/freelancing" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Freelancing
                </Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Hackathons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs/documentation" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs/api-reference" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/docs/github-integration" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  GitHub Integration
                </Link>
              </li>
              <li>
                <Link to="/info/blog" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Blog & Updates
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/info/our-mission" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/info/privacy-policy" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/info/terms-of-service" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/info/contact-us" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} DevConnect. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for developers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
