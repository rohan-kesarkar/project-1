import React, { useState } from "react";


const records = [
  {
    id: 0,
    money: "13.37"
  },
  {
    id: 1,
    money: "13.36"
  },
  {
    id: 2,
    money: "6.99"
  },
  {
    id: 3,
    money: "14"
  },
  {
    id: 4,
    money: "0.03"
  },
  {
    id: 5,
    money: "6.98"
  }
];

export default function Sorting() {
const [data, setData] = useState(records)
const sortedData = ()=>{
    setData((records)=>{
        const dataToSort = [...records]
        dataToSort.sort((a,b)=> Number(a.money) - Number(b.money))
        return dataToSort
    })
}



 return(

    <div className="App">
        {data.map((el)=>(
        <div key={data.id}>Money: {el.money}</div>
        ))}

        <button onClick={sortedData}> SortMe</button>
    </div>


 )
}


// const [dataObject, setdataObject] = useState(data);

// const sortByRich = () => {
//   setdataObject((data) => {
//     const dataToSort = [...data];
//     dataToSort.sort((a, b) => Number(a.money) - Number(b.money));
//     return dataToSort;
//   });
// };

// return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>

//     {dataObject.map((el) => (
//       <div key={el.id}>Money: {el.money}</div>
//     ))}

//     <button type="button" onClick={sortByRich}>
//       Sort By Money
//     </button>
//   </div>
// );