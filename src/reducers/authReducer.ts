import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../actions/types";
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
        user: payload,
        isAuth: true,
        isLoading: false,
        errorMsg: "",
      };
    case LOGIN_LOADING:
      return {
        user: {},
        isLoading: true,
        isAuth: false,
        errorMsg: "",
      };
    case LOGIN_FAIL:
      return {
        user: {},
        isLoading: false,
        isAuth: false,
        errorMsg: "Login failed",
      };
    default:
      return state;
  }
};

export default authReducer;
