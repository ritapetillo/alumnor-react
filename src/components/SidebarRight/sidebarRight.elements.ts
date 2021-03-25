import styled, { keyframes,css } from "styled-components";
import { slideIn, slideOut } from "../../styles/animations";
import { SideBar } from "../Sidebar/sidebar.elements";

export const SidebarRightWrap = styled(SideBar)<{ open: boolean }>`
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 444;

  ${(props) =>
    props.open
      ? css`
          display: block;
          animation: ${slideIn} 0.5s forwards;
        `
      : css`
          display: block;
          animation: ${slideOut} 0.5s forwards;
        `}
`;
