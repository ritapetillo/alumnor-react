import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import modalReducer from "./modalReducer";
import sidebarReducer from "./sidebarReducer";
import themeReducer from "./themeReducer";
import { withReduxStateSync } from "redux-state-sync";
import feedsReducer from "./feedsReducer";

export default combineReducers({
  auth: authReducer,
  theme: themeReducer,
  courses: courseReducer,
  modal: modalReducer,
  sidebar: sidebarReducer,
  feeds: feedsReducer,
});
