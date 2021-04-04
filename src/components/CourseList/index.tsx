import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentUserCoursesAsInstructorAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { roles } from "../../libs/roles";
import { RootStore } from "../../store";
import { Col, ImageCoverDiv, Row, SpaceBetweenRow } from "../../styles/grid";
import { Card, MenuAppearing } from "../../styles/uiKit";
import Coursecard from "../CourseCard";
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
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  useEffect(() => {
    dispatch(getCurrentUserCoursesAsInstructorAction());
  }, []);
  useEffect(() => {
    dispatch(getCurrentUserCoursesAsInstructorAction());
  }, [modalStatus]);

  const handleModal = () => {
    dispatch(toggleModalAction(true, "newCourse"));
  };
  const instructorCourses = useSelector(
    (state: RootStore) => state.courses.cursesAsInstructor
  );
  const Courses = useMemo(() => {
    if (type === roles.INSTRUCTOR) {
      return coursesInstructor?.map((course: ICourse) => (
        <Col lg={4} md={6} sm={12}>
          <Coursecard course={course} />
        </Col>
      ));
    } else {
      return currentUser.enrollments?.map((enrollment: any) => (
        <Col lg={4} md={6} sm={12}>
          <Coursecard course={enrollment.courseId} />
        </Col>
      ));
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
