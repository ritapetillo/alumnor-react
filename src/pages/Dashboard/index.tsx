import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Card, CardList } from "../../styles/uiKit";
import {
  DashBoard,
  DashBoardMain,
  CardNotes,
  CalendarDiv,
} from "./dashboard.elements";
import classIcon from "../../assets/icons/time.svg";
import assignmentsIcon from "../../assets/icons/homework.svg";
import dot from "../../assets/icons/rec.svg";
import notificationIcon from "../../assets/icons/bell.svg";
import notesIcon from "../../assets/icons/notes.svg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Row, Col } from "../../styles/grid";
import withDashSidebar from "../../HOC/withDashSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getStudentActivities } from "../../actions/courseAction";
import { useParams } from "react-router";
import { RootStore } from "../../store";
import { IActivity } from "../../interfaces/redux/states/ICourseInitialState";
import moment from "moment";
const Dashboard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const studentActivities = useSelector(
    (state: RootStore) => state.courses.studentActivities
  );
  const [liveClasses, setLiveClasses] = useState<IActivity[] | undefined>();
  const [assignments, setAssignments] = useState<IActivity[] | undefined>();

  useEffect(() => {
    getAllActivities();
    if (studentActivities) {
      let live = studentActivities
        .filter(
          (activity: IActivity) =>
            activity.type === "live" &&
            activity?.liveMeeting?.start_time &&
            moment(activity.liveMeeting.start_time).isAfter(Date.now())
        )
        .sort(
          (a: any, b: any) =>
            Number(new Date(a.liveMeeting?.start_time)) -
            Number(new Date(b.liveMeeting?.start_time))
        )
        .slice(0, 4);

      let assignments = studentActivities
        .filter(
          (activity: IActivity) =>
            activity.type === "assignment" &&
            activity.deadline &&
            moment(activity.deadline).isAfter(Date.now())
        )
        .sort((a: any, b: any) => {
          const date1: Date = new Date(a.deadline);
          const date2: Date = new Date(b.deadline);
          return Number(date1) - Number(date2);
        })
        .slice(0, 4);
      setLiveClasses(live);
      setAssignments(assignments);
    }
  }, [params, studentActivities.length]);

  const getAllActivities = async () => {
    await dispatch(getStudentActivities());
  };

  const liveClassCard = useMemo(() => {
    if (liveClasses) {
      return liveClasses.map((activity: IActivity) => (
        <CardList>
          <img src={dot} alt="" />
          {activity.title}:{" "}
          {moment(activity.liveMeeting?.start_time).format(
            "MM/DD/YYYY hh:mm a"
          )}
        </CardList>
      ));
    } else {
      return "";
    }
  }, [liveClasses, params, studentActivities]);

  const assignmentsClassCard = useMemo(() => {
    if (assignments) {
      return assignments.map((activity: IActivity) => (
        <CardList>
          <img src={dot} alt="" />
          {activity.title}:{" "}
          {moment(activity.deadline).format("MM/DD/YYYY hh:mm a")}
        </CardList>
      ));
    } else {
      return "";
    }
  }, [assignments, params, studentActivities]);

  return (
    <DashBoardMain>
      <Row>
        <Col sm={12} lg={4}>
          <Card>
            <div className="card__header">
              <img src={classIcon} alt="" />
              <h3>Upcoming Classes</h3>
            </div>
            <div className="card__body">{liveClassCard}</div>
          </Card>
        </Col>

        <Col sm={12} lg={4}>
          <Card>
            <div className="card__header">
              <img src={assignmentsIcon} alt="" />
              <h3>Assignments</h3>
            </div>
            <div className="card__body">{assignmentsClassCard}</div>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <div className="card__header">
              <img src={notificationIcon} alt="" />
              <h3>Notifications</h3>
            </div>
            <div className="card__body">
              <CardList>
                <img src={dot} alt="" />
                English 1: 05/03/2021 10:30 AM
              </CardList>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <CalendarDiv>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </CalendarDiv>
        </Col>
        <Col sm={12} lg={6}>
          <CardNotes>
            <div className="card__header">
              <img src={notesIcon} alt="" />
              <h3>To do</h3>
            </div>
            <div className="card__body">
              <CardList>
                <img src={notesIcon} alt="" />
                Check new homework
              </CardList>
            </div>
          </CardNotes>
        </Col>
      </Row>
    </DashBoardMain>
  );
};

export default withDashSidebar(Dashboard);
