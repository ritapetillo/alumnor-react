import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  PropsWithRef,
  ReactNode,
  Ref,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MenuCourseWrapper } from "./menucourse.elements";
import { AiFillDelete, AiFillHome, AiFillSetting } from "react-icons/ai";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { RiBookletFill } from "react-icons/ri";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { ISubmission } from "../../interfaces/redux/states/ICourseInitialState";
import isInstructor from "../../libs/isInstructor";

interface Props {
  children?: ReactNode;
  handleClose: () => void;
}

const MenuCourse = React.forwardRef<HTMLDivElement, Props>(
  ({ handleClose }, ref) => {
    const params: { courseId: string } = useParams();
    const submissions = useSelector(
      (state: RootStore) => state.courses.currentCourseSubmissions
    );
    const currentUser = useSelector((state: RootStore) => state.auth.user);
    const currentCourse = useSelector(
      (state: RootStore) => state.courses.currentCourse
    );
    const [newSubmissions, setNewSubmissions] = useState(0);
    const [isStudent, setIsStudent] = useState(true);

    useEffect(() => {
      if (submissions) {
        const newSubmissionsNumber = submissions.filter(
          (sub: ISubmission) => sub.checked === false
        ).length;
        setNewSubmissions(newSubmissionsNumber);
      }
      if (currentUser._id) {
        setIsStudent(!isInstructor(currentUser, currentCourse));
      }
    }, [submissions, currentUser._id]);

    const menuToShow = useMemo(() => {
      if (isStudent) {
        return (
          <>
            {" "}
            {/* <NavLink to={`submissions`} onClick={handleClose}> */}
            <div>
              <span>My Homework</span>

              <RiBookletFill />
            </div>
            {/* </NavLink> */}
          </>
        );
      } else {
        return (
          <>
            {" "}
            <NavLink to={`submissions`} onClick={handleClose}>
              <div>
                <span>Assignments </span>
                {newSubmissions}
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
          </>
        );
      }
    }, [currentUser, isStudent]);
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
        {menuToShow}
      </MenuCourseWrapper>
    );
  }
);

export default MenuCourse;
