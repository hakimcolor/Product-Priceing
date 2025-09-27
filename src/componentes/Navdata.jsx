import React from 'react';

const Navdata = ({ route }) => {
  return (
    <div>
      <li className='hover:bg-white md:bg-transparent px-2 md:px-0 rounded-md md:rounded-none cursor-pointer'>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Navdata;
