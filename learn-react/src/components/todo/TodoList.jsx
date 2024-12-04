import { useTodos } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodos();

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
}
