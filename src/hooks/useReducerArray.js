import React from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    // case "remove":
    //   return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const useReducerArray = () => {
  const [users, dispatch] = React.useReducer(reducer, initialState);
  const [newUser, setNewUser] = React.useState({ name: "" });

  const addUser = () => dispatch({ type: "add", payload: newUser });
  const handleChange = (e) => setNewUser({ name: e.target.value });
  return { users, addUser, setNewUser, handleChange };
};

export default useReducerArray;
