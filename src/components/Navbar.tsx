import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Packages', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-[#B5FF6D] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white group-hover:text-[#B5FF6D] transition-colors duration-300">
                WEBLANCER
              </h1>
              <p className="text-[#8A9A5B] text-xs">Digital Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-[#B5FF6D]'
                    : 'text-white hover:text-[#B5FF6D]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5FF6D] animate-pulse"></div>
                )}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#B5FF6D] transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-semibold transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-[#B5FF6D]'
                      : 'text-white hover:text-[#B5FF6D]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] text-center transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;