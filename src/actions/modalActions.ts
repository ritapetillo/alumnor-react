import { OPEN_MODAL, CLOSE_MODAL, SET_COURSE_EDIT_MODE, TOGGLE_MAIN_MODAL } from "./types";
import { Dispatch } from "react";
import { ModalDispachTypes } from "../interfaces/redux/actions/modal";

export const toggleModalAction = (bool: boolean, type: string = "") => async (
  dispatch: Dispatch<ModalDispachTypes>
) => {
  if (bool === true) {
    dispatch({
      type: OPEN_MODAL,
      payload: { isOpen: bool, type:type },
    });
  } else {
    dispatch({
      type: CLOSE_MODAL,
      payload: { isOpen: bool, type },
    });
  }
};


export const toggleMainModalAction = (bool: boolean) => async (
  dispatch: Dispatch<ModalDispachTypes>
) => {
 
    dispatch({
      type: TOGGLE_MAIN_MODAL,
      payload: { isOpen: bool, type:"" },
    });

};

