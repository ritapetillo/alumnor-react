import React, { Component, useMemo } from "react";
import Login from "../Login";
// import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Signup from "../SignUp";
import CreateCourseForm from "../CreateCourseForm";
import { ModalWrapper } from "./modal.elements";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { toggleModalAction } from "../../actions/modalActions";
import CreateSectionForm from "../CreateSectionForm";
import ActivityForm from "../ActivityForm";

export interface IModalProps {
  component: string | {} | null;
  handleModal: (component: string, action: boolean) => void;
}

const Modal = () => {
  const modalComponent = useSelector((state: RootStore) => state.modal.type);
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(toggleModalAction(false, ""));
  };
  const componentToLoad = useMemo(() => {
    switch (modalComponent) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "newCourse":
        return <CreateCourseForm />;
      case "newSection":
        return <CreateSectionForm />;
      case "newActivity":
        return <ActivityForm />;
      default:
        return "";
    }
  }, [modalComponent, handleModal]);
  return (
    <ModalWrapper>
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <span className="modal__body__close" onClick={() => handleModal()}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        {componentToLoad}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
