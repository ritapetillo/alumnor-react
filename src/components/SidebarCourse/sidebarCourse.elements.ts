import styled from "styled-components";
import { Card } from "../../styles/uiKit";
import { SideBar } from "../Sidebar/sidebar.elements";

export const SidebarCourseWrapper = styled(SideBar)`
  padding: 20px 30px;
  width: 20%;
  min-width: 300px;
  height: calc(100vh - 40px);
  border-right: 1px solid ${(props) => props.theme.primaryColorLighter};
  overflow-y: scroll;
  padding-bottom: 100px;

  .arrow {
    padding: 10px 10px;
    cursor: pointer;
    svg {
      font-size: 22px;
      margin-right: 10px;
    }
  }
`;

export const SidebarCourseAddButton = styled.div`
  height: 80px;
  width: 300px;
  color: ${(props) => props.theme.text};
  position: fixed;
  bottom: 0px;
  left: 0;
  background-color: ${(props) => props.theme.primaryColor};
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    background-color: ${(props) => props.theme.primaryColorLighter};
    padding: 0px 8px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    svg {
      margin-right: 10px;
      margin-left: -0px;
    }
  }
`;

export const CardSection = styled(Card)`
  position: relative;
  background-color: rgb(221, 221, 221, 0.15);
  padding-bottom: 80px;
  max-height: fit-content;
  padding: 10px;
  padding-bottom: 80px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonAdd = styled.span`
  display: block;
  background-color: ${(props) => props.theme.primaryColorLighter};
  color: ${(props) => props.theme.text};
  padding: 8px 8px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
  width: 80%;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  svg {
    margin-right: 10px;
    margin-left: -0px;
  }
`;

export const Activity = styled.span`
  display: block;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.text};
  padding: 8px 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 5px;
  width: 100%;
  text-align: left;
  &:hover {
    opacity: 0.7;
  }
  svg {
    margin-right: 10px;
    margin-left: -0px;
  }
`;
