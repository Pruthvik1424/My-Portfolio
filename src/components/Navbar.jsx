import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-40 transition-all duration-300 
        ${isScrolled
          ? 'backdrop-blur-md bg-white/10 border-white/10'
          : 'bg-transparent border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-300 cursor-pointer">
          Mr. P K
        </h2>

        <div className="flex items-center gap-4 text-2xl cursor-pointer">
          <a
            href="https://www.linkedin.com/in/pruthvikk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Pruthvik1424"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:pruthvik.kumaraswamy14@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
