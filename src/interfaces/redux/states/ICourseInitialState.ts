interface ICourseInitialState {
  currentCourse?: ICourse | {};
  isLoading: boolean;
  errorMsg: string;
  newCourse?: string;
  cursesAsInstructor: [ICourse] | [] | "";
  newSection?: string | "";
}

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  highlights?: [string];
  price?: string;
  picture?: string;
  instructors?: [string];
  startDate?: Date;
  endDate?: Date;
  liveSchedule?: [Date];
  sections?: [string];
  category: string;
}

export default ICourseInitialState;
