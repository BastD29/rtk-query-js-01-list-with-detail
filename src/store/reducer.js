import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productReducer,
});

export { rootReducer };
