import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_LOADING, LOGOUT_SUCESS } from "../actions/types";
import IAuthInitialState from "../interfaces/redux/states/IAuthInitialState";

const initialState: IAuthInitialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  errorMsg: "",
};

const authReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        errorMsg: "",
      };
    case LOGIN_LOADING:
      return {
        ...state,
        user: {},
        isLoading: true,
        isAuth: false,
        errorMsg: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: {},
        isLoading: false,
        isAuth: false,
        errorMsg: "Login failed",
      };
    case LOGOUT_SUCESS:
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false,
        errorMsg: "",
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: "Logout failed",
      };
    default:
      return state;
  }
};

export default authReducer;
