import Header from "./components/header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      That is brilliant
      <div>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
      <div>Current count: {count}</div>
    </div>
  );
}

export default App;
