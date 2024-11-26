import { useState } from "react";
import Counter from "./Counter";

export default function Main() {
  const [total, setTotal] = useState(0);
  
  const  handleTotal = () => {
    setTotal(total + 1)
  }

  return (
    <main>
      <h2>Total: {total}</h2>
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      {/* onTotal이 사용되지 않은 Counter 클릭시엔 다른 컴포넌트가 리렌더링 되지 않음 */}
      <Counter />
    </main>
  );
}