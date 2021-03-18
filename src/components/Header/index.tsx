import React, { useCallback, useMemo, useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState("");

  const handleModal = useCallback(
    (component: string = "") => {
      setComponent(component);
      setShowModal(!showModal);
    },
    [showModal]
  );

  const modal = useMemo(
    () =>
      showModal && <Modal component={component} handleModal={handleModal} />,
    [showModal, handleModal]
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
          <div className="header__navbar-auth">
            <span onClick={() => handleModal("login")}>Sign In</span>
            <span>Sign Up</span>
          </div>
        </div>
      </header>
      {modal}
    </>
  );
};

export default Header;
