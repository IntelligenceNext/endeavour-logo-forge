
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* CTA Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12 text-center md:text-left">
          <div className="md:flex md:justify-between md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Unable to decide what solution your business needs?</h2>
              <p className="text-gray-600 mb-4 md:mb-0">Leave that to us. We'll analyze your requirements and create a custom proposal for you.</p>
            </div>
            <Button className="bg-endeavour-orange hover:bg-endeavour-orange/90 text-white px-8 py-6 h-auto text-lg font-medium">
              CONTACT US NOW
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">About Endeavour Sciences Pvt Ltd</h3>
            <p className="text-gray-600 mb-4">
              We make a global impact in the outsourcing/offshoring industry through innovation, 
              excellence, and continuous improvement. Our vision is to be a catalyst for 
              advancement in the industry.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-endeavour-orange">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-endeavour-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-endeavour-orange">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/client-login" className="text-gray-600 hover:text-endeavour-orange transition-colors">
                  Client Login
                </Link>
              </li>
              <li>
                <Link to="/employee-hrms" className="text-gray-600 hover:text-endeavour-orange transition-colors">
                  Employee HRMS
                </Link>
              </li>
              <li>
                <Link to="/rfp" className="text-gray-600 hover:text-endeavour-orange transition-colors">
                  Request for Proposal (RFP)
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-endeavour-orange transition-colors">
                  FAQ Section
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Reach Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-endeavour-orange flex-shrink-0" size={18} />
                <span className="text-gray-600">Altimus Building, Ahmedabad, India, 380015</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-endeavour-orange flex-shrink-0" size={18} />
                <span className="text-gray-600">US: +1 (888) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-endeavour-orange flex-shrink-0" size={18} />
                <span className="text-gray-600">UK: +44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-endeavour-orange flex-shrink-0" size={18} />
                <a href="mailto:info@endeavoursciences.in" className="text-gray-600 hover:text-endeavour-orange">
                  info@endeavoursciences.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Endeavour Sciences Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-endeavour-orange">
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-endeavour-orange">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
