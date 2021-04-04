import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectActivityAction } from "../../actions/courseAction";
import { getActivityById } from "../../api/courseApi";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import SidebarRight from "../SidebarRight";
import { ActivityPageWrapper } from "./activityPage.elements";
import Live from "./Live";
import Materials from "./Materials";
import Video from "./Video";
import Assignment from "./Assignment";
import Submissions from "./Submissions";
import { RootStore } from "../../store";
import isInstructor from "../../libs/isInstructor";

const ActivityPage = () => {
  const params: { activityId: string } = useParams();
  const [activity, setActivity] = useState<IActivity | undefined>();
  const dispatch = useDispatch();


  const getActivityData = async () => {
    const activityData: IActivity = await getActivityById(params.activityId);
    dispatch(selectActivityAction(params.activityId));

    if (activityData) {
      setActivity(activityData);
    } else return null;
  };
  useEffect(() => {
    // dispatch(selectActivityAction(params.activityId));

    getActivityData();
  }, [params]);

  const activityToLoad = useMemo(() => {
    if (!activity) {
      console.log("no activity");
      return "";
    }
    if (activity) {
      switch (activity.type) {
        case "materials":
          return (
            <Materials activity={activity} refreshActivity={getActivityData} />
          );
        case "video":
          return (
            <Video activity={activity} refreshActivity={getActivityData} />
          );
        case "live":
          return <Live activity={activity} refreshActivity={getActivityData} />;
        case "assignment":
          return (
            <Assignment activity={activity} refreshActivity={getActivityData} />
          );
        default:
          return <h1>Default</h1>;
      }
    }
  }, [params, activity]);
  return (
    <ActivityPageWrapper>
      <h1>{activity && activity.title}</h1>
      {activityToLoad}
    </ActivityPageWrapper>
  );
};

export default ActivityPage;
