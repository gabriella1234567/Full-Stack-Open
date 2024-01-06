/* eslint-disable react/prop-types */
import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)

  const increaseByOne = () => setCount(count + 1)

  const decreaseByOne = () => setCount(count - 1)

  const setToZero = () => setCount(0)

  return (
    <>
    <div>{count}</div>
      <button onClick={increaseByOne}>Plus</button>
      <button onClick={decreaseByOne}>Minus</button>
      <button onClick={setToZero}>Reset</button>
    </>
  )
}

export default App