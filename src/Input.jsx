import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
  <form  onSubmit={(e)=> e.preventDefault()}>
<label htmlFor=""> Color Name:</label> <br />
<input type="text"  autoFocus placeholder='Color Name' required value={colorValue} onChange={(e)=>setColorValue(e.target.value)}/>
  </form>
  )
}

export default Input