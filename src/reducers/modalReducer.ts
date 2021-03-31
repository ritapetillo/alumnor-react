import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MAIN_MODAL } from "../actions/types";
import { ModalDispachTypes } from "../interfaces/redux/actions/modal";
import IModalInitialState from "../interfaces/redux/states/IModalInitialState";

const initialState: IModalInitialState = {
  isOpen: false,
  type: "",
  isMainOpen: false,
};

const modalReducer = (state = initialState, action: ModalDispachTypes) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        type: payload.type,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        type: "",
      };
    case TOGGLE_MAIN_MODAL:
      return {
        ...state,
        isMainOpen: !state.isMainOpen,
        type: payload.type,
      };

    default:
      return state;
  }
};

export default modalReducer;
