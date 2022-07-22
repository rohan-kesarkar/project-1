import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




export  default function Login (){
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
 

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    if(!email){
      alert("email is required")
    }else if(!(email.includes("@","."))){
      alert("entre valid email")
    } else if(!password){
      alert("password is required")
    }else if(!(password.length >3 )){
      alert("password must contain min. 4 character")
    } else{
      navigate('/products')
    }
  }
  
  
  return (
    <div className='App'>
      <h1>Login Form</h1>
      <h2>email</h2>
      <input type="email" placeholder='Entre Your email here' name="email" onChange={(e)=>setEmail(e.target.value)} />
      <h2>password</h2>
      <input type="password" placeholder='Entre Your password here' name="password" onChange={(e)=>setPassword(e.target.value)} />
      <br/>
      <button  onClick={handleSubmit} >Log in</button>

    </div>
  );
}


