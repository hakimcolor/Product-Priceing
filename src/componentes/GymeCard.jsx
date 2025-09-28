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
          <div className={`p-5 rounded-xl rounded-tr-[35px] w-96 relative shadow-2xl ${cardBg}`}>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
              onClick={() => setShowModal(false)}
            >
              {/* <abbr title="close">
                <div className="text-red-700 cursor-pointer bg-white p-1 border-b-red-500 border-5 border-t-cyan-500 border-l-fuchsia-800 border-r-green-700 rounded-full animate-spin [animation-duration:3s]">
                  <X />
                </div>
              </abbr> */}
              <abbr title="close">
                <div className="relative inline-flex items-center justify-center">
                  
                  <div
                    className="absolute -inset-1 rounded-full border-4 border-t-cyan-500 border-r-green-400 border-b-red-500 border-l-fuchsia-400
                     animate-spin [animation-duration:2s] origin-center pointer-events-none z-0"
                  />

              
                  <button className="relative z-10 bg-white p-2 rounded-full focus:outline-none text-red-600">
                    <X size={18} />
                  </button>
                </div>
              </abbr>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Subscribe to{' '}
              <span className={`text-2xl font-bold ${titleColor}`}>{name}</span>
            </h2>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Name......"
                className="w-full border-2 border-gray-300 bg-white p-2 rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <input
                type="email"
                placeholder="Your Email.......@gmail.com"
                className="w-full border-2 border-gray-300 bg-white p-2 rounded-lg focus:outline-none focus:border-cyan-500"
              />
              <div className={`text-2xl font-bold text-red-500`}>
                Total :{' '}
                <span className={`text-2xl font-bold ${priceColor}`}>
                  {' '}
                  $ {price}{' '}
                  <span className={`${cycleColor}`}>/{billingCycle}</span>
                </span>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-bold"
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
