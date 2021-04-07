import { MenuAppearing } from "../../styles/uiKit";
import styled from "styled-components";

export const MenuCourseWrapper = styled(MenuAppearing)`
         top: 30px;
         right: 0px;
         z-index: 45333;
         background-color: white;
         height: fit-content;
         div {
           span,
           svg {
             font-size: 16px;
           }
           &:hover {
             background-color: ${({ theme }) => theme.primaryColorLighter};
           }
         }
       `;
