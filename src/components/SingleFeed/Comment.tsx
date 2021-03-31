import React, { useCallback } from "react";
import IFeed, {
  IComment,
} from "../../interfaces/redux/states/IFeedsInitialState";
import { Row } from "../../styles/grid";
import { ImageRound } from "../../styles/uiKit";
import { SingleCommentFooter, SingleCommentWrap } from "./singlefeed.elements";
import moment from "moment";
import { AiFillDelete, AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";

interface ICommentProps {
  comment: IComment;
  handleDeleteComment: (id: string) => void;
}

const Comment = ({ comment, handleDeleteComment }: ICommentProps) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state: RootStore) => state.auth.user._id);
  const isAuthor = useCallback(() => {
    return comment.authorId === currentUserId;
  }, [comment, currentUserId]);
  return (
    <SingleCommentWrap>
      <Row>
        <ImageRound>
          <img src={comment.authorId.picture} />
        </ImageRound>
        <div className="comment__body">
          <span className="comment__body-author">
            {comment.authorId.firstName} {comment.authorId.lastName}
          </span>
          <span>{comment.text}</span>
        </div>
      </Row>
      <SingleCommentFooter>
        <div>
          {isAuthor() && (
            <span onClick={() => handleDeleteComment(comment._id)}>
              Delete
              <AiFillDelete />
            </span>
          )}
          <span>
            Like
            <AiFillLike />
          </span>
        </div>
        <span className="comment__footer">
          {moment(comment.createdAt).fromNow(true)}
        </span>
      </SingleCommentFooter>
    </SingleCommentWrap>
  );
};

export default Comment;
