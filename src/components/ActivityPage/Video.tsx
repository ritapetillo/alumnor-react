import React, { useEffect, useMemo, useState } from "react";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import ReactPlayer from "react-player";
import IconEditView from "./IconEditView";
import { Input } from "../../styles/uiKit";
import { VideoPageWrap } from "./activityPage.elements";
import ReactQuill from "react-quill";
import { RowColumn } from "../../styles/grid";
import { useParams } from "react-router";
import { editActivityById } from "../../api/courseApi";
import parse from "html-react-parser";
import { act } from "react-dom/test-utils";

interface IVideoProps {
  activity: IActivity | undefined;
  refreshActivity: () => void;
}
const Video = ({ activity, refreshActivity }: IVideoProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState<string | undefined>("");
  const [videoLink, setVideoLink] = useState<string | undefined>("");
  const [saved, setSaved] = useState(true);
  const params: { id: string; activityId: string } = useParams();

  /////////////ON COMPONENT UPLOAD/////////////

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setVideoLink(activity.videoLink);
    } else {
      setText("");
    }
  }, [params, saved, edit]);

  useEffect(() => {
    if (activity) {
      setText(activity.text);
      setVideoLink(activity.videoLink);
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
      text,
      videoLink,
    };
    const activity = await editActivityById(params.id, params.activityId, data);

    if (activity) {
      console.log(activity);
      setSaved(true);
    }
    await refreshActivity();
     handleEdit();
  };

  /////use memo/////////

  const componentToLoad = useMemo(() => {
    if (edit) {
      return (
        <>
          <RowColumn>
            <h4>Video Link</h4>
            <p>
              {" "}
              YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia,
              Mixcloud, DailyMotion and Kaltura.
            </p>
            <Input
              type="text"
              className="video-link-input"
              placeholder="http://"
              value={activity?.videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </RowColumn>
          <RowColumn>
            <h4 className="video-notes-title">Video Notes</h4>
            <ReactQuill value={text || ""} onChange={(e) => handleChange(e)} />
          </RowColumn>
        </>
      );
    } else {
      return (
        <>
          <ReactPlayer
            url={activity?.videoLink}
            width={"100%"}
            controls={true}
          />
          <h3>{activity?.title}</h3>
          <p>{text ? parse(text) : ""}</p>
        </>
      );
    }
  }, [activity, edit, saved, text]);

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

export default Video;
