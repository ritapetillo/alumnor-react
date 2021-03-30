import styled from "styled-components";
import { ModalWrapper } from "../Modal/modal.elements";
interface IModalMainWrap {
  width?: number | string;
  height?: number | string;
}
export const ModalMainWrap = styled(ModalWrapper)<IModalMainWrap>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;

  & > .modal__body {
    width: ${(props) => props.width || "80vw"} !important;
    height: ${(props) => props.height || "80vh"} !important;
  }
`;
