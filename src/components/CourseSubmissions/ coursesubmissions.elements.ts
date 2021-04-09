import styled from "styled-components";

export const CourseSubmissionssWrapper = styled.div`
  tr {
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.primaryColorLighter};
      opacity: 0.8;
    }
  }
`;
