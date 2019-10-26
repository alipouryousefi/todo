import DoneActionType from "./done.type";
import { removeItem } from "./done.utils";
const INITIAL_STATE = {
  done_items: []
};

const doneReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DoneActionType.ADD_ITEM_DONE:
      return {
        ...state,
        done_items: [...state.done_items, action.payload]
      };
    case DoneActionType.REMOVE_ITEM_DONE:
      return {
        ...state,
        done_items: removeItem(state.done_items, action.payload)
      };
    default:
      return state;
  }
};

export default doneReducer;
