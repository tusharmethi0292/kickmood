import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger';

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
<<<<<<< HEAD
    applyMiddleware(...middleware),
    
=======
    applyMiddleware(...middleware, logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
>>>>>>> 1fd1b4621ab3c9fdd9baa83f9ded5f7e2ba9e765
  )
);
export default store;


