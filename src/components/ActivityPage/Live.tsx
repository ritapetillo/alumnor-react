import React, { useEffect, useMemo, useState } from "react";
import {
  IActivity,
  IZoomLink,
} from "../../interfaces/redux/states/ICourseInitialState";
import ReactPlayer from "react-player";
import IconEditView from "./IconEditView";
import { Input, SpanLink } from "../../styles/uiKit";
import { VideoPageWrap, ButtonDark } from "./activityPage.elements";
import ReactQuill from "react-quill";
import { RowColumn } from "../../styles/grid";
import { useLocation, useParams } from "react-router";
import {
  editActivityById,
  editLiveActivityById,
  generateLiveLink,
} from "../../api/courseApi";
import parse from "html-react-parser";
import config from "../../config";
import { getCurrentUrl, linkUserToZoom } from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { Button } from "@material-ui/core";
import { ContactSupportOutlined } from "@material-ui/icons";
import { getCurrentCourseAction } from "../../actions/courseAction";

interface ILiveProps {
  activity: IActivity | undefined;
  refreshActivity: () => void;
}
const Live = ({ activity, refreshActivity }: ILiveProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState<string | undefined>("");
  const [dateLesson, setDateLesson] = useState<string | undefined | Date>();
  const [meeting, setMeeting] = useState<IZoomLink | undefined>();
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const params: { id: string; activityId: string } = useParams();
  const location = useLocation();
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const [zoom, setZoom] = useState(true);
  const [lessonLink, setLessonLink] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState<string | undefined | number>("");

  /////////////ON COMPONENT UPLOAD/////////////
  useEffect(() => {
    if (activity && activity.liveMeeting) {
      setText(activity.text);
      setLessonLink(activity.liveMeeting.join_url);
      setPassword(activity.liveMeeting.password);
      setId(activity.liveMeeting.id);
      setDateLesson(activity.liveMeeting.start_time);
    }
  }, [activity]);

  // const connectToZoom = async () => {
  //   const link = await linkUserToZoom();
  //   console.log("here");
  //   dispatch(getCurrentUserAction());
  // };

  //////////////HANLERS////////////////
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleSave = async () => {
    const data = {
      liveMeeting: {
        start_time: moment(dateLesson).utc(),
        topic: activity?.title,
        type: 2,
        join_url: lessonLink,
        id,
        password,
      },
      text,
    };
    console.log(data);
    const lesson = await editActivityById(params.id, params.activityId, data);
    setSaved(true);
    await refreshActivity();
  };

  const handleEditLive = async () => {
    const data = {
      liveMeeting: {
        start_time: moment(dateLesson).utc(),
        topic: activity?.title,
        join_url: lessonLink,
        password,
        id,
      },
      text,
    };
    console.log(data);
    const lesson = await editLiveActivityById(
      params.id,
      params.activityId,
      data
    );
    setSaved(true);
    await refreshActivity();
  };

  const handleConnectToZoom = async () => {
    const currentUrl = location.pathname;
    console.log(currentUrl);
    const getUrl = await getCurrentUrl(currentUrl);
    window.location.assign(`${config.BE_URI}/auth/zoom`);
  };

  const handleGenerateLink = async () => {
    console.log("here");
    if (dateLesson) {
      const zoomMeeting: IZoomLink = await generateLiveLink(
        params.id,
        params.activityId,
        {
          start_time: moment(dateLesson).utc(),
          topic: activity?.title,
          type: 2,
        }
      );
      if (zoomMeeting) {
        const data = {
          liveMeeting: zoomMeeting,
          text,
        };

        const activity = await editActivityById(
          params.id,
          params.activityId,
          data
        );
        console.log(activity);
        setSaved(true);
        await refreshActivity();
      }
    }
  };

  /////use memo/////////

  const content = useMemo(() => {
    if (edit) {
      if (!activity?.liveMeeting?.join_url) {
        return (
          <>
            <>
              {!currentUser?.zoom?.zoomRefreshToken && (
                <SpanLink onClick={() => handleConnectToZoom()}>
                  Connect to Zoom, if you want to automatically generate a link
                </SpanLink>
              )}
              <RowColumn>
                <h4>Lesson Date and Time</h4>
                <Datetime onChange={(e) => setDateLesson(e.toString())} />
              </RowColumn>
              <RowColumn>
                <h4 className="video-notes-title">Lesson Notes</h4>
                <ReactQuill value={text || ""} onChange={(e) => setText(e)} />
              </RowColumn>
              {zoom && currentUser?.zoom?.zoomRefreshToken ? (
                <RowColumn>
                  <ButtonDark onClick={() => handleGenerateLink()}>
                    Generate Zoom Link
                  </ButtonDark>

                  <SpanLink onClick={() => setZoom(false)}>
                    Do you already have a link or you are not using Zoom?
                  </SpanLink>
                </RowColumn>
              ) : (
                <RowColumn>
                  <SpanLink
                    onClick={() => {
                      setZoom(true);
                      console.log(zoom);
                    }}
                  >
                    Want to generate an automatic link with Zoom?
                  </SpanLink>
                  <h4>Meeting Link*</h4>
                  <Input
                    type="text"
                    className="video-link-input"
                    placeholder="http://"
                    onChange={(e) => setLessonLink(e.target.value)}
                  />
                  <h4>Meeting Password</h4>
                  <Input
                    type="text"
                    className="video-link-input"
                    placeholder="Meeting Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <h4>Meeting Id</h4>
                  <Input
                    type="text"
                    className="video-link-input"
                    placeholder="Meeting ID"
                    onChange={(e) => setId(e.target.value)}
                  />
                  <ButtonDark onClick={handleSave}>Save</ButtonDark>
                </RowColumn>
              )}
            </>
          </>
        );
      } else {
        return (
          <RowColumn>
            <RowColumn>
              <h4>Lesson Date and Time</h4>
              <Datetime
                initialValue={dateLesson || moment()}
                onChange={(e) => {
                  setDateLesson(e.toString());
                  console.log(dateLesson);
                }}
              />
            </RowColumn>
            <h4>Meeting Link*</h4>
            <Input
              type="text"
              className="video-link-input"
              placeholder="http://"
              value={lessonLink}
              onChange={(e) => setLessonLink(e.target.value)}
            />
            <h4>Meeting Password</h4>
            <Input
              type="text"
              className="video-link-input"
              placeholder="Meeting Password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
              value={password}
            />
            <h4>Meeting Id</h4>
            <Input
              type="text"
              className="video-link-input"
              placeholder="Meeting ID"
              onChange={(e) => {
                setId(e.target.value);
                console.log(id);
              }}
              value={id}
            />
            <ReactQuill value={text || ""} onChange={(e) => setText(e)} />

            <ButtonDark onClick={handleEditLive}>Edit</ButtonDark>
          </RowColumn>
        );
      }
    } else {
      return (
        <RowColumn>
          <h4>Date: </h4>
          <span>
            {moment(activity?.liveMeeting?.start_time).format(
              "MM-DD-YYYY hh:mm a"
            )}
          </span>
          <h4>Join Link: </h4>
          <a href={activity?.liveMeeting?.join_url}>
            <span>{activity?.liveMeeting?.join_url}</span>
          </a>
          <h4>Meeting Id: </h4>
          <span>{activity?.liveMeeting?.id}</span>
          <h4>Password: </h4>
          <span>{activity?.liveMeeting?.password}</span>
          <p>{text ? parse(text) : ""}</p>
        </RowColumn>
      );
    }
  }, [edit, zoom, activity, id, password, text, lessonLink]);

  return (
    <VideoPageWrap>
      <IconEditView
        state={edit}
        handleEdit={handleEdit}
        handleSave={handleSave}
        saved={saved}
      />
      {content}
    </VideoPageWrap>
  );
};

export default Live;
