import React, { useEffect, useState } from 'react'
import Motion from '../Motion';
import axios from 'axios';




export default function YourPage() {
 
  


let [myData,setMyData] = useState();



useEffect(
  ()=>{
    axios.get('/api/getData')
    .then((res)=>{
      console.log(res.data)
        setMyData([...res.data]);
        console.log(myData,)
    }
    
    
    )
    .catch()
},[]);

  return (
    <div>
      <h1>hyy</h1>
       <div className="mt-32 grid grid-cols-1 sm:grid-cols-2  gap-4 w-11/12 mx-auto ">
     <Motion  data={myData}/>
    
     </div> 

    </div>
  )
}
