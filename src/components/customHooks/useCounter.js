import { useState } from 'react'

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prevCount) => prevCount + value)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - value)
  }

  return [count, increment, decrement]
}

export default useCounter
