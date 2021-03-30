import IUser from "../../IUser";
import { ICourse } from "./ICourseInitialState";

export interface IFeedsInitialState {
  currentFeeds: IFeed[] | [];
  isLoading: boolean;
  errorMsg: null;
  newFeed: IFeed | null;
}

export default interface IFeed {
  text: string;
  authorId: IUser;
  courseId: string | ICourse;
  likes: string[];
  media: string[];
  comments: [
    {
      text: string;
      authorId: string | IUser;
      likes: string[];
    }
  ];
}
