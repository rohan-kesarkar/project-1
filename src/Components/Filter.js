import React, {useState} from 'react'
import Records from '../product.json'
import { useNavigate } from 'react-router-dom';

export default function Filter() {
  const navigate = useNavigate()
  const record = Records.products
  
   


//const filtered = Records.products.map(record=>record.title)
const [filteredRecord, setFilteredRecord] = useState(record)
const searchProduct = (e)=>{
  setFilteredRecord(record.filter((a)=>a.title.startsWith(e.target.value)))
}
const searchBrand = (e)=>{
 let data =record.filter(rec=>rec.brand===e.target.value)
 setFilteredRecord(data)
 
}
const searchCategory = (e)=>{
  let data =record.filter(rec=>rec.category===e.target.value)
  setFilteredRecord(data)
  
 }


const sortByPrice = ()=>{
  setFilteredRecord((record)=>{
  const dataToSort = [...record]
  dataToSort.sort((a,b)=>Number(a.price)-Number(b.price))
  return dataToSort
  })
}
const sortByDiscount= ()=>{
  setFilteredRecord((record)=>{
  const dataToSort = [...record]
  dataToSort.sort((a,b)=>Number(a.discountPercentage)-Number(b.discountPercentage))
  return dataToSort
  })
}

const sortByRating= ()=>{
  setFilteredRecord((record)=>{
  const dataToSort = [...record]
  dataToSort.sort((a,b)=>Number(a.rating)-Number(b.rating))
  return dataToSort
  })
}

  return (
    <>
    <input type="text" onKeyUp={searchProduct} style= {{ height:"20px",border:'bold', borderRadius:"10px"}} placeholder="Search"/>
    <h4>Sort By:</h4>
       <h8>Select Brand :</h8>
         <select onChange={searchBrand}  style={{width:"200px",height:"20px", borderRadius:"10px"}}>
            <option  disabled selected>
             select
            </option >
            {filteredRecord?.map((rec)=>{
            return(
              <option value={rec.brand} key={rec.id} >
                {rec.brand}
              </option>
            )
           })}
            
         </select>

         
         <h8>Category :</h8>
         <select onChange={searchCategory}  style={{width:"200px",height:"20px", borderRadius:"10px"}}>
            <option  disabled selected>
             select
            </option>
           {filteredRecord?.map((rec)=>{
            return(
              <option>
                {rec.category}
              </option>
            )
           })}
         </select>
         <button onClick={sortByPrice}>Price</button>
         <button onClick={sortByDiscount}>Discount</button>
         <button onClick={sortByRating}>Rating</button>
         {filteredRecord?.map((rec)=>{
          return(
          <div key={filteredRecord.id}>
             <img onClick={()=>{navigate(`/productDetails/${rec.id}`)}} src={rec.thumbnail} alt={rec.title}/> 
             <br/>
              Title: {rec.title} 
              <br/>
              Brand:{rec.brand}
             <br/>
             Price: ${rec.price} <br/>
             Discount: {rec.discountPercentage} <br/>
              Rating : {rec.rating}
          </div>
          )
         })}
         
    </>
  )
  
}
