import {
  faEye,
  faEdit,
  faPenSquare,
  faSave,
  fas,
  faCheck,
  faBars,
  faChevronLeft,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IconsEditViewWrapper } from "./activityPage.elements";

interface IconEditViewProps {
  handleEdit: () => void;
  handleSave: () => void;
  state: boolean;
  saved: boolean;
}

const IconEditView = ({
  handleEdit,
  state,
  handleSave,
  saved,
}: IconEditViewProps) => {
  return (
    <IconsEditViewWrapper>
      {!state ? (
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleEdit}
          className={"edit"}
        />
      ) : (
        <>
          {!saved ? (
            <FontAwesomeIcon
              icon={faSave}
              onClick={handleSave}
              className={"edit"}
            />
          ) : (
            <FontAwesomeIcon icon={faCheck} className={"edit"} />
          )}
          <FontAwesomeIcon icon={faWindowMaximize} onClick={handleEdit} />
        </>
      )}
    </IconsEditViewWrapper>
  );
};

export default IconEditView;
