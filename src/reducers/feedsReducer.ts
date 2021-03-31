import {
  CREATE_NEW_FEED,
  GET_ALL_FEEDS,
  FEEDS_ERROR,
  FEEDS_LOADING,
  SELECT_FEED,
} from "../actions/types";
import { FeedsDispachTypes } from "../interfaces/redux/actions/feeds";
import ICourseInitialState from "../interfaces/redux/states/ICourseInitialState";
import { IFeedsInitialState } from "../interfaces/redux/states/IFeedsInitialState";

const initialState: IFeedsInitialState = {
  currentFeeds: [],
  // newFeed: null,
  isLoading: false,
  errorMsg: null,
  selectedFeed: null,
};

const feedsReducer = (
  state: IFeedsInitialState = initialState,
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
        // newFeed: payload,
        errorMsg: null,
      };
    case GET_ALL_FEEDS:
      return {
        ...state,
        isLoading: false,
        currentFeeds: payload,
        errorMsg: null,
      };

    case SELECT_FEED:
      return {
        ...state,
        isLoading: false,
        selectedFeed: payload.selectedFeed,
      };

    case FEEDS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload.errorMsg,
      };
    default:
      return state;
  }
};

export default feedsReducer;
