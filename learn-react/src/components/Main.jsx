import { useState } from "react";
import Counter from "./Counter";

export default function Main() {
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotal = () => {
    setTotal(total + 1);
  };

  return (
    <main>
      <h2>Total: {total}</h2>
      <h2>Flag: {flag.toString()}</h2>
      <button onClick={() => setFlag(!flag)}>Toggle flag</button>
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  );
}
