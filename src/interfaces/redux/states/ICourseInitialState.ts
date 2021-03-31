interface ICourseInitialState {
  currentCourse?: ICourse | {};
  currentSection?: ISection | {};
  currentActivity?: IActivity | {};
  isLoading: boolean;
  errorMsg: string;
  newCourse?: string;
  cursesAsInstructor: [ICourse] | [] | "";
  newSection?: string | "";
  isEditing: boolean;
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
  submissions?: [ISubmission];
  courseId: string;
  sectionId: string;
  recordingLink?: string;
  videoLink?: string;
  liveMeeting: IZoomLink;
  createdAt: Date;
}

export interface IZoomLink {
  created_at?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  join_url: string;
  settings?: Settings;
  password: string;
  start_time: Date;
}
export interface Settings {
  alternative_hosts?: string;
  approval_type?: number;
  audio?: string;
  auto_recording?: string;
  close_registration?: boolean;
  cn_meeting?: boolean;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  global_dial_in_countries?: string[] | null;
  global_dial_in_numbers?: GlobalDialInNumbersEntity[] | null;
  breakout_room: BreakoutRoom;
  start_time?: string;
  start_url?: string;
  status?: string;
  timezone?: string;
  topic?: string;
  type?: number;
  uuid?: string;
}
export interface GlobalDialInNumbersEntity {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: string;
}
export interface BreakoutRoom {
  enable?: boolean;
  rooms?: RoomsEntity[] | null;
  host_video?: boolean;
  in_meeting?: boolean;
  join_before_host?: boolean;
  mute_upon_entry?: boolean;
  participant_video?: boolean;
  registrants_confirmation_email?: boolean;
  use_pmi?: boolean;
  waiting_room?: boolean;
  watermark?: boolean;
  registrants_email_notification?: boolean;
}
export interface RoomsEntity {
  name?: string;
  participants?: string[] | null;
}

export interface ISubmission {
  _id: string;
  userId: string;
  assignmentId: string;
  courseId: string;
  uploads: [string];
  links: [string];
}
export default ICourseInitialState;
