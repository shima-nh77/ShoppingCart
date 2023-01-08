import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
const initStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk,logger))
    return store;
  };
export const wrapper = createWrapper(initStore);
