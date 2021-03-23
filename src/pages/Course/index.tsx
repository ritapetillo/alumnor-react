import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentCourseAction } from "../../actions/courseAction";
import SidebarCourse from "../../components/SidebarCourse";
import { RootStore } from "../../store";
import { CourseWrapper } from "./course.elements";
import Loader from "react-loader-spinner";
import { css } from "@emotion/core/";
import BarLoader from "react-spinners/BarLoader";
import { CoursePageMain } from "../Courses/courses.elements";
import ActivityPage from "../../components/ActivityPage";
import withCourseSidebar from "../../HOC/withCourseSidebar";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Course = () => {
  const dispatch = useDispatch();
  const params: { courseId: string; activityId: string } = useParams();
  const isLoading = useSelector((state: RootStore) => state.courses.isLoading);
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);

  useEffect(() => {
    const { id }: any = params;
    if (id) {
      dispatch(getCurrentCourseAction(id));
    }
  }, [params, modalStatus]);

  const ComponetToLoad = useMemo(() => {
    if (params.activityId !=='main') {
      return <ActivityPage />;
    } else {
      return <h1>No activity</h1>;
    }
  }, [params]);

  if (isLoading)
    return (
      <BarLoader
        color={"#00bbf0"}
        loading={isLoading}
        css={override}
        height={4}
        width={"100vw"}
      />
    );
  else {
    return <CoursePageMain>{ComponetToLoad}</CoursePageMain>;
  }
};

export default withCourseSidebar(Course);
