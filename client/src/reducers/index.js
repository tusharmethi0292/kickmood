import { combineReducers } from "redux";
import * as authReducer from "./authReducers";
import * as errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});