import { WindowScrollController } from "@fullcalendar/common";
import React, { memo, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../actions/authActions";
import IUser from "../../interfaces/IUser";
import "./style.scss";

interface IDropdownProps {
  menu: string;
  user: IUser;
  handleDrop: (bool: boolean) => void;
}

const Dropdown = ({ menu, user, handleDrop }: IDropdownProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
              <button
                className="header__dropdown-profile-button"
                onClick={() => {
                  history.push("/profile");
                  handleDrop(false);
                }}
              >
                View Profile
              </button>
            </div>
            <div className="form-separator-light"></div>
            <div className="header__dropwdown-menu">
              <ul>
                <Link to="/dashboard">
                  <li onClick={() => handleDrop(false)}>My Dashboard</li>
                </Link>
                <li
                  onClick={() => {
                    history.push("/courses");
                    handleDrop(false);
                  }}
                >
                  My Courses
                </li>
                <li>Account Settings</li>
                <li>Refer a Friend</li>
                <li>Help</li>
                <li
                  onClick={async () => {
                    await dispatch(logoutAction());
                    window.location.assign("/");
                    handleDrop(false);
                  }}
                >
                  Logout
                </li>
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
