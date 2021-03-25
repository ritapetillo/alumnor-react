import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill"; // Typescript
import { Col, Row } from "../../styles/grid";
import "react-quill/dist/quill.snow.css"; // ES6
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import IconEditView from "./IconEditView";
import "react-quill/dist/quill.snow.css";
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
} from "@fortawesome/free-solid-svg-icons";
import { ContentWrap, LinksWrapper } from "./activityPage.elements";

///utilities
const renderIcon = (path: string) => {
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
}

const Materials = ({ activity, refreshActivity }: IMaterialProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState<string | undefined>("");
  const [saved, setSaved] = useState(true);
  const [uploads, setUploads] = useState<[] | any>([]);
  const [files, setFiles] = useState<[] | any>([]);
  const dispatch = useDispatch();
  const params: { id: string; activityId: string } = useParams();

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setFiles(activity.uploads);
    } else {
      setText("");
    }
  }, [params]);

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
    };
    const activity = await editActivityById(params.id, params.activityId, data);
    const formData = new FormData();
    uploads.map((upload: any) => {
      formData.append("files", upload);
      console.log(upload);
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

  //////////USE MEMO///////////////

  const componentToLoad = useMemo(() => {
    if (edit) {
      return (
        <>
          <span>Write lesson content here</span>

          <ReactQuill
            value={text}
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
            <h3>Reading Materials</h3>
            <p>{text ? parse(text) : ""}</p>
          </ContentWrap>
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
                {" "}
                {renderIcon(upload.path)}
                <h4>{upload.name}</h4>
                <h4 className="file-size">{formatBytes(upload.size)}</h4>
              </a>
            </Col>
          );
        })}
      </LinksWrapper>
    </>
  );
};

export default Materials;
