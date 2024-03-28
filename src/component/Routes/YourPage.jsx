import React, { useEffect, useState } from 'react'
import Motion from '../Motion';
import axios from 'axios';




export default function YourPage() {
 
  


let [myData,setMyData] = useState([{CategoryName:"Biryani/Rice",description:"Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.",img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",name:"Chicken Fried Rice"}]);



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
