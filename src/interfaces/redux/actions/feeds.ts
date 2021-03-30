import {
  FEEDS_ERROR,
  FEEDS_LOADING,
  CREATE_NEW_FEED,
  GET_ALL_FEEDS,
} from "../../../actions/types";

export interface FeedsLoading {
  type: typeof FEEDS_LOADING;
  payload: any;
}
export interface GetCurrentCourseFeeds {
  type: typeof GET_ALL_FEEDS;
  payload: any;
}
export interface CreateNewFeed {
  type: typeof CREATE_NEW_FEED;
  payload: string;
}
export interface FeedError {
  type: typeof FEEDS_ERROR;
  payload: {};
}

export type FeedsDispachTypes =
  | FeedsLoading
  | CreateNewFeed
  | GetCurrentCourseFeeds
  | FeedError;
