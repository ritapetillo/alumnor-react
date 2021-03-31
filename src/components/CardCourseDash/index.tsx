import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import { CardCourseDashWrap } from "./cardcourse.elements";
import moment from "moment";
import { SpanLink } from "../../styles/uiKit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isSubmittedSimple } from "../../libs/submissions";
import { RootStore } from "../../store";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineCheck,
} from "react-icons/ai";

const iconToReturn = (userId: string, activity: IActivity) => {
  if (isSubmittedSimple(userId, activity)) {
    return <AiFillCheckCircle />;
  } else {
    return <AiFillCloseCircle style={{ color: "darkred" }} />;
  }
};
const dateToRender = (activity: IActivity) => {
  if (activity.type === "assignment" && activity.deadline) {
    return moment(activity.deadline).format("DD/MM");
  } else if (activity.type === "live") {
    return moment(activity.liveMeeting?.start_time).format("DD/MM hh:mm a");
  }
};

const CardCourseDash = ({
  activities,
  title,
}: {
  activities: IActivity[];
  title: string;
}) => {
  const currentUserId = useSelector((state: RootStore) => state.auth.user._id);

  return (
    <CardCourseDashWrap>
      <h3>{title}</h3>
      {activities.map(
        (activity: IActivity, index: number) =>
          index < 5 && (
            <Link to={`/courses/${activity.courseId}/${activity._id}`}>
              {" "}
              <span>
                <div>
                  {dateToRender(activity)} {activity.title}
                </div>
                <div>
                  {activity.type === "assignment" &&
                    iconToReturn(currentUserId, activity)}
                </div>
              </span>
            </Link>
          )
      )}
    </CardCourseDashWrap>
  );
};

export default CardCourseDash;
