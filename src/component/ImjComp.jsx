import React from 'react'

export default function ImjComp({data}) {
  return (
    <div className='p-1'>
      <img src="https://plus.unsplash.com/premium_photo-1710548651496-59502bba8e80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />

      <h1>{data[0].CategoryName}</h1>
      <p className="">{data[0].description}</p>



    
<div className="flex justify-around">
    <div>
       Type <select name="sel1" className='bg-gray-600 p-1 text-white font-bold' id="">type
            <option value="full">full</option>
            <option value="half">half</option>
        </select>
       </div>


    <div className="">
       quantity <select name="" id="" className="bg-gray-600 p-1 text-white font-bold">
            {
                Array.from(Array(6),(e,i)=>
                <option key={i+1} value={i+1}>{i+1}</option>
                )
            }
        </select>
    </div>
</div>

    </div>
  )
}
