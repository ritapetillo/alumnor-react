import React from "react";
import Sidebar from "../components/Sidebar";
import { SideBar } from "../components/Sidebar/sidebar.elements";
// import SidebarCourseMovable from "../components/SidebarCourseMovable";

import { CourseWrapper } from "../pages/Course/course.elements";
import { DashBoard } from "../pages/Dashboard/dashboard.elements";

function withDashSidebar<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <DashBoard>
      <Sidebar />
      <Component {...props} />
    </DashBoard>
  );
}

export default withDashSidebar;
