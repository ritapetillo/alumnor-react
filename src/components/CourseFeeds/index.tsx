import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllCourseFeeds } from "../../actions/feedActions";
import { toggleMainModalAction } from "../../actions/modalActions";
import { getAllFeedByCourseId } from "../../api/feedsApi";
import { IFeedsInitialState } from "../../interfaces/redux/states/IFeedsInitialState";
import feedsReducer from "../../reducers/feedsReducer";
import { RootStore } from "../../store";
import { Row } from "../../styles/grid";
import { InputContainer } from "../../styles/uiKit";
import ModalFeeds from "../ModalMain";
import SingleFeed from "../SingleFeed";
import {
  CourseFeedsWrap,
  FeedsListWrap,
  WriteFeedWrap,
} from "./coursefeeds.elements";

const CourseFeeds = () => {
  const dispatch = useDispatch();
  const courseFeeds: IFeedsInitialState = useSelector(
    (state: RootStore) => state.feeds
  );
  const params: { id: string } = useParams();
  useEffect(() => {
    dispatch(getAllCourseFeeds(params.id));
  }, []);
  useEffect(() => {
    dispatch(getAllCourseFeeds(params.id));
  }, [courseFeeds.isLoading]);

  return (
    <CourseFeedsWrap>
      <WriteFeedWrap>
        <InputContainer onClick={() => dispatch(toggleMainModalAction(true))}>
          <span>Start a post</span>
        </InputContainer>
      </WriteFeedWrap>
      <FeedsListWrap>
        {courseFeeds.currentFeeds.map((feed: any) => (
          <SingleFeed feed={feed} />
        ))}
      </FeedsListWrap>
    </CourseFeedsWrap>
  );
};

export default CourseFeeds;
