import React, { useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { useParams } from "react-router";
import { getAllSubmissionByCourse } from "../../api/courseApi";
import { getAllStudentsPerCourse } from "../../api/userApi";
import IUser from "../../interfaces/IUser";
import { InputContainer, SpanLink, Table } from "../../styles/uiKit";
import { renderIcon } from "../ActivityPage/Materials";
import { CourseSubmissionssWrapper } from "./ coursesubmissions.elements";
import moment from "moment";
import Grade from "../StudentSubmissions/Grade";
import Moment from "react-moment";
import { InputWrapper } from "../CreateCourseForm/createCourseForm.elements";
import { EventInput } from "@fullcalendar/common";
import { Col, Row } from "../../styles/grid";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { getCourseSubmissions } from "../../actions/courseAction";
import { ISubmission } from "../../interfaces/redux/states/ICourseInitialState";
import SubmissionRow from "./SubmissionRow";
const transformLink = (link: string) => {
  if (link.includes("http")) {
    return link;
  } else {
    return "http://" + link;
  }
};

const CourseSubmissions = () => {
  const [submissions, setSubmissions] = useState<ISubmission[] | undefined>();
  const courseSubmissions = useSelector(
    (state: RootStore) => state.courses.currentCourseSubmissions
  );
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllSubmissions();
    return () => {
      dispatch(getCourseSubmissions(params.id));
    };
  }, [params, courseSubmissions.length]);

  const handleSearch = (e: EventInput) => {
    if (courseSubmissions) {
      const search = courseSubmissions.filter(
        (sub: any) =>
          sub.userId.firstName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          sub.userId.lastName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          sub.assignmentId?.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      );
      setSubmissions(search);
    }
  };

  const getAllSubmissions = async () => {
    dispatch(getCourseSubmissions(params.id));
    setSubmissions(courseSubmissions);
  };

  return (
    <CourseSubmissionssWrapper>
      <h2>Assignments Submissions</h2>
      <Row>
        <Col sm={6} md={4}>
          <InputContainer>
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search by assignment or student name/last name"
              onChange={handleSearch}
            />
          </InputContainer>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Assignment</th>
            <th>Uploads</th>
            <th>Links</th>
            <th>Checked</th>
            <th>Grade</th>
            <th>Submission Date</th>
          </tr>
        </thead>
        {submissions &&
          submissions.map((sub: any) => <SubmissionRow sub={sub} />)}
      </Table>
    </CourseSubmissionssWrapper>
  );
};

export default CourseSubmissions;
