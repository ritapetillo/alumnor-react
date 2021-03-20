import {
  faPlus,
  faHamburger,
  faBars,
  faColumns,
  faBookOpen,
  faIdBadge,
  faMailBulk,
  faEnvelope,
  faUsers,
  faCog,
  faQuestion,
  faToggleOff,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonSidebar, SideBar, SideBarMenu } from "./sidebar.elements";
import { Divider, Logo } from "../../styles/libs";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

const Sidebar = () => {
  const user = useSelector((state: RootStore) => state.auth.user);

  return (
    <SideBar>
      <SideBarMenu>
        <Toggle />

        <NavLink to="/dashboard" activeClassName="active">
          <ButtonSidebar>
            <FontAwesomeIcon icon={faColumns} />
            Dashboard
          </ButtonSidebar>
        </NavLink>
        <NavLink to="/courses" activeClassName="active">
          <ButtonSidebar>
            <FontAwesomeIcon icon={faBookOpen} />
            My Courses
          </ButtonSidebar>
        </NavLink>
        <NavLink to="/favorites" activeClassName="active">
          <ButtonSidebar>
            <FontAwesomeIcon icon={faHeart} />
            Favorites
          </ButtonSidebar>
        </NavLink>
        {user.role !== "student" && (
          <ButtonSidebar>
            <FontAwesomeIcon icon={faUsers} />
            My Students
          </ButtonSidebar>
        )}
        <ButtonSidebar>
          <FontAwesomeIcon icon={faEnvelope} />
          Inbox
        </ButtonSidebar>
        <ButtonSidebar>
          <FontAwesomeIcon icon={faIdBadge} />
          Profile
        </ButtonSidebar>
        <Divider />
        <ButtonSidebar>
          <FontAwesomeIcon icon={faCog} />
          Settings
        </ButtonSidebar>
        <ButtonSidebar>
          <FontAwesomeIcon icon={faQuestion} />
          Help
        </ButtonSidebar>
      </SideBarMenu>

      <div></div>
    </SideBar>
  );
};

export default Sidebar;
