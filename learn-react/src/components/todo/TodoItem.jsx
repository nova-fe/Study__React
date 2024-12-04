import { useTodosDispatch } from "../../context/TodoContext";

export default function TodoItem({ item }) {
  const dispatch = useTodosDispatch();

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

  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleToggleTodo(item.id, e.target.checked);
        }}
      />
      <span style={item.done ? { textDecoration: "line-through" } : {}}>{item.text}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </label>
  );
}
