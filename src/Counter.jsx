import React from 'react'
import { increment, decrement, incrementByAmount } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        {count}
        <br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(20))}>amount</button>
    </div>
  )
}

export default Counter