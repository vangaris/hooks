import React from "react";

const CounterContext = React.createContext();

function CounterProvider({ step = 1, initialCount = 0, ...props }) {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const change = action.step ?? step;
      switch (action.type) {
        case "increment": {
          return { ...state, count: state.count + change };
        }
        case "decrement": {
          return { ...state, count: state.count - change };
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
    },
    { count: initialCount }
  );

  const value = [state, dispatch];
  console.log(value);
  return <CounterContext.Provider value={value} {...props} />;
}

function useCounter() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error(`useCounter must be used within a CounterProvider`);
  }
  return context;
}

const increment = (dispatch) => dispatch({ type: "increment" });
const decrement = (dispatch) => dispatch({ type: "decrement" });

export { CounterProvider, useCounter, increment, decrement };
