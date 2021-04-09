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
import { RootStore } from "../../store";
import { IconsEditViewWrapper } from "./activityPage.elements";
import { FaEdit } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

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
          <>
            <span data-tip="Edit Activity">
              <FaEdit onClick={handleEdit} className={"edit"} />
            </span>

            <ReactTooltip place="bottom" />
          </>
        ) : (
          <>
            <span>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDeleteAction()}
                data-tip="Delete Activity"
                className="delete"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCheck}
                onClick={handleSave}
                className={"edit"}
                data-tip="Finish Editing"
              />
            </span>

            {/* <FontAwesomeIcon icon={faWindowMaximize} onClick={handleEdit} /> */}

            <ReactTooltip place="bottom" />
          </>
        )}
      </IconsEditViewWrapper>
    );
  } else return <div></div>;
};

export default IconEditView;
