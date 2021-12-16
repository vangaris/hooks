import React from "react";

const useCounterAndTodos = (url) => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [url]);

  return { count, setCount, todos };
};

export default useCounterAndTodos;
