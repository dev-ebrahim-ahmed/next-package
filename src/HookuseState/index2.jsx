
import { useState } from 'react'

export default function HookState2() {
    const [count, setCount] = useState(0);
    const handleIncreament = () => {
        setCount( count+1);
       
    }
    const handleDecreament = () => {
        setCount( count-1);
       
    }
    const handleReset = () => {
        setCount(0);
    }
  return (
    <div className='counter'>
        <h1>Count: {count}</h1>
        <button onClick={handleIncreament} disabled={count === 5 ? true : false} className='increament'>+</button>
        <button onClick={handleDecreament} disabled={count === 0 ? true : false} className='decrement'>-</button>
        <button onClick={handleReset} className='reset'>Reset</button>
    </div>
  )
}
