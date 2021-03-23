import styled from "styled-components";
import { Card } from "../../styles/uiKit";

export const ActivityFormWrap = styled.div`
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: 20px 40px;

  height: 100%;
  overflow-y: scroll;

  .arrow-bottom {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    bottom: 20px;
    left: 0;
    font-size: 24px;
    padding: 20px 40px;
    cursor: pointer;
  }
  .progress-bar {
    top: 30px;
  }
`;

export const ActivityTypeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 30px;
    margin-bottom: 20px;
  }

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.text};
  }
  &.active {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const ActivityStep = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  &.activity-type {
    @media (max-width: 768px) {
      margin-top: 250px;
    }
  }
`;
