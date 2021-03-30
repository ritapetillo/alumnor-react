import React, { useEffect } from "react";
import {
  IActivity,
  ISubmission,
} from "../../interfaces/redux/states/ICourseInitialState";
import {
  faFile,
  faFileImage,
  faFilePdf,
  faFilePowerpoint,
  faFileWord,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "../../styles/grid";
import { Card, SpanLink } from "../../styles/uiKit";
import { StudentSubmissionWrap } from "./studentsubmissions.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineLink, AiFillEdit } from "react-icons/ai";
import { Table } from "../../styles/uiKit";
import Moment from "react-moment";
import Grade from "./Grade";

const transformLink = (link: string) => {
  if (link.includes("http")) {
    return link;
  } else {
    return "http://" + link;
  }
};

export const renderIcon = (path: string) => {
  if (path.includes(".pdf")) {
    return <FontAwesomeIcon icon={faFilePdf} />;
  } else if (path.includes(".doc")) {
    return <FontAwesomeIcon icon={faFileWord} />;
  } else if (path.includes(".ppt")) {
    return <FontAwesomeIcon icon={faFilePowerpoint} />;
  } else if (
    path.includes(".png") ||
    path.includes(".jpg") ||
    path.includes(".jpeg")
  ) {
    return <FontAwesomeIcon icon={faFileImage} />;
  } else {
    return <FontAwesomeIcon icon={faFile} />;
  }
};
interface StudentSubmission {
  activity: IActivity;
}

const StudentSubmission = ({ activity }: StudentSubmission) => {
  useEffect(() => {}, []);
  return (
    <StudentSubmissionWrap>
      <h4>Submissions</h4>
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
        {activity.submissions &&
          activity.submissions.map((sub: any) => (
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
                      activity &&
                      activity.deadline &&
                      sub.createdAt > activity.deadline &&
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
      {/* <Row>
        {activity.submissions &&
          activity.submissions.map((sub: any) => (
            <Col sm={12} md={6} lg={4}>
              <Card>
                <h4>
                  {sub.userId.firstName} {sub.userId.lastName}
                </h4>
                {sub.links &&
                  sub.links.map((link: any) => <SpanLink>'ciao'</SpanLink>)}
                {sub.uploads &&
                  sub.uploads.map((up: any) => <SpanLink>{up.path}</SpanLink>)}
              </Card>
            </Col>
          ))}
      </Row> */}
    </StudentSubmissionWrap>
  );
};

export default StudentSubmission;
