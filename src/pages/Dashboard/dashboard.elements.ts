import styled from "styled-components";
import { Card } from "../../styles/libs";

export const DashBoard = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.primaryColor};
`;

export const DashBoardMain = styled.div`
  width: 100vw;
  & > div {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    height: fit-content;
    justify-content: space-around;
    width: 100%;
  }
  .fc-today-button {
    display: none;
  }
  .fc .fc-button {
    padding: 0px;
  }
`;

export const CardNotes = styled(Card)`
  margin-top: 20px;
  max-width: 700px;
  min-height: 400px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
`;

export const CalendarDiv = styled.div`
  color: ${(props) => props.theme.textSecondary};
  .fc {
    color: ${(props) => props.theme.textSecondary};
  }
`;
