interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  googleId?: string;
  address?: {};
  picture?: string;
  dateBirth?: Date;
  verified?: boolean;
  role: string;
  enrollments: [{
    courseId:string
  }]
  zoom: {
    zoomId?: string;
    zoomEmail?: string;
    zoomMeetingRoom?: string;
    zoomRefreshToken?: string;
    zoomAccessToken?: string;
  };
}

export default IUser;
