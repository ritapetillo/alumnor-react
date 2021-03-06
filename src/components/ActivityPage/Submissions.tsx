import { DropzoneArea } from "material-ui-dropzone";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import { Row, RowColumn } from "../../styles/grid";
import moment from "moment";
import {
  Input,
  InputContainer,
  LittleButtonSpans,
  SpanLink,
} from "../../styles/uiKit";
import {
  ButtonDark,
  SubmissionWrap,
  SubmissionDoneWrap,
} from "./activityPage.elements";
import { RiCloseFill } from "react-icons/ri";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  submitAssignment,
  uploadSubmissionDocuments,
} from "../../api/courseApi";
import { useParams } from "react-router";
import { findSubmission, isSubmitted } from "../../libs/submissions";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { AiOutlineFileDone } from "react-icons/ai";
import { selectActivityAction } from "../../actions/courseAction";
import { FaMarker } from "react-icons/fa";

interface ISubmission {
  edit: boolean;
  activity?: IActivity;
  refreshActivity: () => void;
  grade?: string;
  createdAt?: Date;
}

const Submissions = ({ activity, edit, refreshActivity }: ISubmission) => {
  const [uploads, setUploads] = useState<[] | any>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [link, setLink] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const inputLink = useRef<any>();
  const params: { id: string; activityId: string } = useParams();
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const [studentSubmission, setStudentSubmission] = useState<
    ISubmission | undefined
  >();
  const dispatch = useDispatch();

  useEffect(() => {
    if (activity && activity.type === "assignment") {
      const submission = findSubmission(currentUser._id, activity);
      setStudentSubmission(submission);
    }
  }, [activity]);

  const handleUpload = async (files: any) => {
    const newUploads = uploads;
    newUploads.push(files);
    await setUploads(files);
  };
  const handleSave = async () => {
    if (links.length == 0) {
      await setLinks([link]);
      setLink("");
    }
    if (links.length > 0 || uploads.length > 0) {
      const data = {
        links,
      };
      const submission = await submitAssignment(
        params.id,
        params.activityId,
        data
      );
      if (submission) {
        const formData = new FormData();
        uploads.map((upload: any) => {
          formData.append("files", upload);
        });
        const submit = await uploadSubmissionDocuments(
          params.id,
          submission._id,
          formData
        );
      }
      refreshActivity();
      dispatch(selectActivityAction(params.activityId));
    }
  };
  const handleEnter = (e?: React.KeyboardEvent<HTMLInputElement> | "") => {
    if (e) {
      if (e.keyCode === 13) {
        setLinks(() => [...links, link]);
        e.currentTarget.value = "";
      }
    } else {
      setLinks(() => [...links, link]);
      inputLink!.current!.value = "";
    }
  };

  const linkDisplay = useMemo(() => {
    return links.map((link: string, index: number) => (
      <LittleButtonSpans>
        {link}
        <RiCloseFill
          onClick={() => {
            setLinks(() =>
              links.filter((linkSelected) => linkSelected !== link)
            );
          }}
          style={{ cursor: "pointer" }}
        />
      </LittleButtonSpans>
    ));
  }, [links]);

  return (
    <>
      {isSubmitted(currentUser._id, activity) ? (
        <SubmissionDoneWrap>
          <AiOutlineFileDone />
          <h4>
            Submitted on{" "}
            {studentSubmission &&
              moment(studentSubmission.createdAt).format("MM/DD/YYYY hh:mm a")}
          </h4>
          {studentSubmission && studentSubmission.grade && (
            <>
              {" "}
              <FaMarker />
              <h4>Graded: {studentSubmission && studentSubmission.grade}</h4>
            </>
          )}
        </SubmissionDoneWrap>
      ) : (
        <SubmissionWrap>
          <RowColumn>
            <span>You can submit links or upload documents</span>
            <InputContainer>
              <input
                ref={inputLink}
                type="text"
                placeholder="http://"
                onKeyUp={(e) => handleEnter(e)}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
              <BsPlusCircleFill onClick={() => handleEnter("")} />
            </InputContainer>
            <h4>Links submitted: </h4>
            <Row> {linkDisplay}</Row>

            <DropzoneArea
              onChange={(files: any) => {
                handleUpload(files);
              }}
            />
          </RowColumn>
          {links.length > 0 || uploads.length > 0 ? (
            <ButtonDark onClick={handleSave}>Submit</ButtonDark>
          ) : (
            <ButtonDark onClick={handleSave}>Add</ButtonDark>
          )}
        </SubmissionWrap>
      )}
    </>
  );
};

export default Submissions;
