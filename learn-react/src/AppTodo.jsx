// import "./App.css";
import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";
// TodoContext: todos 상태 관리 / TodoDispatchContext: dispatch 함수 관리
import { TodoProvider } from "./context/TodoContext";

export default function AppTodo(props) {
  // 여기 있던 코드들은 전부 TodoContext로 이동 or  해당 함수가 사용되는 컴포넌트로 이동됨
  return (
    <TodoProvider>
      <div>
        <h1>할일목록</h1>
        {/* <AddTodo onAddTodo={handleAddTodo} />
            <TodoList onTodoDelete={handleDeleteTodo} onToggleTodo={handleToggleTodo} /> */}
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
