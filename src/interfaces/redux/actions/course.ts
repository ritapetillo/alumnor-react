import {
  COURSE_LOADING,
  CREATE_NEW_COURSE,
  COURSE_ERROR,
  GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
  GET_CURRENT_COURSE,
  CREATE_NEW_COURSE_SECTION,
  GET_CURRENT_SECTION,
  SELECT_ACTIVITY,
  SET_COURSE_EDIT_MODE,
} from "../../../actions/types";
import IAuthInitialState from "../states/IAuthInitialState";
import { IActivity, ICourse, ISection } from "../states/ICourseInitialState";

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
export interface GetCurrentSection {
  type: typeof GET_CURRENT_SECTION;
  payload: ISection;
}

export interface SelectActivity {
  type: typeof SELECT_ACTIVITY;
  payload: IActivity;
}
export interface CourseError {
  type: typeof COURSE_ERROR;
  payload: {
    errorMsg: string;
    type: string;
  };
}
export interface ToggleEditMode {
  type: typeof SET_COURSE_EDIT_MODE;
  payload: boolean;
}

export type CourseDispachTypes =
  | CourseLoading
  | CourseError
  | CreateNewCourse
  | GetCurrentUserCoursesAsInstructor
  | GetCurrentCourse
  | CreateNewSection
  | GetCurrentSection
  | SelectActivity
  | ToggleEditMode;
