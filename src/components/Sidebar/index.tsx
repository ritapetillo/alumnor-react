import { faPlus, faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faBars} />
      <div>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default Sidebar;
