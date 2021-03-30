import React, { Component, useMemo } from "react";
import Login from "../Login";
// import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalWrapper } from "./modal.elements";

import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import StudentSubmission from "../StudentSubmissions";

export interface IModalProps {
  handleModal: (action: boolean) => void;
  activity: IActivity;
}

const Modal = ({ handleModal, activity }: IModalProps) => {
  return (
    <ModalWrapper>
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <span className="modal__body__close" onClick={() => handleModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <StudentSubmission activity={activity} />
      </div>
    </ModalWrapper>
  );
};

export default Modal;
