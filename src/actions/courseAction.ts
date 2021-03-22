import {
  COURSE_ERROR,
  COURSE_LOADING,
  CREATE_NEW_COURSE,
  CREATE_NEW_COURSE_SECTION,
  GET_CURRENT_COURSE,
  GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
} from "./types";
import axios from "axios";
import { CourseDispachTypes } from "../interfaces/redux/actions/course";
import { Dispatch } from "react";
import {
  createNewCourse,
  getCurrentUserCoursesAsInstructor,
  getCourseById,
  createANewSession,
} from "../api/courseApi";
export const createNewCourseAction = (data: {}) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const newCourse = await createNewCourse(data);
    if (!newCourse) throw Error;
    dispatch({
      type: CREATE_NEW_COURSE,
      payload: newCourse,
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "newCourse",
        errorMsg: "There was an error creating this course",
      },
    });
  }
};

export const getCurrentUserCoursesAsInstructorAction = () => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const courses = await getCurrentUserCoursesAsInstructor();
    if (!courses) throw Error;
    dispatch({
      type: GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
      payload: courses,
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "cursesAsInstructor",
        errorMsg: "There was an error retrieving your courses as instructor",
      },
    });
  }
};

export const getCurrentCourseAction = (id: string) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const course = await getCourseById(id);
    if (!course) throw Error;
    dispatch({
      type: GET_CURRENT_COURSE,
      payload: course,
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "currentCourse",
        errorMsg: "There was an error retrieving this course",
      },
    });
  }
};

export const createANewSectionAction = (id: string, data: {}) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    const session = await createANewSession(id, data);
    if (!session) throw Error;
    dispatch({
      type: CREATE_NEW_COURSE_SECTION,
      payload: session,
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "newSesson",
        errorMsg: "There was an error creating a new session for this course",
      },
    });
  }
};
