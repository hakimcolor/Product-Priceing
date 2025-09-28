import React, { use } from 'react'
import GymeCard from './GymeCard';
const GyemAllData = ({ fatCdata }) => {
  const Data = use(fatCdata)
  console.log(Data);
  
  return <div className='max-w-[1200px] mx-auto p-4 md:p-0'>
    <div className='grid xl:grid-cols-3  gap-x-10 md:grid-cols-2'>
      {Data.map((keys) =><GymeCard keys={keys} key={keys.id}></GymeCard>)}
</div>

  </div>;
};

export default GyemAllData
