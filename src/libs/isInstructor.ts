import IUser from "../interfaces/IUser";
import { ICourse } from "../interfaces/redux/states/ICourseInitialState";

const isInstructor = (currentUser: IUser, course: ICourse) => {
  if (course.instructors && currentUser._id) {
    const isTeacher = course.instructors.filter((instructor: any) => {
      return instructor._id === currentUser._id;
    });
    console.log(isTeacher);
    return isTeacher;
  }
};
export default isInstructor;
