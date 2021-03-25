import React, { useEffect, useMemo, useState } from "react";
import {
  IActivity,
  IZoomLink,
} from "../../interfaces/redux/states/ICourseInitialState";
import ReactPlayer from "react-player";
import IconEditView from "./IconEditView";
import { Input } from "../../styles/uiKit";
import { VideoPageWrap } from "./activityPage.elements";
import ReactQuill from "react-quill";
import { RowColumn } from "../../styles/grid";
import { useLocation, useParams } from "react-router";
import { editActivityById, generateLiveLink } from "../../api/courseApi";
import parse from "html-react-parser";
import { act } from "react-dom/test-utils";
import config from "../../config";
import { getCurrentUrl } from "../../api/userApi";

interface ILiveProps {
  activity: IActivity | undefined;
  refreshActivity: () => void;
}
const Live = ({ activity, refreshActivity }: ILiveProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState<string | undefined>("");
  const [liveLink, setLiveLink] = useState<string | undefined>("");
  const [meeting, setMeeting] = useState<IZoomLink | undefined>();

  const [saved, setSaved] = useState(false);
  const params: { id: string; activityId: string } = useParams();
  const location = useLocation();

  /////////////ON COMPONENT UPLOAD/////////////

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setLiveLink(activity.liveLink);
    } else {
      setText("");
    }
  }, [params, saved, edit]);

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setLiveLink(activity.liveLink);
    } else {
      setText("");
    }
  }, []);

  //////////////HANLERS////////////////
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (text: string) => {
    setText(text);
    setSaved(false);
  };

  const handleSave = async () => {
    const data = {
      liveLink,
      liveZoomMeeting: meeting,
    };
    const activity = await editActivityById(params.id, params.activityId, data);

    if (activity) {
      console.log(activity);
      setSaved(true);
    }
    await refreshActivity();
  };

  const handleConnectToZoom = async () => {
    const currentUrl = location.pathname;
    console.log(currentUrl);
    const getUrl = await getCurrentUrl(currentUrl);
    window.location.assign(`${config.BE_URI}/auth/zoom`);
  };

  const handleGenerateLink = async () => {
    const zoomMeeting: IZoomLink = await generateLiveLink(
      params.id,
      params.activityId,
      {}
    );
    setMeeting(zoomMeeting);
    setLiveLink(zoomMeeting.join_url);
    setSaved(false);
  };

  /////use memo/////////

  const componentToLoad = useMemo(() => {
    if (edit) {
      return (
        <>
          <RowColumn>
            <h4>Live Lesson Link</h4>

            {!activity?.liveZoomMeeting ? (
              <>
                <p> Paste the live class link here or generate it with zoom</p>
                <Input
                  type="text"
                  className="video-link-input"
                  placeholder="http://"
                  value={activity?.liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                />
                <button onClick={() => handleConnectToZoom()}>
                  Connect to Zoom
                </button>
                <button onClick={() => handleGenerateLink()}>
                  Generate Live Link
                </button>
              </>
            ) : (
              <RowColumn>
                <h4>Join Link: </h4>
                <span>{activity?.liveZoomMeeting.join_url}</span>
                <h4>Meeting Id: </h4>
                <span>{activity?.liveZoomMeeting.id}</span>
                <h4>Password: </h4>
                <span>{activity?.liveZoomMeeting.password}</span>
              </RowColumn>
            )}
          </RowColumn>

          <RowColumn>
            <h4 className="video-notes-title">Lesson Notes</h4>
            <ReactQuill value={text} onChange={(e) => handleChange(e)} />
          </RowColumn>
        </>
      );
    } else {
      return (
        <>
          <h3>Live Link</h3>
          <a href={activity?.liveLink}>
            <h3>{activity?.title}</h3>
          </a>
          {activity?.liveZoomMeeting ? (
            <RowColumn>
              <h4>Join Link: </h4>
              <span>{activity?.liveZoomMeeting.join_url}</span>
              <h4>Meeting Id: </h4>
              <span>{activity?.liveZoomMeeting.id}</span>
              <h4>Password: </h4>
              <span>{activity?.liveZoomMeeting.password}</span>
            </RowColumn>
          ) : (
            ""
          )}

          <p>{text ? parse(text) : ""}</p>
        </>
      );
    }
  }, [activity, edit, saved, text, liveLink, meeting]);

  return (
    <VideoPageWrap>
      <IconEditView
        state={edit}
        handleEdit={handleEdit}
        handleSave={handleSave}
        saved={saved}
      />
      {componentToLoad}
    </VideoPageWrap>
  );
};

export default Live;
