import {
  CREATE_NEW_FEED,
  GET_ALL_FEEDS,
  FEEDS_LOADING,
  FEEDS_ERROR,
} from "./types";

import { FeedsDispachTypes } from "../interfaces/redux/actions/feeds";
import { Dispatch } from "react";
import {
  createNewFeed,
  getAllFeedByCourseId,
  editFeed,
  deleteFeed,
} from "../api/feedsApi";
import { toggleMainModalAction } from "./modalActions";

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
