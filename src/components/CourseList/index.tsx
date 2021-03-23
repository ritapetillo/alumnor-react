import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentUserCoursesAsInstructorAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { roles } from "../../libs/roles";
import { RootStore } from "../../store";
import { Col, Row } from "../../styles/grid";
import { Card } from "../../styles/uiKit";
import CreateCourseForm from "../CreateCourseForm";
import Modal from "../Modal";
import { CourseCard, CreateNewCard } from "./courselist.elements";

interface CourseListProps {
  type: string;
}
const CourseList = ({ type }: CourseListProps) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);
  const history = useHistory();
  const coursesInstructor = useSelector(
    (state: RootStore) => state.courses.cursesAsInstructor
  );
  useEffect(() => {
    dispatch(getCurrentUserCoursesAsInstructorAction());
  }, []);

  const handleModal = () => {
    dispatch(toggleModalAction(true, "newCourse"));
  };
  const instructorCourses = useSelector(
    (state: RootStore) => state.courses.cursesAsInstructor
  );
  const Courses = useMemo(() => {
    if (type === roles.INSTRUCTOR) {
      return coursesInstructor.map((course: any) => (
        <Col lg={4} md={6} sm={12}>
          <CourseCard
            onClick={() => history.push(`/courses/${course._id}/main`)}
          >
            <h4>{course.title}</h4>
            <p>{course.description}</p>
          </CourseCard>
        </Col>
      ));
    } else {
      return <></>;
    }
  }, [type, modalStatus, coursesInstructor]);

  return (
    <>
      <Row>
        {type === roles.INSTRUCTOR && (
          <Col lg={4} md={6} sm={12}>
            <CreateNewCard onClick={() => handleModal()}>
              <FontAwesomeIcon icon={faPlus} />
              <span>Create New Course</span>
            </CreateNewCard>
          </Col>
        )}
        {Courses}
      </Row>
    </>
  );
};

export default CourseList;
