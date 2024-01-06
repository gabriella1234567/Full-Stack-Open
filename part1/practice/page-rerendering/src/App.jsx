/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button"
import Display from "./Display"

const App = () => {

  const [count, setCount] = useState(0)
    console.log('rendering with count value', count)

  
  const increaseByOne = () => {
    console.log('increasing, value before', count)
    setCount(count + 1)  
}
  
  
  const decreaseByOne = () => {
    console.log('decreasing, value before', count)
    setCount(count - 1)
    }

  
  const setToZero = () => {
    console.log('resetting, value before', count)
    setCount(0)
}

  return (
    <>
      <Display counter={count} />
      <Button onClick={increaseByOne} text='Plus' />
      <Button onClick={decreaseByOne} text='Minus' />
      <Button onClick={setToZero} text='Reset' />
    </>
  )
}

export default App