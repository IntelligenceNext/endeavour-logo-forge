
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo 
              firstText="Endeavour" 
              secondText="sciences" 
              firstColor="#FF6B00" 
              secondColor="#5DC400" 
              fontSize={28} 
              triangleColor="#FF6B00" 
              fontFamily="Arial, sans-serif" 
              triangleSize={50} 
              showTriangle={true}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              HOME
            </Link>
            <Link to="/our-story" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              OUR STORY
            </Link>
            <Link to="/solutions" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              SOLUTIONS
            </Link>
            <Link to="/why-us" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              WHY US
            </Link>
            <Link to="/careers" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              CAREERS
            </Link>
            <Link to="/connect" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              CONNECT
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              HOME
            </Link>
            <Link to="/our-story" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              OUR STORY
            </Link>
            <Link to="/solutions" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              SOLUTIONS
            </Link>
            <Link to="/why-us" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              WHY US
            </Link>
            <Link to="/careers" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              CAREERS
            </Link>
            <Link to="/connect" className="text-gray-800 font-medium hover:text-endeavour-orange transition-colors">
              CONNECT
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
