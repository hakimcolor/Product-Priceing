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
    <div>
      <nav className="flex  justify-between items-center px-6 md:px-20 mt-5">
      
        <span className="flex items-center  gap-x-4 ">
          <button onClick={handleClick} className="md:hidden ">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <h1 className="font-bold text-xl ">Logo</h1>
        </span>

       
        <ul
          className={`flex flex-col md:flex-row gap-y-4 md:gap-x-10 absolute md:static bg-gray-400  md:bg-transparent w-[60%] left-0 rounded-tr-xl rounded-br-xl px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-700 md:px-20  xl:px-40 2xl:px-[600px] ${
            open ? 'top-16 ' : 'left-[-690px] top-16'
          }`}
        >
          {navgationData.map((route) => (
            <Navdata key={route.id} route={route} />
          ))}
        </ul>

 
        <button className="bg-cyan-300 p-2 w-24 rounded-md hover:text-white hover:bg-gray-600 cursor-pointer ">
          Click
        </button>
      </nav>
    </div>
  );
};

export default Navber;
