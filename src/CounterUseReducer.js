import React from "react";
import useCounterUseReducer from "../src/hooks/useCounterUseReducer";

const CounterUseReducer = () => {
  const { counter, increment, decrement, reset } = useCounterUseReducer();
  return (
    <div>
      {counter}
      <button onClick={increment}>add number </button>
      <button onClick={decrement}>remove number </button>
      <button onClick={reset}>reset </button>
    </div>
  );
};

export default CounterUseReducer;
