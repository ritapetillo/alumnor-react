import styled from "styled-components";
import { SpaceBetweenRow } from "../../styles/grid";
import { Card, CloudDetails } from "../../styles/uiKit";
import { SideBar } from "../Sidebar/sidebar.elements";

export const SidebarCourseWrapper = styled(SideBar)`
  padding: 20px 0px;
  width: 20%;
  min-width: 300px;
  height: calc(100vh - 40px);
  border-right: 1px solid ${(props) => props.theme.primaryColorLighter};
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 100px;
  position: relative;
  top: 0;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .loader {
    height: 100vh;
    margin-top: 200px;
    div {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }
  .arrow {
    padding: 10px 10px;
    cursor: pointer;
    svg {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
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
    font-size: 14px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    svg {
      margin-right: 10px;
      margin-left: -0px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SectionWrapper = styled.div`
  width: 100%;
`;

export const CardSection = styled(Card)`
  position: relative;
  background-color: rgb(221, 221, 221, 0.15);
  min-height: 0;
  padding: 5px 20px;
  text-align: left;
  border-radius: 0;
  margin-bottom: 0px;
  margin-top: 4px;
  max-height: fit-content;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  .input-section {
    width: 70%;
  }
  /* div {
    display: flex;
    flex-direction: column;
  } */
  .arrow-section {
    bottom: 3px;
    right: 25px;
    color: ${(props) => props.theme.text};
  }

  h4 {
    margin-top: 6px;
    margin-bottom: 6px;
  }
  span {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const ButtonAdd = styled.span`
  display: block;
  color: ${(props) => props.theme.text};
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: -8px;
  width: fit-content;
  text-align: center;
  .more-icon {
    transition: opacity ease-in-out 0.2s;
    /* transition-delay: 0.5s; */
    &:hover {
      opacity: 0;
    }
  }
  &:hover {
    opacity: 0.7;
    right: -0px;
    & > svg {
      opacity: 0;
    }
    div {
      opacity: 1;
      transform: translateX(10px);
    }
  }
  svg {
    margin-right: 10px;
    margin-left: -0px;
  }
  div {
    opacity: 0;
    transition: opacity ease-in-out 0.2s;
    display: flex;
    margin-left: 5px;
  }
`;

export const Activity = styled.span`
  display: block;
  background-color: ${(props) => props.theme.secondayColor};
  color: ${(props) => props.theme.text};
  padding: 8px 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 5px;
  width: 100%;
  text-align: left;
  justify-content: start;
  -webkit-justify-content: flex-start;
  &:hover {
    opacity: 0.7;
  }
  svg {
    margin-right: 10px;
    margin-left: -0px;
  }
  &.activity-list-item {
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: 15px;
    }
    svg {
      margin-right: 15px;
      font-size: 12px;
    }
  }
`;

export const CloudSidebar = styled(CloudDetails)`
  bottom: -40px;
  right: -50%;
  border-radius: 3px;
  height: 20px;
  font-size: 8px;
`;

export const ImageSideBar = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  &:hover {
    span {
      opacity: 1;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  span {
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    cursor: pointer;
  }
`;

export const HeaderSidebar = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.primaryColorLighter};
  padding: 10px 20px;
  width: 100%;
  span {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const SideBarLoader = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  z-index: 3333;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RowTitle = styled(SpaceBetweenRow)`
  max-height: 50px;
  position: relative;

  span {
    padding: 0 0px !important;
    margin: 0;
  }
  svg {
    font-size: 25px;
    cursor: pointer;
    &:hover {
      transform: translateY(1px);
    }
  }
`;
