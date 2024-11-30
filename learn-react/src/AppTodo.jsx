import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import todoReducer from "./reducer/todo-reducer";

export default function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  // useReducer(reducer함수, 관리할 상태의 초기값)
  const [todos, dispatch] = useImmerReducer(todoReducer, [
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
  // 1) added
  const handleAddTodo = () => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText,
    });

    setTodoText(""); // ❌ null, undefined
  };

  // 할일 삭제
  // 3) deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({
      type: "deleted",
      deleteId,
    });
  };

  // 할일 체크
  // 4) done
  const handleToggleTodo = (id, done) => {
    dispatch({
      type: "done",
      id,
      done,
    });
  };

  // 할 일 n번째에 추가
  // 2) added_index
  const handleAddTodoByIndex = () => {
    dispatch({
      type: "added_index",
      nextId: todos.length,
      insertAt,
      todoText,
    });

    setTodoText("");
  };

  // 순서 바꾸기
  // 5) reverse
  const handleReverse = () => {
    dispatch({
      type: "reverse",
    });
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
