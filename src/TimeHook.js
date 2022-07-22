import React, { useState } from 'react'

export default function TimeHook() {
    let date = new Date().toLocaleTimeString()
    const [time, setTime] = useState(date)
    const GetTime = ()=>{
        date=new Date().toLocaleTimeString()
        setTime(date)
    }
  return (
    <>
    <div className='App'>
     <h1>{time}</h1>
    <button onClick={GetTime}>GET TIME</button>
    </div>
      
    </>
  )
}
