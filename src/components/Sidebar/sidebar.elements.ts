import styled from "styled-components";

export const ButtonSidebar = styled.span`
  border-bottom: none;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primaryColor};
  display: block;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 5px 30px;
  margin-top: 10px;
  transition: background ease-in 0.8s;
  border-radius: 40px;
  svg {
    margin-right: 20px;
  }
  :hover {
    background-color: ${(props) => props.theme.primaryColorLighter};
  }
  a {
    text-decoration: none;
    color: inherit;
    color: ${(props) => props.theme.text};
  }
`;

export const SideBar = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  min-width: 250px;
  height: 100vh;
  z-index: 0;
  transition: width ease-in 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.text};
  padding: 30px 10px;
  svg {
    margin-left: 20px;
  }
  a.active span {
    background-color: ${(props) => props.theme.primaryColorLighter};
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const SideBarMenu = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
