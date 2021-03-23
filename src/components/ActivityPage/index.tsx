import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../../api/courseApi";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import { ActivityPageWrapper } from "./activityPage.elements";
import Materials from "./Materials";

const ActivityPage = () => {
  const params: { activityId: string } = useParams();
  const [activity, setActivity] = useState<IActivity | undefined>();

  const activityToLoad = useMemo(() => {
    if (!activity) return "";
    switch (activity.type) {
      case "materials":
        return <Materials />;
      default:
        return <h1>Default</h1>;
    }
  }, [params, activity]);

  const getActivityData = async () => {
    const activityData: IActivity = await getActivityById(params.activityId);
    if (activityData) {
      setActivity(activityData);
    } else return null;
  };
  useEffect(() => {
    getActivityData();
  }, [params]);
  return (
    <ActivityPageWrapper>
      <h1>{activity && activity.title}</h1>
      {activityToLoad}
    </ActivityPageWrapper>
  );
};

export default ActivityPage;
