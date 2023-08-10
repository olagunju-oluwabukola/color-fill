import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import Display from './Display'
function App() {
 
const [colorValue, setColorValue] = useState('')
  return (
    <>
    <div>
   <Display colorValue={colorValue}/>
  <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </div>
   
    </>
  )
}

export default App
