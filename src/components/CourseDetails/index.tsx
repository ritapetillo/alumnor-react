import React, { useMemo } from "react";
import { AiFillEdit, AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditCourseMode } from "../../actions/courseAction";
import { RootStore } from "../../store";
import { IconsEditViewWrapper } from "../ActivityPage/activityPage.elements";
import { CourseDetailsWrapper } from "./coursedetails.elements";
import CourseDetailsEdit from "./CourseDetailsEdit";
import CourseDetailsView from "./CourseDetailsView";

const CourseDetails = () => {
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const isEditing = useSelector((state: RootStore) => state.courses.isEditing);
  const dispatch = useDispatch();

  const componentToLoad = useMemo(() => {
    if (isEditing) {
      return (
        <>
          <IconsEditViewWrapper>
            <AiOutlineClose
              onClick={() => dispatch(toggleEditCourseMode(false))}
            />
          </IconsEditViewWrapper>
          <CourseDetailsEdit />
        </>
      );
    } else
      return (
        <>
          <IconsEditViewWrapper>
            <AiFillSetting
              onClick={() => dispatch(toggleEditCourseMode(true))}
            />
          </IconsEditViewWrapper>
          <CourseDetailsView />
        </>
      );
  }, [isEditing]);

  if (currentCourse) {
    return <CourseDetailsWrapper>{componentToLoad}</CourseDetailsWrapper>;
  } else return <h1>No course</h1>;
};

export default CourseDetails;
