import {
  faArrowLeft,
  faChevronLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  EventHandler,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useHistory, useParams } from "react-router";
import { Row, SpaceBetweenRow } from "../../styles/grid";
import {
  SidebarCourseWrapper,
  SidebarCourseAddButton,
  SectionWrapper,
  ImageSideBar,
  HeaderSidebar,
  SideBarLoader,
  RowTitle,
} from "./sidebarCourse.elements";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { toggleModalAction } from "../../actions/modalActions";
import { editCourse, uploadCoursePicture } from "../../api/courseApi";
import Section from "./Section";
import { ISection } from "../../interfaces/redux/states/ICourseInitialState";
import { Ellipsis } from "react-css-spinners";
import {
  Card,
  LittleButtonSpans,
  MenuAppearing,
  SpanLink,
} from "../../styles/uiKit";
import {
  AiFillEdit,
  AiFillPicture,
  AiFillDelete,
  AiFillSetting,
} from "react-icons/ai";
import { getCurrentCourseAction } from "../../actions/courseAction";
import isInstructor from "../../libs/isInstructor";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { MenuCourseWrapper } from "../MenuCourse/menucourse.elements";
import MenuCourse from "../MenuCourse";
import { isNull } from "node:util";
import useOnClickOutside from "../../customHooks/useClickOutisde";

const SidebarCourse = () => {
  const history = useHistory();
  const params = useParams();
  const [sections, setSections] = useState<[ISection] | []>([]);
  const dispatch = useDispatch();
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const loading = useSelector((state: RootStore) => state.courses.isLoading);
  const currentUserActive = useSelector(
    (state: RootStore) => state.auth.isLoading
  );
  const user = useSelector((state: RootStore) => state.auth.user);
  const isCurrentInstructor = currentCourse.isCurrentCourseInstructor;
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentUser = useSelector((state: RootStore) => state.auth.user);

  useEffect(() => {
    if (currentCourse) {
      setSections(currentCourse.sections);
    }
  }, [currentCourse, loading, currentUserActive, isCurrentInstructor]);

  useEffect(() => {
    setSections(currentCourse.sections);
    return () => {};

    // if (currentCourse) setSections(currentCourse.sections || []);
  }, []);
  const handleCloseMenu = () => {
    setMenu(false);
  };

  useOnClickOutside(menuRef, handleCloseMenu);
  const moveInArray = function (
    arr: [] | [{}],
    from: number,
    to: number,
    target: string | {}
  ) {
    let item = arr.splice(from, 1);
    arr.splice(to, 0, target);
  };
  const handleMovement = async (result: any) => {
    // dispatch({
    //   type: COURSE_LOADING,
    // });
    const from = Number(result.source.index);
    const to = Number(result.destination.index);
    // const { id }: any = params;
    // const reorder = await reorderCourseSection(id, { from, to });
    // console.log(reorder);

    // if (reorder) {
    //   dispatch(getCurrentCourseAction(id));
    // }
    const newArray = sections;
    const item = sections[from];
    moveInArray(newArray, from, to, item);
    setSections(newArray);
    const { id }: any = params;
    const sectionsId = sections.map((section: ISection) => section._id);
    editCourse(id, { sections: sectionsId });
  };

  const handleUploadPicture = async (e: any) => {
    try {
      console.log("here");
      console.log(e.target.files[0]);
      const picture = e.target.files[0];
      const formData = new FormData();
      formData.append("picture", picture);
      const upload = await uploadCoursePicture(currentCourse._id, formData);
      if (upload) {
        dispatch(getCurrentCourseAction(currentCourse._id, currentUser));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sectionsBar = useMemo(() => {
    if (sections && !loading) {
      if (isCurrentInstructor) {
        return (
          <DragDropContext onDragEnd={handleMovement}>
            <Droppable droppableId="characters">
              {(provided: any) => (
                <Row
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sections.map((item: ISection, index: number) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                    >
                      {(provided) => (
                        <SectionWrapper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Section item={item} />
                        </SectionWrapper>
                      )}
                    </Draggable>
                  ))}
                </Row>
              )}
            </Droppable>
          </DragDropContext>
        );
      } else {
        return (
          <Row>
            {sections.map((item: ISection, index: number) => (
              <SectionWrapper>
                <Section item={item} />
              </SectionWrapper>
            ))}
          </Row>
        );
      }
    } else
      return (
        <SideBarLoader>
          <Ellipsis className="loader" />
        </SideBarLoader>
      );
  }, [loading, sections, currentUserActive, currentCourse]);

  const menuAppearing = useMemo(() => {
    if (menu) {
      return <MenuCourse handleClose={handleCloseMenu} ref={menuRef} />;
    } else return "";
  }, [menu, menuRef]);
  return (
    <SidebarCourseWrapper>
      <Row className="arrow" onClick={() => history.push(`/courses`)}>
        <FontAwesomeIcon icon={faChevronLeft} /> <span>Back to Courses</span>
      </Row>
      <ImageSideBar>
        <label htmlFor="picture">
          <img
            src={
              currentCourse.picture ||
              "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"
            }
            alt=""
          />
          {isCurrentInstructor && (
            <>
              <input
                type="file"
                id="picture"
                style={{ display: "none" }}
                onChange={handleUploadPicture}
              />
              <LittleButtonSpans>
                Upload Picture
                <AiFillPicture />
              </LittleButtonSpans>
            </>
          )}
        </label>
      </ImageSideBar>
      <HeaderSidebar>
        <RowTitle>
          <SpanLink
            onClick={() => {
              dispatch(getCurrentCourseAction(currentCourse._id, currentUser));
              history.push(`/courses/${currentCourse._id}/main`);
            }}
            style={{ textDecoration: "none" }}
          >
            {currentCourse?.title}
          </SpanLink>
          <HiOutlineDotsCircleHorizontal onClick={() => setMenu(!menu)} />
          {menuAppearing}
        </RowTitle>
      </HeaderSidebar>

      {sectionsBar}
      {isCurrentInstructor && (
        <SidebarCourseAddButton>
          <span onClick={() => dispatch(toggleModalAction(true, "newSection"))}>
            <FontAwesomeIcon icon={faPlus} />
            New Section
          </span>
        </SidebarCourseAddButton>
      )}
    </SidebarCourseWrapper>
  );
};

export default SidebarCourse;
