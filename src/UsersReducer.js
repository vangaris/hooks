import React from "react";
import useReducerArray from "../src/hooks/useReducerArray";

const UsersReducer = () => {
  const { users, addUser, handleChange } = useReducerArray();

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={addUser}> Add user </button>
      {users.map((user, index) => (
        <h5 key={index}> {user.name}</h5>
      ))}
    </div>
  );
};

export default UsersReducer;
