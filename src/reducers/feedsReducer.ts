import {
  CREATE_NEW_FEED,
  GET_ALL_FEEDS,
  FEEDS_ERROR,
  FEEDS_LOADING,
} from "../actions/types";
import { FeedsDispachTypes } from "../interfaces/redux/actions/feeds";
import ICourseInitialState from "../interfaces/redux/states/ICourseInitialState";
import { IFeedsInitialState } from "../interfaces/redux/states/IFeedsInitialState";

const initialState: IFeedsInitialState = {
  currentFeeds: [],
  isLoading: false,
  errorMsg: null,
  newFeed: null,
};

const feedsReducer = (
  state = initialState,
  { type, payload }: FeedsDispachTypes
) => {
  switch (type) {
    case FEEDS_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
      };
    case CREATE_NEW_FEED:
      return {
        ...state,
        isLoading: false,
        newFeed: payload,
        errorMsg: "",
      };
    case GET_ALL_FEEDS:
      return {
        ...state,
        isLoading: false,
        currentFeeds: payload,
        errorMsg: "",
      };

    case FEEDS_ERROR:
      return {
        ...state,
        isLoading: false,
        [payload.type]: "",
        errorMsg: payload.errorMsg,
      };
    default:
      return state;
  }
};

export default feedsReducer;
