import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Card, CardList } from "../../styles/libs";
import { DashBoard, DashBoardMain, CardNotes,CalendarDiv } from "./dashboard.elements";
import "./style.scss";
import classIcon from "../../assets/icons/lecture.svg";
import assignmentsIcon from "../../assets/icons/homework.svg";
import dot from "../../assets/icons/rec.svg";
import notificationIcon from "../../assets/icons/bell.svg";
import notesIcon from "../../assets/icons/notes.svg";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ColLg3, ColLg2, ColMd1, Row } from "../../styles/grid";

const Dashboard = () => {
  return (
    <DashBoard>
      <Sidebar />
      <DashBoardMain>
        <Row>
          <ColLg3>
            <ColMd1>
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
            </ColMd1>
          </ColLg3>
          <ColLg3>
            <ColMd1>
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
            </ColMd1>
          </ColLg3>
          <ColLg3>
            <ColMd1>
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
            </ColMd1>
          </ColLg3>
        </Row>
        <Row>
          <ColLg2>
            <ColMd1>
              <CalendarDiv>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                />
              </CalendarDiv>
            </ColMd1>
          </ColLg2>
          <ColLg2>
            <ColMd1>
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
            </ColMd1>
          </ColLg2>
        </Row>
      </DashBoardMain>
    </DashBoard>
  );
};

export default Dashboard;
