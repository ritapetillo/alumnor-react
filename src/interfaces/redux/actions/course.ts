import {
  COURSE_LOADING,
  CREATE_NEW_COURSE,
  COURSE_ERROR,
  GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
  GET_CURRENT_COURSE,
  CREATE_NEW_COURSE_SECTION,
} from "../../../actions/types";
import IAuthInitialState from "../states/IAuthInitialState";
import { ICourse } from "../states/ICourseInitialState";

export interface CourseLoading {
  type: typeof COURSE_LOADING;
  payload?: any;
}
export interface CreateNewCourse {
  type: typeof CREATE_NEW_COURSE;
  payload: string;
}
export interface CreateNewSection {
  type: typeof CREATE_NEW_COURSE_SECTION;
  payload: string;
}
export interface GetCurrentUserCoursesAsInstructor {
  type: typeof GET_CURRENT_USER_COURSES_AS_INSTRUCTOR;
  payload: [ICourse];
}
export interface GetCurrentCourse {
  type: typeof GET_CURRENT_COURSE;
  payload: ICourse;
}
export interface CourseError {
  type: typeof COURSE_ERROR;
  payload: {
    errorMsg: string;
    type: string;
  };
}

export type CourseDispachTypes =
  | CourseLoading
  | CourseError
  | CreateNewCourse
  | GetCurrentUserCoursesAsInstructor
  | GetCurrentCourse
  | CreateNewSection;
