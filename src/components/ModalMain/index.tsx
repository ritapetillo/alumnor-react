import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMainModalAction } from "../../actions/modalActions";
import { ModalMainWrap } from "./modalfeeds.elements";
interface IModal {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

const ModalMain = ({ children, height, width }: IModal) => {
  const dispatch = useDispatch();

  return (
    <ModalMainWrap width={width} height={height}>
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <span className="modal__body__close">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => dispatch(toggleMainModalAction(false))}
          />
        </span>
      </div>
      {children}
    </ModalMainWrap>
  );
};

export default ModalMain;
