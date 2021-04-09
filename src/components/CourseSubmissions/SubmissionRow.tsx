import React, { useEffect, useMemo, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillGoogleCircle,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";
import { SpanLink } from "../../styles/uiKit";
import { renderIcon } from "../ActivityPage/Materials";
import Grade from "../StudentSubmissions/Grade";
import Moment from "react-moment";
import { ISubmission } from "../../interfaces/redux/states/ICourseInitialState";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { editSubmission } from "../../api/courseApi";
import { useHistory } from "react-router";
const transformLink = (link: string) => {
  if (link.includes("http")) {
    return link;
  } else {
    return "http://" + link;
  }
};

interface SubmissionRow {
  sub: any;
}
const SubmissionRow = ({ sub }: SubmissionRow) => {
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setChecked(sub.checked);
  }, [sub]);

  const iconToReturn = useMemo(() => {
    if (checked) {
      return (
        <ImCheckboxChecked
          style={{ color: "green", cursor: "ponter" }}
          onClick={() => handleSubmitCheck(false)}
        />
      );
    } else {
      return (
        <ImCheckboxUnchecked
          style={{ color: "darkred", cursor: "ponter" }}
          onClick={() => handleSubmitCheck(true)}
        />
      );
    }
  }, [checked]);

  const handleSubmitCheck = async (bool: boolean) => {
    const data = {
      checked: bool,
    };
    const submitChecked = await editSubmission(sub.courseId, sub._id, data);
    if (submitChecked) {
      handleCheck();
    }
  };
  const handleCheck = () => setChecked(!checked);
  return (
    <tr>
      <th>{sub.userId.firstName}</th>
      <th>{sub.userId.lastName}</th>
      <th
        onClick={() => history.push(`./${sub.assignmentId._id}`)}
        style={{ cursor: "pointer" }}
      >
        {sub.assignmentId?.title}
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
            <AiOutlineLink onClick={() => window.open(transformLink(link))} />
          </SpanLink>
        ))}
      </th>
      <th>{iconToReturn}</th>
      <th>
        <Grade
          grade={sub.grade}
          submissionId={sub._id}
          handleCheck={handleCheck}
        />
      </th>
      <th>
        <span
          style={{
            color: `${
              sub.assignmentId &&
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
  );
};

export default SubmissionRow;
