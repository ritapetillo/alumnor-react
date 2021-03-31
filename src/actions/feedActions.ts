import {
  CREATE_NEW_FEED,
  GET_ALL_FEEDS,
  FEEDS_LOADING,
  FEEDS_ERROR,
  SELECT_FEED,
} from "./types";

import { FeedsDispachTypes } from "../interfaces/redux/actions/feeds";
import { Dispatch } from "react";
import {
  createNewFeed,
  getAllFeedByCourseId,
  editFeed,
  deleteFeed,
  createNewComment,
  deleteComment,
} from "../api/feedsApi";
import { toggleMainModalAction } from "./modalActions";
import { ICourse } from "../interfaces/redux/states/ICourseInitialState";
import IFeed from "../interfaces/redux/states/IFeedsInitialState";

export const createNewFeedAction = (courseId: string, data: {}) => async (
  dispatch: Dispatch<FeedsDispachTypes>
) => {
  try {
    dispatch({
      type: FEEDS_LOADING,
      payload: "",
    });
    const newFeed = await createNewFeed(courseId, data);
    if (!newFeed) throw Error;
    dispatch({
      type: CREATE_NEW_FEED,
      payload: newFeed,
    });
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: "newFeed",
        errorMsg: "There was an error creating this feed",
      },
    });
  }
};

export const getAllCourseFeeds = (courseId: string) => async (
  dispatch: Dispatch<FeedsDispachTypes>
) => {
  try {
    dispatch({
      type: FEEDS_LOADING,
      payload: "",
    });
    const feeds = await getAllFeedByCourseId(courseId);
    if (!feeds) throw Error;
    dispatch({
      type: GET_ALL_FEEDS,
      payload: feeds,
    });
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};

export const deleteAFeed = (courseId: string | ICourse, id: string) => async (
  dispatch: Dispatch<FeedsDispachTypes | any>
) => {
  try {
    if (typeof courseId == "string") {
      const feed = await deleteFeed(courseId, id);
      if (!feed) throw Error;
      dispatch(getAllCourseFeeds(courseId));
    }
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};

export const selectedFeedAction = (feed: IFeed) => async (
  dispatch: Dispatch<FeedsDispachTypes | any>
) => {
  try {
    dispatch({
      type: SELECT_FEED,
      payload: { selectedFeed: feed },
    });
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};

export const editAFeed = (
  courseId: string | ICourse,
  id: string,
  data: {}
) => async (dispatch: Dispatch<FeedsDispachTypes | any>) => {
  try {
    if (typeof courseId == "string") {
      const feed = await editFeed(courseId, id, data);
      if (!feed) throw Error;
      dispatch(getAllCourseFeeds(courseId));
    }
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};

export const createANewComment = (
  courseId: string | ICourse,
  feedId: string,
  data: {}
) => async (dispatch: Dispatch<FeedsDispachTypes | any>) => {
  try {
    if (typeof courseId == "string") {
      const feed = await createNewComment(courseId, feedId, data);
      if (!feed) throw Error;
      dispatch(getAllCourseFeeds(courseId));
    }
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};

export const deleteAComment = (
  courseId: string | ICourse,
  feedId: string,
  commentId: string
) => async (dispatch: Dispatch<FeedsDispachTypes | any>) => {
  try {
    if (typeof courseId == "string") {
      const feed = await deleteComment(courseId, feedId, commentId);

      console.log("here");
      dispatch(getAllCourseFeeds(courseId));
    }
  } catch (err) {
    dispatch({
      type: FEEDS_ERROR,
      payload: {
        type: " currentFeeds",
        errorMsg: "There was an error retrieving this course feeds",
      },
    });
  }
};
