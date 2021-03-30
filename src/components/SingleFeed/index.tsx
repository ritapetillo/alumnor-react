import React from "react";
import IFeed from "../../interfaces/redux/states/IFeedsInitialState";
import { SingleFeedWrap } from "./singlefeed.elements";
import parse from "html-react-parser";

interface ISingleFeed {
  feed: IFeed;
}
const SingleFeed = ({ feed }: ISingleFeed) => {
  return (
    <SingleFeedWrap>
      <div>
        {feed.authorId.firstName} {feed.authorId.lastName}
      </div>
      {parse(feed.text)}
    </SingleFeedWrap>
  );
};

export default SingleFeed;
