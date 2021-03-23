import {
  COURSE_ERROR,
  COURSE_LOADING,
  CREATE_NEW_COURSE,
  GET_CURRENT_USER_COURSES_AS_INSTRUCTOR,
  GET_CURRENT_COURSE,
  CREATE_NEW_COURSE_SECTION,
  GET_CURRENT_SECTION,
} from "../actions/types";
import { CourseDispachTypes } from "../interfaces/redux/actions/course";
import ICourseInitialState from "../interfaces/redux/states/ICourseInitialState";

const initialState: ICourseInitialState = {
  currentCourse: {},
  currentSection: {},
  currentActivity: {},
  errorMsg: "",
  isLoading: false,
  newCourse: "",
  cursesAsInstructor: [],
  newSection: "section",
};

const courseReducer = (
  state = initialState,
  { type, payload }: CourseDispachTypes
) => {
  switch (type) {
    case COURSE_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
      };
    case CREATE_NEW_COURSE:
      return {
        ...state,
        isLoading: false,
        newCourse: payload,
        errorMsg: "",
      };
    case CREATE_NEW_COURSE_SECTION:
      return {
        ...state,
        isLoading: false,
        newSection: payload,
        errorMsg: "",
      };
    case GET_CURRENT_USER_COURSES_AS_INSTRUCTOR:
      return {
        ...state,
        isLoading: false,
        cursesAsInstructor: payload,
        errorMsg: "",
      };
    case GET_CURRENT_COURSE:
      return {
        ...state,
        isLoading: false,
        currentCourse: payload,
        errorMsg: "",
      };
    case GET_CURRENT_SECTION:
      return {
        ...state,
        isLoading: false,
        currentSection: payload,
        errorMsg: "",
      };
    case COURSE_ERROR:
      return {
        ...state,
        isLoading: false,
        [payload.type]: "",
        errorMsg: payload.errorMsg,
      };
    default:
      return initialState;
  }
};

export default courseReducer;
