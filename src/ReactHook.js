import React, { useState } from 'react'

export default function ReactHook() {
    //const state = useState();
    const [count, setCount] = useState(0)

    const IncNum = ()=>{
        setCount(count+1)
      
    }
    const DecNum = ()=>{
     setCount(count - 1)
    }
    const Reset = ()=>{
        setCount(0)
    }
  return (
    <>
    <div className='App'>
    <button onClick={DecNum}>-</button>
    <h1> {count} </h1>
   <button onClick={IncNum}>+</button>
   <br/>
   <button onClick={Reset}>↻</button>
      </div>
    </>
  )
}
