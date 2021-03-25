import { TOGGLE_SIDE_RIGHT } from "./types";
import { Dispatch } from "react";
import { SideDispachTypes } from "../interfaces/redux/actions/sidebar";

export const toggleSidebarAction = (
  bool: boolean,
  typeRight: string = ""
) => async (dispatch: Dispatch<SideDispachTypes>) => {
  dispatch({
    type: TOGGLE_SIDE_RIGHT,
    payload: { isRightOpen: bool, typeRight },
  });
};
