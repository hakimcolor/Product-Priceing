import React from 'react';
import GymFeatures from './GymFeatures';

const GymeCard = ({ keys }) => {
  const { billingCycle, currency, features, id, name, price } = keys;

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
      className={`border-2  ${border} ${cardBg} p-5 mt-5  rounded-xl flex flex-col h-full `}
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
        <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-transform duration-150 cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default GymeCard;
