import styled from "styled-components";
import { IconsEditViewWrapper } from "../ActivityPage/activityPage.elements";

export const CourseDetailsWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const CourseDetailsEditWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin-top: 10px;
  padding-bottom: 200px;
  .form-control {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.text};
  }
  .rdtPicker {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const CourseDetailsIconWrapper = styled(IconsEditViewWrapper)`
  max-width: fit-content;
  height: 80px;
  align-items: center;
  right: 100px;
  top: 80px;
  h5 {
    font-size: 12px;
  }
`;
