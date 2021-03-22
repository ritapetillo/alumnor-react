import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toggleModalAction } from "../../actions/modalActions";
import { roles } from "../../libs/roles";
import { RootStore } from "../../store";
import { Col, Row } from "../../styles/grid";
import { Card } from "../../styles/uiKit";
import CreateCourseForm from "../CreateCourseForm";
import Modal from "../Modal";
import { CourseCard, CreateNewCard } from "./courselist.elements";

interface CourseListProps {
  courses: Array<Object>;
  type: string;
}
const CourseList = ({ courses, type }: CourseListProps) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);
  const history = useHistory();
  const handleModal = () => {
    dispatch(toggleModalAction(true, "newCourse"));
  };
  const instructorCourses = useSelector(
    (state: RootStore) => state.courses.cursesAsInstructor
  );
  const Courses = useMemo(() => {
    return type === roles.INSTRUCTOR ? instructorCourses : [];
  }, [type]);

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
        {Courses.map((course: any) => (
          <Col lg={4} md={6} sm={12}>
            <CourseCard onClick={() => history.push(`/courses/${course._id}`)}>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
            </CourseCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CourseList;
