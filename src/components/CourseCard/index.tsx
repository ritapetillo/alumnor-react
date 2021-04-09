import React, { useEffect, useMemo, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentUserCoursesAsInstructorAction } from "../../actions/courseAction";
import { deleteCourse } from "../../api/courseApi";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import {isInstructorNoPopulate} from "../../libs/isInstructor";
import { RootStore } from "../../store";
import { ImageCoverDiv, SpaceBetweenRow } from "../../styles/grid";
import { MenuAppearing } from "../../styles/uiKit";
import { CourseCard } from "../CourseList/courselist.elements";

const Coursecard = ({ course }: { course: ICourse | any }) => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootStore) => state.auth.user);

  const handleDeleteCourse = async () => {
    try {
      const deletedCourse = await deleteCourse(course._id);
      if (deletedCourse) {
        dispatch(getCurrentUserCoursesAsInstructorAction());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const menuAppearing = useMemo(() => {
    if (menu) {
      return (
        <MenuAppearing>
          <div onClick={handleDeleteCourse}>
            <span>Delete</span>
            <AiFillDelete />
          </div>
        </MenuAppearing>
      );
    } else return "";
  }, [menu]);
  return (
    <CourseCard>
      <ImageCoverDiv
        width={"100%"}
        height={"200px"}
        radius={"10px 10px 0 0"}
        onClick={() => history.push(`/courses/${course._id}/main`)}
      >
        <img
          src={
            course.picture ||
            "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"
          }
          alt=""
        />
      </ImageCoverDiv>
      <SpaceBetweenRow>
        <h4>{course.title}</h4>
        {isInstructorNoPopulate(currentUser, course) ? (
          <BsThreeDotsVertical onClick={() => setMenu(!menu)} />
        ) : (
          <div></div>
        )}
      </SpaceBetweenRow>
      {menuAppearing}
    </CourseCard>
  );
};

export default Coursecard;
