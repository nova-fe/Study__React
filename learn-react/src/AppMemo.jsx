import { useState, memo, useMemo, useCallback } from "react";
// 메모이제이션이 적용되지 않은 컴포넌트
const RegularComponent = ({ count, items = [], onCount }) => {
  console.log("RegularComponent 렌더링");
  return (
    <fieldset>
      <legend>일반 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
};

// 메모이제이션이 적용된 컴포넌트
// https://ko.react.dev/reference/react/memo
// prop으로 들어오는 count가 변경 될 때만 리렌더링
// items를 useMemo를 사용하지 않으면 리렌더링이 됨 -> Obj타입이기 때문
const MemoizedComponent = memo(({ count, items = [], onCount }) => {
  console.log("MemoizedComponent 렌더링");
  return (
    <fieldset>
      <legend>메모이제이션 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
});

export default function AppMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useState를 사용한 courses는 메모제이션이 됨
  const [courses, setCourses] = useState([
    { id: 0, text: "HTML&CSS", level: 0 },
    { id: 1, text: "자바스크립트", level: 0 },
    { id: 2, text: "리액트", level: 0 },
    { id: 3, text: "리액트 중급", level: 1 },
  ]);

  // filter 메서드를 사용해 새로운 배열을 반환하기 때문에 메모이제이션이 안 됨
  // const begginerCourses = courses.filter((item) => item.level === 0);

  // 그래서 useMemo 사용
  const begginerCourses = useMemo(() => {
    return courses.filter((item) => item.level === 0);
  }, [courses]);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // const courses = useMemo(() => {
  //   return [
  //     { id: 0, text: "HTML&CSS", level: 0 },
  //     { id: 1, text: "자바스크립트", level: 0 },
  //     { id: 2, text: "리액트", level: 0 },
  //     { id: 3, text: "리액트 중급", level: 1 },
  //   ];
  // }, []);

  return (
    <div>
      <h2>컴포넌트 메모이제이션</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setOtherState(otherState + 1)}>기타 상태 변경</button>
      <hr />
      <RegularComponent count={count} items={begginerCourses} onCount={handleCount} />
      <MemoizedComponent count={count} items={begginerCourses} onCount={handleCount} />
    </div>
  );
}
