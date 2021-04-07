import React, { useEffect, useState } from "react";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { useParams } from "react-router";
import { getAllSubmissionByCourse } from "../../api/courseApi";
import { getAllStudentsPerCourse } from "../../api/userApi";
import IUser from "../../interfaces/IUser";
import { SpanLink, Table } from "../../styles/uiKit";
import { renderIcon } from "../ActivityPage/Materials";
import { CourseSubmissionssWrapper } from "./ coursesubmissions.elements";
import moment from "moment";
import Grade from "../StudentSubmissions/Grade";
import Moment from "react-moment";
const transformLink = (link: string) => {
  if (link.includes("http")) {
    return link;
  } else {
    return "http://" + link;
  }
};

const CourseSubmissions = () => {
  const params: { id: string } = useParams();
  const [submissions, setSubmissions] = useState<IUser[] | undefined>();

  useEffect(() => {
    getAllSubmissions();
  }, [params]);

  const getAllSubmissions = async () => {
    const subs = await getAllSubmissionByCourse(params.id);
    console.log(subs);
    setSubmissions(subs);
  };

  return (
    <CourseSubmissionssWrapper>
      <h2>Assignments Submissions</h2>
      <Table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Uploads</th>
            <th>Links</th>
            <th>Grade</th>
            <th>Submission Date</th>
          </tr>
        </thead>
        {submissions &&
          submissions.map((sub: any) => (
            <tr>
              <th>
                {sub.userId.firstName} {sub.userId.lastName}
              </th>
              <th>
                {sub.uploads.map((upl: { path: string }) => (
                  <SpanLink>
                    <a href={upl.path}>{renderIcon(upl.path)}</a>
                  </SpanLink>
                ))}
              </th>
              <th>
                {sub.links.map((link: string) => (
                  <SpanLink>
                    <AiOutlineLink
                      onClick={() => window.open(transformLink(link))}
                    />
                  </SpanLink>
                ))}
              </th>
              <Grade grade={sub.grade} submissionId={sub._id} />
              <th>
                <span
                  style={{
                    color: `${
                      sub.assignmentId.deadline &&
                      sub.createdAt > sub.assignmentId.deadline &&
                      "red"
                    }`,
                  }}
                >
                  {" "}
                  <Moment format="MM-DD-YYYY hh:mm a">{sub?.createdAt}</Moment>
                </span>
              </th>
            </tr>
          ))}
      </Table>
    </CourseSubmissionssWrapper>
  );
};

export default CourseSubmissions;
