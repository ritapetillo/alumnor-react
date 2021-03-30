import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { Row, Col } from "../../styles/grid";
import { InputContainer } from "../../styles/uiKit";
import CourseFeeds from "../CourseFeeds";
import { CourseDetailsWrapper } from "./coursedetails.elements";

const CourseDetailsView = () => {
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );

  return (
    <CourseDetailsWrapper>
      <h2>{currentCourse.title}</h2>
      <Row>
        <Col sm={12} md={10}>
          <CourseFeeds />
        </Col>
      </Row>
    </CourseDetailsWrapper>
  );
};

export default CourseDetailsView;
