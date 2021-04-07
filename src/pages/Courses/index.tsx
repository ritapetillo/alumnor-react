import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseList from "../../components/CourseList";
import Login from "../../components/Login";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import { ButtonSidebar } from "../../components/Sidebar/sidebar.elements";
import { roles } from "../../libs/roles";
import { RootStore } from "../../store";
import { Col, Row, CenteredRow } from "../../styles/grid";
import { Card, SwitchRoles } from "../../styles/uiKit";
import { CoursePage, CoursePageMain } from "./courses.elements";
import Loader from "react-loader-spinner";
import { getCurrentUserCoursesAsInstructorAction } from "../../actions/courseAction";
import withDashSidebar from "../../HOC/withDashSidebar";

const Courses = () => {
  const [role, setRole] = useState(roles.STUDENT);
  const isLoading = useSelector((state: RootStore) => state.courses.isLoading);
  const roleUser = useSelector((state: RootStore) => state.auth.user.role);
  const dispatch = useDispatch();
  useEffect(() => {
    if (roleUser !== "student") setRole(roles.INSTRUCTOR);
    dispatch(getCurrentUserCoursesAsInstructorAction());
  }, []);

  const currentBoard = useMemo(() => {
    if (role === roles.STUDENT) {
      return <CourseList type={roles.STUDENT} />;
    } else {
      return <CourseList type={roles.INSTRUCTOR} />;
    }
  }, [role]);

  return (
    <CoursePageMain>
      <Row>
        {roleUser !== "student" && (
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
        )}
      </Row>
      {currentBoard}
    </CoursePageMain>
  );
};

export default withDashSidebar(Courses);
