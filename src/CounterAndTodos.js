import useCounterAndTodos from "../src/hooks/useCounterAndTodos";

const url = "https://jsonplaceholder.typicode.com/todos";

// simple useState and custom hook
const CounterAndTodos = () => {
  const { count, setCount, todos } = useCounterAndTodos(url);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>add number </button>
      <button onClick={() => setCount(count - 1)}>remove number </button>
      <button onClick={() => setCount(0)}>reset </button>
      {todos.map((todo) => todo.title)}
    </div>
  );
};

export default CounterAndTodos;
