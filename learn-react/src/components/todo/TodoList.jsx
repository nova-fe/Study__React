export default function TodoList({ todos = [], onTodoDelete, onToggleTodo }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => {
              onToggleTodo(item.id, e.target.checked);
            }}
          />
          <span style={item.done ? { textDecoration: "line-through" } : {}}>{item.text}</span>
          <button onClick={() => onTodoDelete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}