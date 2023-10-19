import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardReducer from "../redux/reducers/cardReducer";

const rootReducer = combineReducers({
  card: cardReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
