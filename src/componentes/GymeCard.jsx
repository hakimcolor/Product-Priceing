
import React, { useState } from 'react';
import GymFeatures from './GymFeatures';
import { X } from 'lucide-react';

const GymeCard = ({ keys }) => {
  const { billingCycle, currency, features, id, name, price } = keys;
  const [showModal, setShowModal] = useState(false);

  let cardBg = '';
  let border = '';
  let titleColor = '';
  let priceColor = '';
  let cycleColor = '';
  let featuresTitleColor = '';

  if (id === 'basic') {
    cardBg = 'bg-gray-50';
    border = 'border-gray-300';
    titleColor = 'text-gray-900';
    priceColor = 'text-green-600';
    cycleColor = 'text-gray-600';
    featuresTitleColor = 'text-green-700';
  }

  if (id === 'standard') {
    cardBg = 'bg-white';
    border = 'border-blue-500';
    titleColor = 'text-blue-900';
    priceColor = 'text-blue-600';
    cycleColor = 'text-gray-500';
    featuresTitleColor = 'text-blue-700';
  }

  if (id === 'premium') {
    cardBg = 'bg-gray-900';
    border = 'border-yellow-400';
    titleColor = 'text-yellow-400';
    priceColor = 'text-yellow-300';
    cycleColor = 'text-gray-300';
    featuresTitleColor = 'text-yellow-500';
  }

  return (
    <div
      className={`border-2 ${border} ${cardBg} p-5 mt-5 rounded-xl flex flex-col h-full`}
    >
      <div className={`font-bold text-3xl ${titleColor}`}>{name}</div>

      <div className={`font-bold text-2xl ${priceColor} mt-3`}>
        ${price} <span className={`${cycleColor}`}>/{billingCycle}</span>
      </div>

      <div className={`text-xl font-semibold mt-5 ${featuresTitleColor}`}>
        Features
      </div>

      <div className="mt-2 space-y-2 flex-grow">
        {features.map((k, index) => (
          <GymFeatures k={k} key={index} />
        ))}
      </div>

      <div className="">
        <button
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-transform duration-150 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Subscribe
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-gray-400 p-5 rounded-xl w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
              onClick={() => setShowModal(false)}
            > 
              <div className='text-red-700 cursor-pointer'><X className=''></X></div>
           
            </button>

            <h2 className="text-2xl font-bold mb-4">Subscribe to {name}</h2>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 bg-white p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 bg-white p-2 rounded-lg"
              />
              <div className="text-2xl font-bold">Total :{price}</div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GymeCard;
