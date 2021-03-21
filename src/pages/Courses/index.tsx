import React, { useMemo, useState } from "react";
import CourseList from "../../components/CourseList";
import Login from "../../components/Login";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import { ButtonSidebar } from "../../components/Sidebar/sidebar.elements";
import { roles } from "../../libs/roles";
import { Col, Row, CenteredRow } from "../../styles/grid";
import { Card, SwitchRoles } from "../../styles/uiKit";
import { CoursePage, CoursePageMain } from "./courses.elements";

const Courses = () => {
  const [role, setRole] = useState(roles.STUDENT);

  const currentBoard = useMemo(() => {
    if (role === roles.STUDENT) {
      return <CourseList courses={[{ ciao: "ciao" }]} type={roles.STUDENT} />;
    } else {
      return (
        <CourseList
          courses={[{ ciao: "ciao" }, { ciao: "ciao" }]}
          type={roles.INSTRUCTOR}
        />
      );
    }
  }, [role]);

  return (
    <>
      <CoursePage>
        <Sidebar />
        <CoursePageMain>
          <Row>
            <CenteredRow>
              <SwitchRoles
                className={role === roles.STUDENT ? "active" : ""}
                onClick={() => setRole(roles.STUDENT)}
              >
                Student{" "}
              </SwitchRoles>
              <SwitchRoles
                className={role === roles.INSTRUCTOR ? "active" : ""}
                onClick={() => setRole(roles.INSTRUCTOR)}
              >
                Instructor
              </SwitchRoles>
            </CenteredRow>
          </Row>
          {currentBoard}
        </CoursePageMain>
      </CoursePage>
    </>
  );
};

export default Courses;
