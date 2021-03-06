import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentCourseAction, getCurrentSectionAction } from "../../actions/courseAction";
import { getAllStudentsPerCourse } from "../../api/userApi";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import {
  filteredActivitiesFromSections,
  sumAllActivities,
} from "../../libs/filterActivities";
import { RootStore } from "../../store";
import { Row, Col, RowColumn } from "../../styles/grid";
import { Card, InputContainer } from "../../styles/uiKit";
import CardCourseDash from "../CardCourseDash";
import CourseFeeds from "../CourseFeeds";
import { CourseDetailsWrapper } from "./coursedetails.elements";

const CourseDetailsView = () => {
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const currentCourseSections = useSelector(
    (state: RootStore) => state.courses.currentCourse.sections
  );
  const [lastAssignments, setLastAssignments] = useState<IActivity[] | []>([]);
  const [upcomingLive, setUpcomingLive] = useState<IActivity[] | []>([]);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
  
    if (currentCourseSections) {
      getAssignments();
      getLiveClasses();
    }
  }, [currentCourseSections,currentCourse]);

  const getAssignments = () => {
    const assignments = filteredActivitiesFromSections(
      currentCourseSections,
      "assignment"
    );
  
    setLastAssignments(assignments);
  };
  const getLiveClasses = () => {
    const live = filteredActivitiesFromSections(currentCourseSections, "live");
    const cronoLive = live
      .sort(
        (a: any, b: any) =>
          Number(new Date(a.liveMeeting?.start_time)) -
          Number(new Date(b.liveMeeting?.start_time))
      )
      .filter((live: IActivity) =>
        moment(live.liveMeeting?.start_time).isAfter(Date.now())
      );
    setUpcomingLive(cronoLive);
  };

  return (
    <CourseDetailsWrapper>
      <Row>
        <Col sm={12} md={8}>
          <CourseFeeds />
        </Col>
        <Col sm={12} md={4}>
          <RowColumn>
            <CardCourseDash
              activities={upcomingLive}
              title={"Upcoming Classes"}
            />
            <CardCourseDash
              activities={lastAssignments}
              title={"Last Assignments"}
            />
          </RowColumn>
        </Col>
      </Row>
    </CourseDetailsWrapper>
  );
};

export default CourseDetailsView;
