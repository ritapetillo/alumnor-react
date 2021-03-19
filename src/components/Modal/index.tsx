import React, { Component, useMemo } from "react";
import Login from "../Login";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Signup from "../SignUp";

export interface IModalProps {
  component: string | {} | null;
  handleModal: (component:string,action:boolean)=>void
}

const Modal = ({ component,handleModal }: IModalProps) => {
  const componentToLoad = useMemo(() => {
    switch (component) {
      case "login":
        return <Login />;
      case 'signup':
        return <Signup/>
      default:
        return "";
    }
  }, [component,handleModal]);
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <span className="modal__body__close" onClick={()=>handleModal("",false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        {componentToLoad}
      </div>
    </div>
  );
};

export default Modal;
