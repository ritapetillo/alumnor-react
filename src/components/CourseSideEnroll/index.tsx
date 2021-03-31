import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { SpanLink } from "../../styles/uiKit";
import { ButtonDark } from "../ActivityPage/activityPage.elements";
import {
  CourseSideWrap,
  CourseSideImageDiv,
  CourseSideContentDiv,
} from "./coursesideenroll.elements";
import moment from "moment";
import { PayPalButton } from "react-paypal-button-v2";

const CourseSideEnroll = ({ course }: { course: ICourse }) => {
  return (
    <CourseSideWrap>
      <CourseSideImageDiv>
        <img src={course.picture} />
      </CourseSideImageDiv>
      <CourseSideContentDiv>
        <h4>Course Dates</h4>
        {moment(course.startDate).format("D/MM/yyyy")} -{" "}
        {moment(course.endDate).format("D/MM/yyyy")}
        <h3>$ {course.price}</h3>
        <PayPalButton
          amount={course.price}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details: any, data: any) => {
            console.log(data);
            console.log(details);
            // OPTIONAL: Call your server to save the transaction
            // return fetch("/paypal-transaction-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID,
            //   }),
            // });
          }}
        />
        <SpanLink>
          <AiOutlineHeart /> Add to favorites
        </SpanLink>
      </CourseSideContentDiv>
    </CourseSideWrap>
  );
};

export default CourseSideEnroll;
