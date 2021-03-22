import { OPEN_MODAL, CLOSE_MODAL } from "./types";
import { Dispatch } from "react";
import { ModalDispachTypes } from "../interfaces/redux/actions/modal";

export const toggleModalAction = (bool: boolean, type: string = "") => async (
  dispatch: Dispatch<ModalDispachTypes>
) => {
  if (bool === true) {
    dispatch({
      type: OPEN_MODAL,
      payload: { isOpen: bool, type },
    });
  } else {
    dispatch({
      type: CLOSE_MODAL,
      payload: { isOpen: bool, type },
    });
  }
};
