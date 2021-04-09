import styled from "styled-components";
import { Row } from "../../styles/grid";

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.primaryColor};
  color:${props=>props.theme.text}
  /* height: 100vh; */
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const CoursePageMain = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 100vh;
`;
export const CoursePageRow = styled(Row)`
  width: 100vw;
  padding: 50px;
`;
