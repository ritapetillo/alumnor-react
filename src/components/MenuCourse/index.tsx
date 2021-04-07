import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  PropsWithRef,
  ReactNode,
  Ref,
} from "react";
import { MenuCourseWrapper } from "./menucourse.elements";
import { AiFillDelete, AiFillHome, AiFillSetting } from "react-icons/ai";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { RiBookletFill } from "react-icons/ri";
import { NavLink, useParams } from "react-router-dom";

interface Props {
  children?: ReactNode;
  handleClose: () => void;
}

const MenuCourse = React.forwardRef<HTMLDivElement, Props>(
  ({ handleClose }, ref) => {
    const params: { courseId: string } = useParams();
    return (
      <MenuCourseWrapper ref={ref}>
        <NavLink to={`main`}>
          <div onClick={handleClose}>
            <span>Home</span>
            <AiFillHome />
          </div>
        </NavLink>
        <NavLink to={`partecipants`} onClick={handleClose}>
          <div>
            <span>Partecipants</span>
            <HiUserGroup />
          </div>
        </NavLink>
         <NavLink to={`submissions`} onClick={handleClose}>
        <div>
          <span>Assignments</span>
          <RiBookletFill />
        </div>
        </NavLink>
        <NavLink to={`edit`} onClick={handleClose}>
          <div>
            <span>Settings</span>
            <AiFillSetting />
          </div>
        </NavLink>
        <div>
          <span>Delete Course</span>
          <AiFillDelete />
        </div>
      </MenuCourseWrapper>
    );
  }
);

export default MenuCourse;
