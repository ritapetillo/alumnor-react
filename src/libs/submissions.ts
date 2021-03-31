import { IActivity } from "../interfaces/redux/states/ICourseInitialState";

export const isSubmitted = (userId: string, activity: IActivity | any) => {
  if (activity && activity.submissions) {
    const submitted = activity.submissions.some(
      (sub: any) => sub.userId._id === userId 
    );
    console.log(submitted);
    return submitted;
  }
};


export const isSubmittedSimple = (userId: string, activity: IActivity | any) => {
  if (activity && activity.submissions) {
    const submitted = activity.submissions.some(
      (sub: any) => sub.userId === userId
    );
    console.log(submitted);
    return submitted;
  }
};
