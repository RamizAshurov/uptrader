import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

import { setToLocalStorage } from "../utils/localStorage";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)

store.subscribe(() => setToLocalStorage(store.getState()))

export default store