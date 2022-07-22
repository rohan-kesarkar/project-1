import React, { useState } from 'react'

export default function LiveTimeClock() {
    let time = new Date().toLocaleTimeString()

    const [ctime, setCtime] = useState(time)

    const UpdateTime = ()=>{
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(UpdateTime,1000)
  return (
    <>
    <div className="App">
      <h1>{ctime}</h1>
    </div>
      
    </>
  )
}
