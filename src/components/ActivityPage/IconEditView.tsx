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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getCurrentCourseAction } from "../../actions/courseAction";
import { deleteActivity } from "../../api/courseApi";
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
  const params: { activityId: string; id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteAction = async () => {
    try {
      const activityToDelete = await deleteActivity(
        params.id,
        params.activityId
      );
      console.log(activityToDelete);
      if (activityToDelete) {
        dispatch(getCurrentCourseAction(params.id));
        history.push(`/courses/${params.id}/main`);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDeleteAction()}
          />
        </>
      )}
    </IconsEditViewWrapper>
  );
};

export default IconEditView;
