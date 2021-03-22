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
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
