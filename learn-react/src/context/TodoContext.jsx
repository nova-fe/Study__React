import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import todoReducer from "../reducer/todo-reducer";

// context 생성 (기본값)
export const TodoContext = createContext(null); // todos
export const TodoDispatchContext = createContext(null); // dispatch 함수 관리

export function TodoProvider({ children }) {
  // useReducer(reducer함수, 관리할 상태의 초기값)
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML/CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  return (
    <TodoContext.Provider value={todos}>
      {/* dispatch '함수'를 넘김 = dispatch를 모든 하위 컴포넌트에서 사용할 수 있음 */}
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
export function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}
