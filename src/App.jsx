import React, { Suspense } from 'react'
import Navber from './componentes/Navber'
import GyemAllData from './componentes/GyemAllData'
const fatceData=fetch('./DataforGyem.json').then((res)=>res.json())
const App = () => {
  const fatCdata = fatceData;
  return (
    <div>
      <Navber></Navber>
      <Suspense fallback={<h1>loding...</h1>}> <GyemAllData fatCdata={fatCdata}></GyemAllData></Suspense>
 
    </div>
  )
}

export default App
