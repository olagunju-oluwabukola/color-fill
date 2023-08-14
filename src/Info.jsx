import React from 'react'

const Info = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        
        <p>  my name : {props.name}</p>
        <p>DOB:{props.DOB}</p>
    </div>
  )
}

export default Info