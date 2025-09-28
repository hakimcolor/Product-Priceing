import React from 'react';

const Navdata = ({ route }) => {
  return (
    <li className="px-3 py-2 md:px-0 md:py-0 rounded-md md:rounded-none cursor-pointer transition-all duration-300 hover:text-cyan-600 hover:underline">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Navdata;
