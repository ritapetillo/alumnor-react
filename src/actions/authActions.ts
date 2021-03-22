import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAIL } from "./types";
import axios from "axios";
import { Dispatch } from "react";
import { LoginDispachTypes } from "../interfaces/redux/actions/login";
import { getCurrentUserApi, loginApi } from "../api/userApi";
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
    const currentUser = await getCurrentUserApi();
    console.log(currentUser);
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
