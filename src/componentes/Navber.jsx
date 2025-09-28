import React, { useState } from 'react';
import Navdata from './Navdata';
import { Menu, X } from 'lucide-react';

const navgationData = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Contact', path: '/contact' },
];

const Navber = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
    
        <div className="flex items-center   gap-[120px] xl:gap-0">
          <button
            onClick={handleClick}
            className="md:hidden focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <h1 className="font-bold text-2xl text-cyan-600 ">MyLogo</h1>
        </div>

     
        <ul className="hidden md:flex md:items-center md:gap-8">
          {navgationData.map((route) => (
            <Navdata key={route.id} route={route} />
          ))}
        </ul>

      
        <button className="hidden md:block bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
          Get Started
        </button>
      </div>

      
      <div
        className={`md:hidden bg-white shadow-md absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          open
            ? 'max-h-screen opacity-100 py-4'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {navgationData.map((route) => (
            <Navdata key={route.id} route={route} />
          ))}
        </ul>
        <div className="px-6 mt-4">
          <button className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
