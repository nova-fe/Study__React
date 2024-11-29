// useReducer 에서 사용함
// state: 사용할 상태(여기선 todos 라는 상태)
// action: 불러올 액션(예를들어서 added 같은 경우, nextId와 todoText를 액션으로 가져옴)
export default function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      return [...todos, { id: nextId, text: todoText, done: false }];
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      return [
        // 삽입지점 이전 항목(처음부터 insertAt까지)
        ...todos.slice(0, insertAt),
        // 새 항목 추가
        { id: nextId, text: todoText, done: false },
        // 삽입 지점 이후 항목 (insertAt 부터 끝까지)
        ...todos.slice(insertAt),
      ];
    }
    case "deleted": {
      const { deleteId } = action;
      return todos.filter((item) => item.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      return todos.map((item) => {
        // 만약 item.id 가 id와 같다면
        if (item.id === id) {
          // 새로운 객체를 return
          return { ...item, done: done };
        }
        // id가 같지 않다면(체크 클릭하지 않음) 기존 객체를 return
        return item;
      });
    }
    case "reverse": {
      return todos.toReversed()
    }
    default: {
      throw Error("알 수 없는 액션 타입: " + action.type);
    }
  }
}
