import { useScrollTrigger } from "@material-ui/core";
import IUser from "../interfaces/IUser";

interface IEnrollment {
  courseId: {
    _id: string;
  };
}

const isEnrolled = (user: IUser, courseId: string) => {
  if (user && user.enrollments) {
    return user.enrollments.some(
      (enrollment: any) => enrollment.courseId._id === courseId
    );
  } else return false;
};
export default isEnrolled;
