import { combineReducers } from "redux";
<<<<<<< HEAD
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
=======
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
>>>>>>> 1fd1b4621ab3c9fdd9baa83f9ded5f7e2ba9e765
export default combineReducers({
  auth: authReducers,
  errors: errorReducers
});