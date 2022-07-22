import React, { useState } from 'react'

export default function Forms() {
const [fullName, setFullNmae] = useState({
  fname : "",
  lname : ""
})

    const inputEvent=(event)=>{
      // let value = event.target.value
      // let name = event.target.name
      const {value, name} = event.target
     
      setFullNmae((preVal)=>{
        // console.log(preVal)
     return{
      ...preVal,
      [name]:value
     }
      //  if(name === 'fname'){
      //   return{
      //     fname: value,
      //   lname: preVal.lname
      //   }
      //  }else if(name === 'lname'){
      //    return{
      //      fname:  preVal.fname,
      //      lname: value
      //    }
      //  }
     })
    }
    const onSubmit = (event)=>{
//console.log(event.target.value)
    alert("form submitted")
    }
   
  return (
    <>
    <div className='App'>
      <h1>Hello {fullName.fname} {fullName.lname} </h1>
      <input type="text" placeholder="Enter your name" name="fname" onChange={inputEvent} value={fullName.fname}/>
      <input type="text" placeholder="Enter your last name" name="lname" onChange={inputEvent} value={fullName.lname}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
      
    </>
  )
}
