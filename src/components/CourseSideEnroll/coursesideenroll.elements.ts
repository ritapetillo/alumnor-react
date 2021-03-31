import styled from "styled-components";
import { Card } from "../../styles/uiKit";

export const CourseSideWrap = styled(Card)`
         max-width: 300px;
         position: absolute;
         top: 150px;
         right: 80px;
         padding: 0;
         min-height: 400px;
         background-color: ${(props) => props.theme.primaryColor};
         box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
        
         border-radius: 4px;
         border-bottom: 1px solid #d1d7dc;
       `;

export const CourseSideImageDiv = styled(Card)`
  width: 100%;
  height: 250px;
  padding: 0;
  background-color: ${(props) => props.theme.primaryColor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CourseSideContentDiv = styled(Card)`
  width: 100%;
  height: 250px;
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor};
  h3 {
    font-size: 30px;
  }
`;
