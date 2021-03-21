import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Card, CardList } from "../../styles/uiKit";
import {
  DashBoard,
  DashBoardMain,
  CardNotes,
  CalendarDiv,
} from "./dashboard.elements";
import "./style.scss";
import classIcon from "../../assets/icons/time.svg";
import assignmentsIcon from "../../assets/icons/homework.svg";
import dot from "../../assets/icons/rec.svg";
import notificationIcon from "../../assets/icons/bell.svg";
import notesIcon from "../../assets/icons/notes.svg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Row, Col } from "../../styles/grid";

const Dashboard = () => {
  return (
    <DashBoard>
      <Sidebar />
      <DashBoardMain>
        <Row>
          <Col sm={12} lg={4}>
            <Card>
              <div className="card__header">
                <img src={classIcon} alt="" />
                <h3>Upcoming Classes</h3>
              </div>
              <div className="card__body">
                <CardList>
                  <img src={dot} alt="" />
                  English 1: 05/03/2021 10:30 AM
                </CardList>
                <CardList>
                  <img src={dot} alt="" />
                  English 1: 05/03/2021 10:30 AM
                </CardList>
              </div>
            </Card>
          </Col>

          <Col sm={12} lg={4}>
            <Card>
              <div className="card__header">
                <img src={assignmentsIcon} alt="" />
                <h3>Assignments</h3>
              </div>
              <div className="card__body">
                <CardList>
                  <img src={dot} alt="" />
                  English 1: 05/03/2021 10:30 AM
                </CardList>
              </div>
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
    </DashBoard>
  );
};

export default Dashboard;
