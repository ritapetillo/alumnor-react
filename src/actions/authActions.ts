import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGOUT_LOADING,
  LOGOUT_SUCESS,
  LOGOUT_ERROR,
} from "./types";
import axios from "axios";
import { Dispatch } from "react";
import { LoginDispachTypes } from "../interfaces/redux/actions/login";
import {
  getCurrentUserApi,
  linkUserToZoom,
  loginApi,
  logoutApi,
} from "../api/userApi";
import { getCurrentUserCoursesAsInstructorAction } from "./courseAction";

export const loginAction = (email: string, password: string) => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  try {
    const logginingIn = await loginApi({ email, password });
    if (logginingIn) {
      //@ts-ignore
      dispatch(getCurrentUserAction());
    } else throw Error;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getCurrentUserAction = () => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const zoomLink = await linkUserToZoom();
    const currentUser = await getCurrentUserApi();
    if (currentUser) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: currentUser,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logoutAction = () => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  dispatch({
    type: LOGOUT_LOADING,
  });
  try {
    const loggingOut = await logoutApi();
    dispatch({
      type: LOGOUT_SUCESS,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_ERROR,
    });
  }
};
