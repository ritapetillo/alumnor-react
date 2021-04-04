import {
  GET_COURSE_PUBLIC_DETAILS,
  PUBLIC_ROUTE_ERROR,
  PUBLIC_ROUTE_LOADING,
} from "./types";
import { Dispatch } from "react";
import { PublicDispachTypes } from "../interfaces/redux/actions/public";
import { getPublicCourseById } from "../api/publicApi";

export const getCoursePublicPageDetails = (id: string) => async (
  dispatch: Dispatch<PublicDispachTypes>
) => {
  try {
    dispatch({
      type: PUBLIC_ROUTE_LOADING,
      payload: null,
    });
    const course = await getPublicCourseById(id);
    if (course) {
      dispatch({
        type: GET_COURSE_PUBLIC_DETAILS,
        payload: course,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: PUBLIC_ROUTE_ERROR,
      payload: {
        type: "currentCoursePage",
        message: "There was a problem retreaving this course",
      },
    });
  }
};
