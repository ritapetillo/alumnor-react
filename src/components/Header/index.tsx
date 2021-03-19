import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { getCurrentUserAction } from "../../actions/authActions";
import Dropdown from "./Dropdown";
import userEvent from "@testing-library/user-event";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState("");
  const [showAuthDrop, setShowAuthDrop] = useState(false);
  const auth = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAction());
  }, []);

  const handleModal = useCallback(
    (component: string = "", action) => {
      setComponent(component);
      setShowModal(action);
    },
    [showModal]
  );

  const authSection = useMemo(() => {
    if (!auth.isAuth) {
      return (
        <>
          <span onClick={() => handleModal("login", true)}>Sign In</span>
          <span onClick={() => handleModal("signup", true)}>Sign Up</span>
        </>
      );
    } else {
      return (
        <>
          <h4>Hi {auth.user?.firstName}</h4>
          <div
            className="header__navbar-auth-avatar"
            onClick={() => setShowAuthDrop(!showAuthDrop)}
          >
            <img src={auth.user?.picture} alt="" />
          </div>
          {showAuthDrop && <Dropdown menu={"auth"} user={auth?.user} />}
        </>
      );
    }
  }, [auth,showAuthDrop]);

  const modal = useMemo(
    () =>
      showModal && <Modal component={component} handleModal={handleModal} />,
    [showModal, handleModal, component]
  );
  return (
    <>
      <header className="header">
        <div className="header__navbar">
          <div className="header__navbar-logo">Alumnor</div>
          <span className="header__navbar-link">
            Browse
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <div className="header__navbar-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="What would you like to learn?" />
          </div>
          <div className="header__navbar-auth">{authSection}</div>
        </div>
      </header>
      {modal}
    </>
  );
};

export default Header;
