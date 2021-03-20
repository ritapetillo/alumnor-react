import React from "react";
import Sidebar from "../../components/Sidebar";
import { Row } from "../../styles/grid";
import { Card } from "../../styles/libs";
import { CoursePage, CoursePageMain } from "./courses.elements";

const Courses = () => {
  return (
    <CoursePage>
      <Sidebar />
      <CoursePageMain>
        <Row>
          <Card></Card>
        </Row>
      </CoursePageMain>
    </CoursePage>
  );
};

export default Courses;
