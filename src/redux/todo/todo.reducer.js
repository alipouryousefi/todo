import TodoActionType from "./todo.type";
import { addItem, removeItem } from "./todo.utils";
const INITIAL_STATE = {
  todo_items: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionType.ADD_ITEM_TODO:
      return {
        ...state,
        todo_items: addItem(state.todo_items, action.payload)
      };
    case TodoActionType.REMOVE_ITEM_TODO:
      return {
        ...state,
        todo_items: removeItem(state.todo_items, action.payload)
      };
    case TodoActionType.UNDO:
      return {
        ...state,
        todo_items: [...state.todo_items, action.payload]
      };
    default:
      return state;
  }
};

export default todoReducer;
