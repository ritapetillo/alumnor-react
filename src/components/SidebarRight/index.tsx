import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { SidebarCourseWrapper } from "../SidebarCourse/sidebarCourse.elements";
import { SidebarRightWrap } from "./sidebarRight.elements";

const SidebarRight = () => {
  const sidebarStatus: any = useSelector((state: RootStore) => state.sidebar);

  return (
    <SidebarRightWrap open={sidebarStatus.isRightOpen}>
          <h1>this is a sidebar</h1>
          
    </SidebarRightWrap>
  );
};

export default SidebarRight;
