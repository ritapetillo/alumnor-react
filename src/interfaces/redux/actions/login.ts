import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCESS,
} from "../../../actions/types";
import IAuthInitialState from "../states/IAuthInitialState";

export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: IAuthInitialState;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}
export interface LogoutLoading {
  type: typeof LOGOUT_LOADING;
}
export interface LogoutSuccess {
  type: typeof LOGOUT_SUCESS;
  payload: null;
}
export interface LogoutFail {
  type: typeof LOGOUT_ERROR;
}

export type LoginDispachTypes =
  | LoginLoading
  | LoginSuccess
  | LoginFail
  | LogoutFail
  | LogoutLoading
  | LogoutSuccess;
