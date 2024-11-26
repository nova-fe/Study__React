import { useState } from "react";

// * 일반적으로 사용 (함수 선언식)
export default function Counter({ onTotal }) {
  // const [상태, 상태변경] = useState(기본값)
  const [counter, setCounter] = useState(0);

  console.log("[렌더링] Counter: ", counter);

  const handleCounter = () => {
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)
    console.log("[함수호출] Counter: ", counter); // [함수호출] Counter: 0

    if (onTotal) {
      // onTotal 이 있을 경우만 onTotal() 실행
      onTotal();
    }
  };

  // 상태, 로직
  return <button onClick={handleCounter}>Counter: {counter}</button>;
}

// export default Counter;

// * UI만 담당 하는 컴포넌트(함수 표현식)
// export const Counter = () => {
//   <button>Counter</button>;
// };

// export default Counter;
