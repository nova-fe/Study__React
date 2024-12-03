import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// 2) reducer 함수가 호출이 됨,
// -> dispatch에 있는 객체가 action에 매개변수로 전달이 됨, state 에는 초기값이 들어옴
function numReducer(state, action) {
  console.log(state, action); // 0, {type: 'INCREASE', data: 1}
  // 3) reducer 함수에서 새로운 state 값을 반환하면
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
      derault: return state;
  }
}

export default function UseReducerExam() {
  // dispatch: 발송하다
  // -> 상태 변화가 있어야 한다는 사실을 발송하는 함수
  // 4) 반환된 값을 useReducer 가 불러와서 state(number)의 값을 변경시켜줌
  const [number, dispatch] = useReducer(numReducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    // 1) dispatch 함수를 호출하면
    dispatch({
      type: "INCREASE",
      data: 1, // 1씩 증가
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1, // 1씩 감소
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
