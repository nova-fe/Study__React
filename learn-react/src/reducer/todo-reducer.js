// useReducer 에서 사용함
// state: 사용할 상태(여기선 todos 라는 상태)
// action: 불러올 액션(예를들어서 added 같은 경우, nextId와 todoText를 액션으로 가져옴)
// * useImmerReducer 응 사용하면 draft 로 사용 가능
export default function todoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false });
      break;
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      // insertAt 인덱스에 새로운 객체 추가
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
    }
    case "deleted": {
      const { deleteId } = action;
      // 원본 배열을 수정하지 않은 상태에서 반환을 하므로 return 사용 가능
      return draft.filter((item) => item.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      const target = draft.find((item) => item.id === id);
      target.done = done;
      break;
    }
    case "reverse": {
      return draft.toReversed();
    }
    default: {
      throw Error("알 수 없는 액션 타입: " + action.type);
    }
  }
}
