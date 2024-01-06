import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

// Simplified structure for handling clicks with an object newClicks as objects do not need to be assigned to a variable in event handlers. 
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

  return (
    <div className="button">
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

export default App
