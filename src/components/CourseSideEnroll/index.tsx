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
        <ButtonDark>Enroll Now</ButtonDark>
        <SpanLink>
          <AiOutlineHeart /> Add to favorites
        </SpanLink>
      </CourseSideContentDiv>
    </CourseSideWrap>
  );
};

export default CourseSideEnroll;
