import {
  COURSE_ERROR,
  COURSE_LOADING,
  CREATE_NEW_COURSE,
  CREATE_NEW_COURSE_SECTION,
  GET_CURRENT_COURSE,
  GET_CURRENT_SECTION,
  GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
  SELECT_ACTIVITY,
  SET_COURSE_EDIT_MODE,
  STUDENT_ACTIVITIES_ERROR,
  STUDENT_ACTIVITIES_LOADING,
  STUDENT_ACTIVITIES_SUCCESS,
  COURSE_SUBMISSIONS_ERROR,
  COURSE_SUBMISSIONS_LOADING,
  COURSE_SUBMISSIONS_SUCCESS,
} from "./types";
import axios from "axios";
import { CourseDispachTypes } from "../interfaces/redux/actions/course";
import { Dispatch } from "react";
import {
  createNewCourse,
  getCurrentUserCoursesAsInstructor,
  getCourseById,
  createANewSession,
  getActivityById,
  getAllActivitiesCurrentStudent,
  getAllSubmissionByCourse,
} from "../api/courseApi";
import {
  IActivity,
  ISection,
} from "../interfaces/redux/states/ICourseInitialState";
import isInstructor from "../libs/isInstructor";
import IUser from "../interfaces/IUser";
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

export const getCurrentCourseAction = (id: string, user?: IUser) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });
    let course = await getCourseById(id);
    if (!course) throw Error;
    if (user) {
      const isCurrentCourseInstructor = isInstructor(user, course);
      course = {
        ...course,
        isCurrentCourseInstructor,
      };
    }

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

export const getCurrentSectionAction = (data: ISection) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_LOADING,
    });

    dispatch({
      type: GET_CURRENT_SECTION,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "currentSection",
        errorMsg: "There was an error selecting this section",
      },
    });
  }
};

export const selectActivityAction = (id: string) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    const activity: IActivity = await getActivityById(id);
    if (activity) {
      dispatch({
        type: SELECT_ACTIVITY,
        payload: activity,
      });
    } else throw Error;
  } catch (err) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        type: "currentActivity",
        errorMsg: "There was an error selecting this activity",
      },
    });
  }
};

export const toggleEditCourseMode = (status: boolean) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  dispatch({
    type: SET_COURSE_EDIT_MODE,
    payload: status,
  });
};

export const getStudentActivities = () => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: STUDENT_ACTIVITIES_LOADING,
      payload: null,
    });
    const activities = await getAllActivitiesCurrentStudent();
    if (!activities) throw Error;
    dispatch({
      type: STUDENT_ACTIVITIES_SUCCESS,
      payload: activities,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ACTIVITIES_ERROR,
      payload: "There was an error loading your activities as student",
    });
  }
};

export const getCourseSubmissions = (id: string) => async (
  dispatch: Dispatch<CourseDispachTypes>
) => {
  try {
    dispatch({
      type: COURSE_SUBMISSIONS_LOADING,
      payload: null,
    });
    const submissions = await getAllSubmissionByCourse(id);

    dispatch({
      type: COURSE_SUBMISSIONS_SUCCESS,
      payload: submissions,
    });
  } catch (err) {
    dispatch({
      type: COURSE_SUBMISSIONS_ERROR,
      payload: "There was an error loading the submissions for this course",
    });
  }
};
