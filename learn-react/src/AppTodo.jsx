import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

export default function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML/CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  // input 입력값 가져오기
  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // 엔터키로 할일 추가
  const handleKeyDown = (e) => {
    // if (e.keyCode === 13) {
    //   handleAddTodo();
    // }
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  // 할일 추가
  const handleAddTodo = () => {
    const nextId = todos.length;
    setTodos([...todos, { id: nextId, text: todoText, done: false }]);
    // input 과 Preview 값 공백으로
    setTodoText(""); // ❌ null, undefined
  };

  // 할일 삭제
  const handleDeleteTodo = (deleteId) => {
    // todos를 순회하면서 id가 deleteId와 같지 않은 것들만 담아서 새로운 배열 생성
    const newTodos = todos.filter((item) => item.id !== deleteId);
    setTodos(newTodos);
  };

  // 할일 체크
  const handleToggleTodo = (id, done) => {
    // 기존 배열 안의 객체 속성(여기선 done) 변경 -> 새로운 메모리를 할당해서 업데이트 필요
    const nextTodos = todos.map((item) => {
      // 만약 item.id 가 id와 같다면
      if (item.id === id) {
        // 새로운 객체를 return
        return { ...item, done: done };
      }
      // id가 같지 않다면(체크 클릭하지 않음) 기존 객체를 return
      return item;
    });

    setTodos(nextTodos);
  };

  // 할 일 n번째에 추가
  const handleAddTodoByIndex = () => {
    // insertAt: 선택한 index 값
    const nextId = todos.length; // 할일갯수
    // 항목을 삽입하려면 삽입 지점 앞에 자른 배열을 전개하고
    // 새 항목과 원본 배열의 나머지 부분을 전개하는 배열을 만듭니다.
    const newTodos = [
      // 삽입지점 이전 항목(처음부터 insertAt까지)
      ...todos.slice(0, insertAt),
      // 새 항목 추가
      { id: nextId, text: todoText, done: false },
      // 삽입 지점 이후 항목 (insertAt 부터 끝까지)
      ...todos.slice(insertAt),
    ];
    setTodos(newTodos);
    setTodoText("");
  };

  // 순서 바꾸기
  const handleReverse = () => {
    // 기존 배열을 바꾸면 안 되므로 새로운 배열을 만듦
    // const nextTodos = [...todos];
    // // Array.reverse() : 배열 순서 반대로 - 뮤터블
    // nextTodos.reverse();
    // setTodos(nextTodos);

    // Array.toReversed() : 배열 순서 반대로 - 이뮤터블(기존 배열이 변경되지 않음)
    // 해당 API를 사용하면 간단하게 할 수 있다.
    setTodos(todos.toReversed());
  };

  return (
    <div>
      <h1>할일목록</h1>
      <div>
        <input type="text" value={todoText} onKeyDown={handleKeyDown} onChange={handleTodoTextChange} />
        <button type="button" onClick={handleAddTodo}>
          추가
        </button>
      </div>
      <div>
        <select
          value={insertAt}
          onChange={(e) => {
            setInsertAt(e.target.value);
          }}
        >
          {todos.map(
            (
              item,
              index // () 괄호를 쓰면 return 생략(JSX 문법에서만 가능), {} 괄호를 쓰면 return 명시 필요
            ) => (
              // 할일 갯수만큼 return
              <option key={item.id} value={index}>
                {index} 번째
              </option>
            )
          )}
        </select>
        <button type="button" onClick={handleAddTodoByIndex}>
          {insertAt}번째 추가
        </button>
      </div>
      <div>Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList todos={todos} onTodoDelete={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </div>
  );
}
