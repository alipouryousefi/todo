import TodoActionType from "./todo.type";

export const addItem = item => ({
  type: TodoActionType.ADD_ITEM_TODO,
  payload: item
});

export const removeItem = item => ({
  type: TodoActionType.REMOVE_ITEM_TODO,
  payload: item
});

export const undoItem = item => ({
  type: TodoActionType.UNDO,
  payload: item
});
