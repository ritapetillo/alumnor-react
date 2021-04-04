import {
  GET_COURSE_PUBLIC_DETAILS,
  PUBLIC_ROUTE_ERROR,
  PUBLIC_ROUTE_LOADING,
} from "../actions/types";
import { PublicDispachTypes } from "../interfaces/redux/actions/public";
import IPublicRoutesState from "../interfaces/redux/states/IPublicRoutesState";

const initialState: IPublicRoutesState = {
  currentCoursePage: null,
  coursesVisitedHistory: [],
  errorMsg: null,
  isLoading: false,
};

const publicReducer = (state = initialState, action: PublicDispachTypes) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSE_PUBLIC_DETAILS:
      return {
        ...state,
        currentCoursePage: payload,
        isLoading: false,
      };
    case PUBLIC_ROUTE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PUBLIC_ROUTE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload?.message,
        [payload?.type]: null,
      };

    default:
      return state;
  }
};

export default publicReducer;
