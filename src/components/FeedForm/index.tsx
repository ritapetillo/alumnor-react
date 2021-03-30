import React, { useState } from "react";
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
import { createNewFeedAction } from "../../actions/feedActions";

const FeedForm = () => {
  const [text, setText] = useState("");
  const feeds: IFeedsInitialState = useSelector(
    (state: RootStore) => state.feeds
  );
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const data = { text };
      dispatch(createNewFeedAction(params.id, data));
      dispatch(toggleMainModalAction(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FeedFormWrap>
      <RowColumn>
        <ReactQuill
          value={text || ""}
          modules={modules}
          onChange={(text) => setText(text)}
        />
        <ButtonDark onClick={() => handleSubmit()}>Post</ButtonDark>
      </RowColumn>
    </FeedFormWrap>
  );
};

export default FeedForm;
