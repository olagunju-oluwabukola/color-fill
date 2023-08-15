import React, { useState } from 'react'

const Mytodo = () => {
   const [items, setItems] = useState([
{
  id: 1,
  task:'Take a lesson on Duolingo',
  checked:false
},
{
  id: 2,
  task:'Review your journal',
  checked:false
},
{
  id: 3,
  task:'Submit the proposal',
  checked:false
},
   ])
  return (
    <div>
       <ul>
   {items.map((item)=>(
   
      <li key={item.id}>
        <input type="checkbox" checked={item.checked}/>
        <label >{item.task}</label>
        <button>Delete</button>
      </li>
   
   ))}
    </ul>   
    </div>
  )
}

export default Mytodo