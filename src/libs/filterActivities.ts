import { AnyARecord } from "node:dns";
import {
  IActivity,
  ISection,
} from "../interfaces/redux/states/ICourseInitialState";

export const sumAllActivities = (sections: ISection[]) => {
  const activities = sections.reduce(
    (acc: any, section: ISection) => acc.concat(section.activities),
    []
  );

  return activities;
};

export const filteredActivities = (
  activities: IActivity[],
  criteria: string
) => {
  const upcomingAssignments = activities
    .filter((activity) => activity.type === criteria)
    .sort((a: any, b: any) => b.createdAt - a.createdAt);
  return upcomingAssignments;
};

export const filteredActivitiesFromSections = (
  sections: ISection[],
  criteria: string
) => {
  const activities = sumAllActivities(sections);
  const upcomingAssignments = activities
    .filter((activity: IActivity) => activity.type === criteria)
    .sort((a: any, b: any) => b.createdAt - a.createdAt);
  return upcomingAssignments;
};
