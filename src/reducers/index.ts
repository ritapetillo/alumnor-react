import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import modalReducer from "./modalReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  auth: authReducer,
  theme: themeReducer,
  courses: courseReducer,
  modal: modalReducer,
});
