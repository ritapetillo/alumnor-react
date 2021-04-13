import IUser from "../interfaces/IUser";
import { ICourse } from "../interfaces/redux/states/ICourseInitialState";

const isInstructor = (currentUser: IUser, course: ICourse) => {
  if (course.instructors && currentUser._id) {
    const isTeacher = course.instructors.filter((instructor: any) => {
      return instructor._id === currentUser._id;
    });

    return isTeacher.length > 0;
  }
};

export const isInstructorNoPopulate = async (
  currentUser: IUser,
  course: ICourse
) => {
  if (course.instructors && currentUser._id) {
    const isTeacher = course.instructors.filter((instructor: any) => {
      return instructor === currentUser._id;
    });

    return isTeacher.length > 0;
  }
};
export default isInstructor;
