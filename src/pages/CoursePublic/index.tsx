import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentCourseAction } from "../../actions/courseAction";
import { RootStore } from "../../store";
import { Col, Row } from "../../styles/grid";
import { CoursePageRow } from "../Course/course.elements";
import {
  CoursePageCard,
  CoursePageWrap,
  CoursePageWrapBottom,
} from "./coursepublic.elements";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core/";
import CourseSideEnroll from "../../components/CourseSideEnroll";
import parse from "html-react-parser";
import IUser from "../../interfaces/IUser";
import { Card } from "@material-ui/core";
import { CourseCard } from "../../components/CourseList/courselist.elements";
import moment from "moment";
import { getCoursePublicPageDetails } from "../../actions/publicActions";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CoursePublic = () => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const currentCourse = useSelector(
    (state: RootStore) => state.public.currentCoursePage
  );
  const isLoading = useSelector((state: RootStore) => state.courses.isLoading);
  useEffect(() => {
    getCourseDetails();
  }, [params.id]);
  const getCourseDetails = async () => {
    await dispatch(getCoursePublicPageDetails(params.id));
  };

  if (isLoading || !currentCourse)
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
      <>
        <CoursePageWrap>
          <CoursePageRow>
            <Col sm={6}>
              <h1>{currentCourse.title}</h1>
              {currentCourse.description && parse(currentCourse?.description)}
              <span>
                Created by{" "}
                {currentCourse?.instructors?.map(
                  (instructor: IUser) =>
                    ` ${instructor.firstName} ${instructor.lastName} `
                )}
              </span>
            </Col>
            <CourseSideEnroll course={currentCourse} />
          </CoursePageRow>
        </CoursePageWrap>
        <CoursePageWrapBottom>
          <Col sm={6}>
            <CoursePageCard>
              <h3>Course Highlights</h3>
              {currentCourse.highlights}
              <h3>Schedule Description</h3>

              {currentCourse.scheduleDescription
                ? parse(currentCourse?.scheduleDescription)
                : ""}
            </CoursePageCard>
          </Col>
        </CoursePageWrapBottom>
      </>
    );
  }
};

export default CoursePublic;
