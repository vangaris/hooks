import React from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const useCounterUseReducer = () => {
  const [counter, dispatch] = React.useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset" });

  return { counter, increment, decrement, reset };
};

export default useCounterUseReducer;
