import React from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import "./style.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <div className="dashboard__top-left">
          <Card size="large" title="Notification" />
        </div>
        <div className="dashboard__top-left">
          <Card size="large" title="Messages" />
          <Card size="large" title="Messages" />
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Dashboard;
