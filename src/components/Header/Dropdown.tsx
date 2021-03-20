import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import IUser from "../../interfaces/IUser";
import "./style.scss";

interface IDropdownProps {
  menu: string;
  user: IUser;
}

const Dropdown = ({ menu, user }: IDropdownProps) => {
  const dropdownMenu = useMemo(() => {
    switch (menu) {
      case "auth":
        return (
          <>
            <div className="header__dropdown-profile">
              <div className="header__dropdown-profile-avatar">
                <img src={user.picture} alt="" />
              </div>
              <h4>
                {user.firstName} {user.lastName}
              </h4>
              <h5>{user.role}</h5>
              <button className="header__dropdown-profile-button">
                View Profile
              </button>
            </div>
            <div className="form-separator-light"></div>
            <div className="header__dropwdown-menu">
              <ul>
                <Link to="/dashboard">
                  <li>My Dashboard</li>
                </Link>
                <li>Account Settings</li>
                <li>Refer a Friend</li>
                <li>Help</li>
                <li>Logout</li>
              </ul>
            </div>
          </>
        );
      default:
        return "";
    }
  }, [menu]);

  return <div className="header__dropdown">{dropdownMenu}</div>;
};

export default memo(Dropdown);
