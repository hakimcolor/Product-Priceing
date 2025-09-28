import React, { use } from 'react'
import GymeCard from './GymeCard';
const GyemAllData = ({ fatCdata }) => {
  const Data = use(fatCdata)
  console.log(Data);
  
  return <div className='max-w-[1200px] mx-auto p-4 md:p-2 xl:p-1 2xl:p-0 mt-30
   '>
    <div className='grid xl:grid-cols-3  gap-x-10 md:grid-cols-2 gap-y-10'>
      {Data.map((keys) =><GymeCard keys={keys} key={keys.id}></GymeCard>)}
</div>

  </div>;
};

export default GyemAllData
