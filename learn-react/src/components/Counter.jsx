import { useState } from "react";

// * 일반적으로 사용 (함수 선언식)
export default function Counter({ onTotal }) {
  // const [상태, 상태변경] = useState(기본값)
  const [counter, setCounter] = useState(0);

  // 3) state 값이 변했으므로 리렌더링을 하면서 Counter: 1
  console.log("[렌더링] Counter: ", counter);

  // 2) button 을 클릭하여 이벤트 핸들러 실행시엔 아직 0인 상태
  const handleCounter = () => {
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)
    console.log("[함수호출] Counter: ", counter); // 함수호출: 0

    if (onTotal) {
      // onTotal 이 있을 경우만 onTotal() 실행
      onTotal();
    }
  };

  // 상태, 로직
  // 1) 이때의 counter 는 0 상태
  return <button onClick={handleCounter}>Counter: {counter}</button>;
}

// export default Counter;

// * UI만 담당 하는 컴포넌트(함수 표현식)
// export const Counter = () => {
//   <button>Counter</button>;
// };

// export default Counter;
