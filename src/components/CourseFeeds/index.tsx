import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllCourseFeeds } from "../../actions/feedActions";
import { toggleMainModalAction } from "../../actions/modalActions";
import { IFeedsInitialState } from "../../interfaces/redux/states/IFeedsInitialState";
import feedsReducer from "../../reducers/feedsReducer";
import { RootStore } from "../../store";
import { Row } from "../../styles/grid";
import { ImageRound, InputContainer } from "../../styles/uiKit";
import SingleFeed from "../SingleFeed";
import {
  CourseFeedsWrap,
  FeedsListWrap,
  WriteFeedWrap,
  AvatarFeedWrap,
} from "./coursefeeds.elements";

const CourseFeeds = () => {
  const dispatch = useDispatch();
  const currentFeeds = useSelector(
    (state: RootStore) => state.feeds.currentFeeds
  );
  const feedsLoading = useSelector((state: RootStore) => state.feeds.isLoading);
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const modalStatus = useSelector((state: RootStore) => state.modal.isMainOpen);
  const params: { id: string } = useParams();
  useEffect(() => {
    dispatch(getAllCourseFeeds(params.id));
  }, []);
  // useEffect(() => {
  //   console.log('submtted')
  //   dispatch(getAllCourseFeeds(params.id));
  // }, [modalStatus]);

  return (
    <CourseFeedsWrap>
      <WriteFeedWrap>
        <AvatarFeedWrap>
          <img
            src={
              currentUser.picture
                ? currentUser.picture
                : `https://ui-avatars.com/api/?background=0D8ABC&color=fff`
            }
            alt=""
          />
        </AvatarFeedWrap>
        <InputContainer
          className="coursefeeds__input"
          onClick={() => dispatch(toggleMainModalAction(true))}
        >
          <span>Start a post</span>
        </InputContainer>
      </WriteFeedWrap>
      <FeedsListWrap>
        {currentFeeds?.map((feed: any) => (
          <SingleFeed feed={feed} />
        ))}
      </FeedsListWrap>
    </CourseFeedsWrap>
  );
};

export default CourseFeeds;
