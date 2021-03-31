import styled from "styled-components";
import { Row } from "../../styles/grid";
import { Card } from "../../styles/uiKit";

// export const CoursePublic = styled.div`
//   display: flex;
//   background-color: ${(props) => props.theme.primaryColor};
//   /* height: 100vh; */
//   @media screen and (max-width: 768px) {
//     flex-direction: column-reverse;
//   }
// `;

export const CoursePageWrap = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 30vh;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
  }
`;

export const CoursePageWrapBottom = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 30vh;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
  }
`;

export const CoursePageCard = styled(Card)`
  background-color: ${(props) => props.theme.primaryColorLighter};
  /* border: 1px solid ${(props) => props.theme.secondaryColor}; */
  p{
    font-size:16px;
  }
`;
