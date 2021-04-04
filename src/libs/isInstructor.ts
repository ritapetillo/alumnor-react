import IUser from "../interfaces/IUser";
import { ICourse } from "../interfaces/redux/states/ICourseInitialState";

const isInstructor = (currentUser: IUser, course: ICourse) => {
  console.log("jkjkj");
  return course.instructors?.some(
    (instructor: any) => instructor._id === currentUser._id
  );
};
export default isInstructor;
