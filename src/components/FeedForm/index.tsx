import React, { useEffect, useMemo, useState } from "react";
import { FeedFormWrap } from "./feedform.elements";
import ReactQuill from "react-quill";
import { RowColumn } from "../../styles/grid";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../libs/quill";
import { ButtonDark } from "../ActivityPage/activityPage.elements";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createNewFeed } from "../../api/feedsApi";
import { RootStore } from "../../store";
import { IFeedsInitialState } from "../../interfaces/redux/states/IFeedsInitialState";
import { toggleMainModalAction } from "../../actions/modalActions";
import {
  createNewFeedAction,
  editAFeed,
  getAllCourseFeeds,
} from "../../actions/feedActions";

const isEdit = (type: string) => {
  return type === "edit";
};

const FeedForm = () => {
  const [text, setText] = useState("");
  const selectedFeed = useSelector(
    (state: RootStore) => state.feeds.selectedFeed
  );
  const modalType = useSelector((state: RootStore) => state.modal.type);
  useEffect(() => {
    if (isEdit(modalType)) {
      setText(selectedFeed.text);
    }
  }, [modalType]);

  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const data = { text };
      dispatch(createNewFeedAction(params.id, data));
      dispatch(toggleMainModalAction(false));
      dispatch(getAllCourseFeeds(params.id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      const data = { text: text };
      dispatch(editAFeed(params.id, selectedFeed._id, data));
      dispatch(toggleMainModalAction(false));
      dispatch(getAllCourseFeeds(params.id));
    } catch (err) {
      console.log(err);
    }
  };
  const button = useMemo(() => {
    if (isEdit(modalType)) {
      return <ButtonDark onClick={() => handleEdit()}>Edit</ButtonDark>;
    } else {
      return <ButtonDark onClick={() => handleSubmit()}>Post</ButtonDark>;
    }
  }, [modalType, text]);

  return (
    <FeedFormWrap>
      <RowColumn>
        <ReactQuill
          value={text}
          modules={modules}
          onChange={(text) => {
            setText(text);
          }}
        />
        {button}
      </RowColumn>
    </FeedFormWrap>
  );
};

export default FeedForm;
