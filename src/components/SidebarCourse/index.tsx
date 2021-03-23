import {
  faArrowLeft,
  faChevronLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Row } from "../../styles/grid";
import {
  SidebarCourseWrapper,
  SidebarCourseAddButton,
  CardSection,
  ButtonAdd,
  Activity,
  SectionWrapper,
} from "./sidebarCourse.elements";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { toggleModalAction } from "../../actions/modalActions";
import { editCourse } from "../../api/courseApi";
import Section from "./Section";
import { ISection } from "../../interfaces/redux/states/ICourseInitialState";

const SidebarCourse = () => {
  const history = useHistory();
  const params = useParams();
  const [sections, setSections] = useState<[ISection] | []>([]);
  const dispatch = useDispatch();
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const loading = useSelector((state: RootStore) => state.courses.isLoading);
  const modalStatus = useSelector((state: RootStore) => state.modal.isOpen);

  useEffect(() => {
    setSections(currentCourse.sections);
  }, [currentCourse]);

  useEffect(() => {
    setSections(currentCourse.sections);
    return () => {};

    // if (currentCourse) setSections(currentCourse.sections || []);
  }, []);

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
    console.log(sections);
    const newArray = sections;
    const item = sections[from];
    moveInArray(newArray, from, to, item);
    setSections(newArray);
    const { id }: any = params;
    const sectionsId = sections.map((section: ISection) => section._id);
    editCourse(id, { sections: sectionsId });
  };

  const sectionsBar = useMemo(() => {
    if (sections) {
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
    }
  }, [loading, sections]);

  return (
    <SidebarCourseWrapper>
      <Row className="arrow" onClick={() => history.push(`/courses`)}>
        <FontAwesomeIcon icon={faChevronLeft} /> <span>Back to Courses</span>
      </Row>
      <h4>{currentCourse?.title}</h4>
      {sectionsBar}
      <SidebarCourseAddButton>
        <span onClick={() => dispatch(toggleModalAction(true, "newSection"))}>
          <FontAwesomeIcon icon={faPlus} />
          New Section
        </span>
      </SidebarCourseAddButton>
    </SidebarCourseWrapper>
  );
};

export default SidebarCourse;
