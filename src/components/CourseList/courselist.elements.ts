import styled from "styled-components";
import { Card } from "../../styles/uiKit";

export const CreateNewCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  svg {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const CourseCard = styled(Card)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColorLighter};
  padding: 0;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  transition: transform 0.2s ease-in-out;
  &:hover {
    -webkit-box-shadow: 6px 5px 29px 0px #bfbfbf;
    box-shadow: 6px 5px 29px 0px #bfbfbf;
    img {
    }
  }
  h4 {
    width: 100%;
    text-align: left;
    padding: 0px 20px 0 10px;
    font-size: 16px;
  }
  svg {
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  }
`;
