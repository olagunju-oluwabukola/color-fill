import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import Display from './Display'
import Counter from './Counter'
import Info from './Info'
import Props from './Props'
import Clock from './Clock'
import Mytodo from './Mytodo'
function App() {
 const date = 'wednesday'
const [colorValue, setColorValue] = useState('')
  return (
    <>
    <div>
   <Display colorValue={colorValue}/>
  <Input colorValue={colorValue} setColorValue={setColorValue}/>
  <Counter/>
  <Info name={'fola'} DOB='02-10-2007' title={'React Props'} level= {'upper'}/>
  <Props title={['olu', 'wole', 'jide']} />
   <Clock/>
  <Mytodo/>
    </div>
   
    </>
  )
}

export default App
