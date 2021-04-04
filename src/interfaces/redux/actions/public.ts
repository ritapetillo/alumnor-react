import {
  GET_COURSE_PUBLIC_DETAILS,
  PUBLIC_ROUTE_ERROR,
  PUBLIC_ROUTE_LOADING,
} from "../../../actions/types";
import { ICourse } from "../states/ICourseInitialState";

type payload = ICourse | null | { message: string; type: string } | any;

export interface getCoursePublicDetails {
  type: typeof GET_COURSE_PUBLIC_DETAILS;
  payload: payload;
}
export interface publicRouteLoading {
  type: typeof PUBLIC_ROUTE_LOADING;
  payload: payload;
}
export interface publicRouteError {
  type: typeof PUBLIC_ROUTE_ERROR;
  payload: payload;
}

export type PublicDispachTypes =
  | getCoursePublicDetails
  | publicRouteError
  | publicRouteLoading;
