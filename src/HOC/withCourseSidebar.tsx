import React from "react";
import SidebarCourse from "../components/SidebarCourse";
// import SidebarCourseMovable from "../components/SidebarCourseMovable";

import SidebarRight from "../components/SidebarRight";
import { CourseWrapper } from "../pages/Course/course.elements";

function withCourseSidebar<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      <CourseWrapper>
        {/* <SidebarCourse></SidebarCourse> */}
        <SidebarCourse></SidebarCourse>
        <Component {...props} />
       
      </CourseWrapper>
    </>
  );
}

export default withCourseSidebar;
