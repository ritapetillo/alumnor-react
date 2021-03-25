import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_SIDE_RIGHT } from "../actions/types";
import { SideDispachTypes } from "../interfaces/redux/actions/sidebar";
import ISidebarInitialState from "../interfaces/redux/states/ISidebarInitialState";

const initialState: ISidebarInitialState = {
  isRightOpen: false,
  typeRight: "",
};

const sidebarReducer = (state = initialState, action: SideDispachTypes) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDE_RIGHT:
      return {
        ...state,
        isRightOpen: payload?.isRightOpen,
        typeRight: payload?.typeRight,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
