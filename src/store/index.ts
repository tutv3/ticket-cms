import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
