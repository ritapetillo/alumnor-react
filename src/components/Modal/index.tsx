import React, { Component, useMemo } from "react";
import Login from "../Login";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export interface IModalProps {
  component: string | {} | null;
  handleModal: ()=>void
}

const Modal = ({ component,handleModal }: IModalProps) => {
  const componentToLoad = useMemo(() => {
    switch (component) {
      case "login":
        return <Login />;
      default:
        return "";
    }
  }, [component]);
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <span className="modal__body__close" onClick={handleModal}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        {componentToLoad}
      </div>
    </div>
  );
};

export default Modal;
