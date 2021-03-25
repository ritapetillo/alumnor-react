import { TOGGLE_SIDE_RIGHT } from "../../../actions/types";

export interface ToggleRight {
  type: typeof TOGGLE_SIDE_RIGHT;
  payload?: { isRightOpen: boolean; typeRight: string };
}


export type SideDispachTypes = ToggleRight;
