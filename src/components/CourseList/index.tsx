import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { roles } from "../../libs/roles";
import { Col, Row } from "../../styles/grid";
import { Card } from "../../styles/uiKit";
import CreateCourseForm from "../CreateCourseForm";
import Modal from "../Modal";
import { CreateNewCard } from "./courselist.elements";

interface CourseListProps {
  courses: Array<Object>;
  type: string;
}
const CourseList = ({ courses, type }: CourseListProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

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
        {courses.map((course) => (
          <Col lg={4} md={6} sm={12}>
            <Card></Card>
          </Col>
        ))}
      </Row>
      {showModal && <Modal component="newCourse" handleModal={handleModal} />}
    </>
  );
};

export default CourseList;
