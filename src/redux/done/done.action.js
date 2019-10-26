import DoneActionType from "./done.type";

export const addItemToDone = item => ({
  type: DoneActionType.ADD_ITEM_DONE,
  payload: item
});

export const removeItemFromDone = item => ({
  type: DoneActionType.REMOVE_ITEM_DONE,
  payload: item
});
