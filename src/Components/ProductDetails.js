import React from 'react'
import { useParams } from 'react-router-dom'
import Records from '../product.json'
import { useNavigate } from 'react-router-dom';
export default function ProductDetails() {
    const id = useParams()

    
  const navigate = useNavigate();

    const currProduct = Records.products.find(records=>records.id === parseInt(id.id))
    //console.log("This is ",id.id)

    

  return (
    <>
    <div className='img_div' key={currProduct.id}>
          <div className='details'>
          <img src={currProduct.images[0]} alt="img"/>
            <img src={currProduct.images[1]} alt="img"/>
            <img src={currProduct.images[2]} alt="img"/>
          </div>
            <div style={{justifyContent:"center", paddingTop:"400px"}} className='title'>
            Title: {currProduct.title}
           <br/>
            Description: {currProduct.description}
            <br/>
            Price: {currProduct.price}
            <br/>
            Discount: {currProduct.discountPercentage}
            <br/>
            Rating: {currProduct.rating}
            <br/>
            Stock left: {currProduct.stock}
            <br/>
            Brand: {currProduct.brand}
            <br/>
            Category: {currProduct.category}
           
            </div>
            <div key={currProduct.id}>

            <button onClick={()=>{navigate(`/cart`)}}>Add to cart</button>
            </div>
     </div>
        
      
    </>
  )
}
