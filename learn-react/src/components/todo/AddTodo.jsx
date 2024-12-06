import { useState } from "react";
import { useTodos, useTodosDispatch } from "../../context/TodoContext";

export default function AddTodo() {
  const [todoText, setTodoText] = useState("");

  const todos = useTodos();
  // onAddTodo 를 context 로 가져옴
  const dispatch = useTodosDispatch();
  // AppTodo에서 added 부분을 복사해서 가져옴

  // 할일 추가
  // 1) added
  // text -> AppTodo.jsx에서 인수로 받아옴
  const handleAddTodo = (text) => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText: text,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
            handleAddTodo(e.target.value);
            setTodoText("");
          }
        }}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          // 저장
          setTodoText(""); // ❌ null, undefined
          handleAddTodo(todoText);
        }}
      >
        추가
      </button>
    </div>
  );
}
