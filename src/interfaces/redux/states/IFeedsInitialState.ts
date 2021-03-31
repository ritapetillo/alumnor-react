import IUser from "../../IUser";
import { ICourse } from "./ICourseInitialState";

export interface IFeedsInitialState {
  currentFeeds: IFeed[] | [];
  isLoading: boolean;
  errorMsg: null;
  selectedFeed: null | IFeed;
  // newFeed: IFeed | null;
}

export default interface IFeed {
  _id: string;
  text: string;
  authorId: IUser;
  courseId: string | ICourse;
  likes: string[];
  media: string[];
  createdAt: Date;
  comments: [IComment];
}

export interface IComment {
  text: string;
  authorId: IUser;
  likes: string[];
  _id: string;
  createdAt: Date;
}
