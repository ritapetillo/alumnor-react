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
import CourseDetails from "../../components/CourseDetails";
import ModalFeeds from "../../components/ModalMain";
import FeedForm from "../../components/FeedForm";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Course = () => {
  const dispatch = useDispatch();
  const params: { courseId: string; activityId: string } = useParams();
  const isLoading = useSelector((state: RootStore) => state.courses.isLoading);
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);
  const mainModal = useSelector((state: RootStore) => state.modal.isMainOpen);

  useEffect(() => {
    const { id }: any = params;
    if (id) {
      dispatch(getCurrentCourseAction(id));
    }
  }, [params.courseId, modalStatus, currentUser]);

  const mainModalComponent = useMemo(() => {
    if (mainModal)
      return (
        <ModalFeeds height={"400px"} width={"50vw"}>
          <FeedForm />
        </ModalFeeds>
      );
  }, [mainModal]);

  const ComponetToLoad = useMemo(() => {
    if (params.activityId !== "main") {
      return <ActivityPage />;
    } else {
      return <CourseDetails />;
    }
  }, [params]);

  if (isLoading)
    return (
      <>
        <BarLoader
          color={"#00bbf0"}
          loading={isLoading}
          css={override}
          height={4}
          width={"100vw"}
        />
      </>
    );
  else {
    return (
      <CoursePageMain>
        {ComponetToLoad}
        {mainModalComponent}
      </CoursePageMain>
    );
  }
};

export default withCourseSidebar(Course);
