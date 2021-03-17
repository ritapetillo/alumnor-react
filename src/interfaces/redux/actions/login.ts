import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../actions/types";
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

export type LoginDispachTypes = LoginLoading | LoginSuccess | LoginFail;
