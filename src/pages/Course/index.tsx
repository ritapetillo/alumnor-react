import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentCourseAction } from "../../actions/courseAction";
import SidebarCourse from "../../components/SidebarCourse";
import { RootStore } from "../../store";
import { CourseWrapper } from "./course.elements";
import Loader from "react-loader-spinner";

const Course = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isLoading = useSelector((state: RootStore) => state.courses.isLoading);
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);

  useEffect(() => {
    const { id }: any = params;
    if (id) {
      dispatch(getCurrentCourseAction(id));
    }
  }, [params, modalStatus]);

  if (isLoading)
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  else {
    return (
      <CourseWrapper>
        <SidebarCourse></SidebarCourse>
      </CourseWrapper>
    );
  }
};

export default Course;
