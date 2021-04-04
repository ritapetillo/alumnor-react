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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getCurrentCourseAction } from "../../actions/courseAction";
import { deleteActivity } from "../../api/courseApi";
import isInstructor from "../../libs/isInstructor";
import { RootStore } from "../../store";
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
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const isCurrentInstructor = currentCourse.isCurrentCourseInstructor;

  useEffect(() => {
    console.log("hjhjh");
  }, [params, currentCourse]);

  const handleDeleteAction = async () => {
    try {
      const activityToDelete = await deleteActivity(
        params.id,
        params.activityId
      );
      if (activityToDelete) {
        dispatch(getCurrentCourseAction(params.id));
        history.push(`/courses/${params.id}/main`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isCurrentInstructor) {
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
  } else return <div></div>;
};

export default IconEditView;
