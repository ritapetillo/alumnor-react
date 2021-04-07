import React, { useEffect, useMemo } from "react";
import {
  AiFillCustomerService,
  AiFillEdit,
  AiFillSetting,
  AiOutlineClose,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toggleEditCourseMode } from "../../actions/courseAction";
import { RootStore } from "../../store";
import { CenteredRow, Row } from "../../styles/grid";
import { SwitchRoles } from "../../styles/uiKit";
import { IconsEditViewWrapper } from "../ActivityPage/activityPage.elements";
import {
  CourseDetailsIconWrapper,
  CourseDetailsWrapper,
} from "./coursedetails.elements";
import CourseDetailsEdit from "./CourseDetailsEdit";
import CourseDetailsView from "./CourseDetailsView";

const CourseDetails = () => {
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const history = useHistory();

  const params: { activityId: string } = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  if (currentCourse) {
    return (
      <CourseDetailsWrapper>
        <CourseDetailsIconWrapper>
          <>
            <FiShare
              onClick={() => history.push(`/view/courses/${currentCourse._id}`)}
            />
            <h5>Public URL</h5>
          </>
        </CourseDetailsIconWrapper>
        <CourseDetailsView />
      </CourseDetailsWrapper>
    );
  } else return <h1>No course</h1>;
};

export default CourseDetails;
