import { useMemo, useState } from "react";
import { useTodos } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodos();

  // 1. 할 일 중 하나를 체크한 경우 => todos의 done 이 true인 것들
  // 2. 완료된 항목 보기 체크했을 때 체크한 1개만 보여야 함
  // 3. 갯수는 완료 갯수/전체 갯수 표시 => todos에서 done 이 true인 것의 갯수

  // 완료 상태
  const [isDone, setIsDone] = useState(false);

  // 완료 상태 체크에 따라서 todo return 값 다르게 표시
  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    }
    return todos.filter((todo) => todo.done);
  };

  // 할 일 갯수 구하기
  const getStatsCount = () => {
    console.log("getStatsCount 함수 실행!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    return {
      totalCount,
      doneCount,
    };
  };

  // 구조분해할당으로 각 return 값 가져옴
  // const { totalCount, doneCount } = getStatsCount();

  // useMemo(매개변수 없는 결과값을 반환하는 함수, 의존된 상태)
  // todos의 값이 변할 때에만 getStatsCount() 함수 실행
  // return 값을 구조분해할당으로 변수에 담음
  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  // 위에서 return된 값을 변수에 담음
  const filteredTodos = getFilteredTodos();

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => {
            setIsDone(e.target.checked);
          }}
        />
        <label htmlFor="isDone">
          완료된 항목 보기({totalCount}/{doneCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
