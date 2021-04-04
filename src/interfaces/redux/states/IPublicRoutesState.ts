import { ICourse } from "./ICourseInitialState";

interface IPublicRoutesState {
  currentCoursePage: ICourse | null;
  coursesVisitedHistory: string[] | null;
  errorMsg: string | null;
  isLoading: boolean;
}

export default IPublicRoutesState;
