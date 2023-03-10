import {useReducer, useState} from "react";

function reducer(state, action) {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter(){
  // const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncreased = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({ type: 'INCREMENT' });
  }

  const donDecrease = () => {
    // setNumber(prevNumber => prevNumber - 1);
    dispatch({type: 'DECREMENT' })
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreased}>+1</button>
      <button onClick={donDecrease}>-1</button>
    </div>
  )
}

export default Counter;