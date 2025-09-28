import React from 'react';
import { Check } from 'lucide-react';

const GymFeatures = ({ k }) => {
  return (
    <div>
      <ul className='font-bold text-gray-600'>
        <li className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
          {k}
        </li>
      </ul>
    </div>
  );
};

export default GymFeatures;
