import styled from "styled-components";

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
