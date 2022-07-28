

import React from 'react'
import { useNavigate } from 'react-router-dom'


const show = {
    color:"black", padding:"10px 20px", display:"flex", justifyContent:"space-between"
}

export default function Navbar(props) {
  const navigate = useNavigate()

 
  return (
    <div style={{height:"60px",backgroundColor:"lightgray"}}>
       <div style={show}>
         <h3 >Home</h3>
          <div>
         <button  style={{ display: "corner"}} ><img src="https://clipground.com/images/icon-cart-clipart-2.jpg" alt="cart" onClick={()=>{navigate(`/cart`)}}  style={{width: "50px",height: "50px", display: "corner"}} /></button>
         </div>
       
         <div>
        </div>
       </div>
    </div>
  )
}
