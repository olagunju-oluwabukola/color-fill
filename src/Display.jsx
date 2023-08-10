import React from 'react'

const Display = ({colorValue}) => {
  return (
    <div>
        <div   className="square" style={{backgroundColor:colorValue}}>
            <p>{colorValue ? colorValue : 'Empty Color Value'}</p>
        </div>
      
    </div>
  )
}

Display.defaultProps={colorValue:"Empty Color Value"}

export default Display