import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const GymFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 w-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-2xl font-bold mb-3">Gym Name</h2>
            <p className="text-gray-400">
              Your fitness journey starts here! Join us to achieve your health
              goals with expert guidance and modern facilities.
            </p>
          </div>

      
          <div>
            <h2 className="text-xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Classes</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
            <p className="text-gray-400">Email: hakimcolor.com</p>
            <p className="text-gray-400">Phone: +880 181 877 856</p>
            <div className="flex space-x-4 mt-3">
             
              <a
                href="https://www.facebook.com/hakimcolorofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Facebook className="w-6 h-6 cursor-pointer" />
              </a>

            
              <a
                href="https://www.instagram.com/hakim.color/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Instagram className="w-6 h-6 cursor-pointer" />
              </a>

            
              <a
                href="https://x.com/hakimcolor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Twitter className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

 
        <div className="mt-8 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          © 2025 Gym Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default GymFooter;
