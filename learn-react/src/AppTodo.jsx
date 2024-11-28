import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

export default function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML/CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

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

  return (
    <div>
      <h1>할일목록</h1>
      <input type="text" value={todoText} onKeyDown={handleKeyDown} onChange={handleTodoTextChange} />
      <button type="button" onClick={handleAddTodo}>
        추가
      </button>
      <div>Preview: {todoText}</div>
      <TodoList todos={todos} onTodoDelete={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </div>
  );
}
