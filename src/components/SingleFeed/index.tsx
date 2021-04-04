import React, { useMemo, useRef, useState } from "react";
import IFeed from "../../interfaces/redux/states/IFeedsInitialState";
import {
  SingleFeedWrap,
  SingleFeedHeader,
  SingleFeedBody,
  SingleFeedFooter,
  SingleFeedInputFooter,
  FeedsMenuAppearing,
} from "./singlefeed.elements";
import parse from "html-react-parser";
import { ImageRound, InputContainer, MenuAppearing } from "../../styles/uiKit";
import { Col, Row, RowColumn } from "../../styles/grid";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillPushpin,
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineSend,
} from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import useOnClickOutside from "../../customHooks/useClickOutisde";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import isAuthor from "../../libs/isAuthor";
import {
  createANewComment,
  deleteAComment,
  deleteAFeed,
  selectedFeedAction,
} from "../../actions/feedActions";
import Comment from "./Comment";
import { toggleMainModalAction } from "../../actions/modalActions";

interface ISingleFeed {
  feed: IFeed;
}

const SingleFeed = ({ feed }: ISingleFeed) => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const [text, setText] = useState("");
  const [comments, setComments] = useState(false);
  const handleClickOutsideMenu = () => {
    setMenu(!menu);
  };
  const currentUserId = useSelector((state: RootStore) => state.auth.user._id);
  useOnClickOutside(menuRef, handleClickOutsideMenu);

  const handleDeleteComment = async (commentId: string) => {
    try {
      await dispatch(deleteAComment(feed.courseId, feed._id, commentId));
    } catch (err) {
      console.log(err);
    }
  };

  const menuAppearing = useMemo(() => {
    if (menu) {
      return (
        <FeedsMenuAppearing ref={menuRef}>
          {isAuthor(feed.authorId._id, currentUserId) && (
            <>
              <div
                onClick={() => {
                  dispatch(selectedFeedAction(feed));
                  dispatch(toggleMainModalAction(true, "edit"));
                }}
              >
                Edit
                <AiFillEdit />
              </div>
              <div
                onClick={() => {
                  dispatch(deleteAFeed(feed.courseId, feed._id));
                  setMenu(!menu);
                }}
              >
                Delete
                <AiFillDelete />
              </div>
            </>
          )}
          <div>
            Pinn
            <AiFillPushpin />
          </div>
 
        </FeedsMenuAppearing>
      );
    }
  }, [menu]);

  const commentSection = useMemo(() => {
    if (comments) {
      return (
        <>
          {feed.comments.map((comment) => (
            <Comment
              comment={comment}
              handleDeleteComment={handleDeleteComment}
            />
          ))}
        </>
      );
    } else return <></>;
  }, [comments, feed]);

  const handleCreateComment = async () => {
    try {
      const data = { text };
      await dispatch(createANewComment(feed.courseId, feed._id, data));
      setText("");
    } catch (err) {}
  };
  return (
    <SingleFeedWrap>
      <SingleFeedHeader>
        <ImageRound height={"40px"} width={"50px"}>
          <img className="img-round" src={feed.authorId.picture} alt="" />
        </ImageRound>

        <RowColumn>
          <span className="feed__author">
            {feed.authorId.firstName} {feed.authorId.lastName}
          </span>
          <span className="feed__role">{feed.authorId.role}</span>
          <span className="feed__date">{moment(feed.createdAt).fromNow()}</span>
        </RowColumn>

        <BsThreeDots
          onClick={() => {
            console.log(menu);
            setMenu(!menu);
          }}
        />

        {menuAppearing}
      </SingleFeedHeader>
      <SingleFeedBody>{parse(feed.text)}</SingleFeedBody>

      <SingleFeedFooter>
        <Row className="feeds__footer-icons">
          <span onClick={() => setComments(!comments)}>
            Comments {feed.comments.length}
          </span>
          <AiOutlineComment onClick={() => setComments(!comments)} />
          <span>Like</span>
          <AiOutlineLike />
        </Row>
        <SingleFeedInputFooter>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FiSend onClick={() => handleCreateComment()} />
        </SingleFeedInputFooter>
      </SingleFeedFooter>
      {commentSection}
    </SingleFeedWrap>
  );
};

export default SingleFeed;
