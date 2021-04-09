import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill"; // Typescript
import { Col, Row, RowColumn } from "../../styles/grid";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import IconEditView from "./IconEditView";
import { modules, formats } from "../../libs/quill";
import {
  deleteFileFromActivity,
  editActivityById,
  uploadDocumentsActivity,
} from "../../api/courseApi";
import { useParams } from "react-router";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import { DropzoneArea } from "material-ui-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileImage,
  faFilePdf,
  faFilePowerpoint,
  faFileWord,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ContentWrap, LinksWrapper } from "./activityPage.elements";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import Submissions from "./Submissions";

import { RootStore } from "../../store";
import StudentSubmission from "../StudentSubmissions";
import ModalSubmission from "../ModalSubmissions";
import { LittleButtonSpans } from "../../styles/uiKit";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
///utilities
export const renderIcon = (path: string) => {
  if (path) {
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
  }
};

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

//////////////////////////////
interface IMaterialProps {
  activity: IActivity | undefined;
  refreshActivity: () => void;
  task?: string;
}

const Materials = ({ activity, refreshActivity, task }: IMaterialProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState<string | undefined>("");
  const [saved, setSaved] = useState(true);
  const [uploads, setUploads] = useState<[] | any>([]);
  const [files, setFiles] = useState<[] | any>([]);
  const [deadline, setDeadline] = useState<string | Date>("");
  const params: { id: string; activityId: string } = useParams();
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setFiles(activity.uploads);
    } else {
      setText("");
    }
  }, [params, activity]);

  //////////HANDLERS///////////////
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleChange = (text: string) => {
    setText(text);
    setSaved(false);
  };
  const handleUpload = async (files: any) => {
    const newUploads = uploads;
    newUploads.push(files);
    await setUploads(files);
    setSaved(false);
  };
  const handleSave = async () => {
    const data = {
      text,
      deadline,
    };
    const activity = await editActivityById(params.id, params.activityId, data);
    const formData = new FormData();
    uploads.map((upload: any) => {
      formData.append("files", upload);
    });
    const upload = await uploadDocumentsActivity(
      params.id,
      params.activityId,
      formData
    );
    if (activity) {
      setSaved(true);
    }
    await refreshActivity();
    handleEdit();
  };

  const handleDeleteFile = async (upload: any) => {
    const deleteFile = deleteFileFromActivity(
      params.id,
      params.activityId,
      upload
    );
    let editedUploads = files;
    editedUploads = editedUploads.filter((up: any) => up.path !== upload.path);
    setFiles(editedUploads);
  };

  const handleModal = (status: boolean) => {
    refreshActivity();
    setModal(status);
  };

  //////////USE MEMO///////////////

  const componentToLoad = useMemo(() => {
    if (edit) {
      return (
        <>
          {activity?.type === "assignment" && (
            <RowColumn>
              {activity.submissions?.length ? (
                <LittleButtonSpans
                  style={{ cursor: "pointer" }}
                  onClick={() => handleModal(true)}
                >
                  {activity.submissions?.length} submissions
                </LittleButtonSpans>
              ) : (
                ""
              )}
              <h4>Assigment Dealine</h4>
              <Datetime
                initialValue={activity.deadline || moment()}
                onChange={(e) => setDeadline(e.toString())}
              />
            </RowColumn>
          )}
          <span>{task || "Write lesson content here"}</span>

          <ReactQuill
            value={text || ""}
            modules={modules}
            onChange={(e) => handleChange(e)}
          />
          <Row className="dropzone">
            <DropzoneArea onChange={(files: any) => handleUpload(files)} />
          </Row>
        </>
      );
    } else {
      return (
        <>
          <ContentWrap>
            <h3>{activity?.type.capitalize()}</h3>
            <p>{text ? parse(text) : ""}</p>
          </ContentWrap>

          {activity && activity.type == "assignment" && (
            <ContentWrap>
              <h3>{activity?.type.capitalize()} Deadline</h3>
              {moment(activity.deadline).format("MM-DD-YYYY hh:mm a")}
            </ContentWrap>
          )}

          <h3>Uploads</h3>
        </>
      );
    }
  }, [edit, text, params, files, saved]);

  //////////////////COMPONENTS//////////////////////

  return (
    <>
      <IconEditView
        state={edit}
        handleEdit={handleEdit}
        handleSave={handleSave}
        saved={saved}
      />

      {componentToLoad}
      <LinksWrapper>
        {files.map((upload: any) => {
          return (
            <Col sm={6} md={3}>
              {edit && (
                <FontAwesomeIcon
                  className="delete-file"
                  icon={faTrash}
                  onClick={() => handleDeleteFile(upload)}
                />
              )}
              <a href={upload.path}>
                {renderIcon(upload.path)}
                <h4>{upload.name}</h4>
                <h4 className="file-size">{formatBytes(upload.size)}</h4>
              </a>
            </Col>
          );
        })}
      </LinksWrapper>
      {activity && activity.type == "assignment" && !edit && (
        <Submissions
          edit={true}
          activity={activity}
          refreshActivity={refreshActivity}
        />
      )}
      {activity && modal && (
        <ModalSubmission activity={activity} handleModal={handleModal} />
      )}
    </>
  );
};

export default Materials;
