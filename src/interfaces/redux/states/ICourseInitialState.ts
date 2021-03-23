interface ICourseInitialState {
  currentCourse?: ICourse | {};
  currentSection?: ISection | {};
  currentActivity?: IActivity | {};
  isLoading: boolean;
  errorMsg: string;
  newCourse?: string;
  cursesAsInstructor: [ICourse] | [] | "";
  newSection?: string | "";
}

export interface ISection {
  title: string;
  description: string;
  accessGranted?: [];
  activities?: [IActivity];
  courseId?: string;
  _id: string;
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

export interface IActivity {
  _id: string;
  title: string;
  text?: string;
  links?: [string];
  uploads?: [string];
  deadline?: Date;
  completed?: boolean;
  createdBy: string;
  type: string;
  submissions?: [string];
  courseId: string;
  sectionId: string;
  liveLink?: string;
  recordingLink?: string;
  videoLink?: string;
}

export default ICourseInitialState;
