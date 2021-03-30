import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MAIN_MODAL,
} from "../../../actions/types";
import { ToggleEditMode } from "./course";

export interface OpenModal {
  type: typeof OPEN_MODAL;
  payload: { isOpen: boolean; type: string };
}
export interface CloseModal {
  type: typeof CLOSE_MODAL;
  payload: { isOpen: boolean; type: string };
}

export interface ToggleMainModal {
  type: typeof TOGGLE_MAIN_MODAL;
  payload: { isOpen: boolean; type: string };
}

export type ModalDispachTypes = OpenModal | CloseModal | ToggleMainModal;
