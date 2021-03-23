import styled from "styled-components";

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.primaryColor};
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const CoursePageMain = styled.div`
  width: 100vw;
  padding: 50px;
`;
