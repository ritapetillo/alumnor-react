import { OPEN_MODAL, CLOSE_MODAL } from "../../../actions/types";

export interface OpenModal {
  type: typeof OPEN_MODAL;
  payload?: { isOpen: boolean; type: string };
}
export interface CloseModal {
  type: typeof CLOSE_MODAL;
  payload?: { isOpen: boolean; type: string };
}

export type ModalDispachTypes = OpenModal | CloseModal;
