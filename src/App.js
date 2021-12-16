import Counter from "../src/Counter";
import { CounterProvider } from "../src/context/context";

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
