import React, { useMemo, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentUserCoursesAsInstructorAction } from "../../actions/courseAction";
import { deleteCourse } from "../../api/courseApi";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { ImageCoverDiv, SpaceBetweenRow } from "../../styles/grid";
import { MenuAppearing } from "../../styles/uiKit";
import { CourseCard } from "../CourseList/courselist.elements";

const Coursecard = ({ course }: { course: ICourse | any }) => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

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
        <BsThreeDotsVertical onClick={() => setMenu(!menu)} />
      </SpaceBetweenRow>
      {menuAppearing}
    </CourseCard>
  );
};

export default Coursecard;
