import React from 'react'
import GymFeatures from './GymFeatures';

const GymeCard = ({ keys }) => {
  const {billingCycle,currency,features,id,name,price}=keys
  return <div
    className='border-5  border-[#d1d5db] mt-5 bg-[#f9fafb] p-2 rounded-xl '>
    
  <div className='font-bold text-[40px] text-[#111827] '>{name}</div>
    <div className='font-bold text-2xl text-[#16a34a] mt-5'>Price: $ { price}</div>
    <div className='text-2xl font-bold text-yellow-500 mt-5'>Features</div>
    <div className='mt-2'>
      {features.map((k,index) => <GymFeatures k={k} key={index}></GymFeatures>)}
    </div>
  </div>;
};

export default GymeCard
