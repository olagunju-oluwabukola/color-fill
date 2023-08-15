import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [Counter, setCounter] =useState(0)
 useEffect(()=>{
  
 }, [])
  return (
    <div>
        <button onClick={()=>setCounter((prevCount)=>prevCount - 1)}>-</button>
        <h1>{Counter}</h1>

        <button onClick={()=>setCounter((prevCount)=>prevCount+1)}> +</button>
   <div>

   </div>
    </div>

    
  )
}

export default Counter