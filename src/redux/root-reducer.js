import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import doneReducer from "./done/done.reducer";
import todoReducer from "./todo/todo.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  todo: todoReducer,
  done: doneReducer
});

export default persistReducer(persistConfig, rootReducer);
