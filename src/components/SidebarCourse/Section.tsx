import { ReactComponent } from "*.svg";
import {
  faChevronDown,
  faChevronUp,
  faCircle,
  faEdit,
  faEllipsisV,
  faPlus,
  faSquare,
  faTh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getCurrentCourseAction,
  getCurrentSectionAction,
  selectActivityAction,
} from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import {
  IActivity,
  ICourse,
  ISection,
} from "../../interfaces/redux/states/ICourseInitialState";
import { selectIcon } from "../ActivityForm/activityTypes";
import {
  Activity,
  ButtonAdd,
  CardSection,
  CloudSidebar,
} from "./sidebarCourse.elements";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { moveInArray } from "../../libs/moveInArray";
import { editSectionById, deleteSection } from "../../api/courseApi";
import { NONAME } from "node:dns";
import Moment from "react-moment";
import { Input } from "@material-ui/core";
import { InputContainer } from "../../styles/uiKit";
import { AiOutlineCheck } from "react-icons/ai";
import { Edit } from "@material-ui/icons";
import { RootStore } from "../../store";

interface SectionProps {
  item: ISection;
}
const Section = ({ item }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [activities, setActivities] = useState<Array<IActivity> | []>([]);
  const [title, setTitle] = useState<string | undefined>();
  const [edit, setEdit] = useState(false);
  const currentCourse: ICourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const isCurrentInstructor = currentCourse.isCurrentCourseInstructor;

  useEffect(() => {
    setTitle(item.title);
    if (item.activities) setActivities(item.activities);
  }, []);

  useEffect(() => {
    setTitle(item.title);
    if (item.activities) {
      setActivities(item.activities);
    }
  }, [item, currentCourse]);

  const handleMovement = async (result: any) => {
    const from = Number(result.source.index);
    const to = Number(result.destination.index);
    const newArray = activities;
    const actiItem = activities[from];
    moveInArray(newArray, from, to, actiItem);
    setActivities(newArray);
    const { _id, courseId }: any = item;
    const activitiesId = activities.map((activity: IActivity) => activity._id);
    editSectionById(courseId, _id, { activities: activitiesId });
  };

  const hanldeChangeTitleSection = async () => {
    try {
      const { _id, courseId }: any = item;
      editSectionById(courseId, _id, { title });
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const hanldeDeleteSection = async () => {
    try {
      const { _id, courseId }: any = item;
      const section = await deleteSection(courseId, _id);
      if (section) {
        dispatch(getCurrentCourseAction(courseId));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sectionHeader = useMemo(() => {
    return (
      <div>
        {!edit ? (
          <h4> {title}</h4>
        ) : (
          <InputContainer className="input-section">
            <input
              type="text"
              placeholder="Section Title"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AiOutlineCheck onClick={() => hanldeChangeTitleSection()} />
          </InputContainer>
        )}
        <span className="activity-open">
          {/* {item.description} */}
          <div></div>
          <div className="arrow-section">
            {!isOpen ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => setIsOpen(true)}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => setIsOpen(false)}
              ></FontAwesomeIcon>
            )}
          </div>
        </span>
      </div>
    );
  }, [isOpen, edit, title, activities]);
  if (!item) {
    return <h1>No item</h1>;
  } else {
    return (
      <CardSection>
        {isCurrentInstructor && (
          <ButtonAdd>
            <div onClick={() => dispatch(getCurrentSectionAction(item))}>
              <div className="icon-settings">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => hanldeDeleteSection()}
                />
              </div>
              <div className="icon-settings">
                <FontAwesomeIcon icon={faEdit} onClick={() => setEdit(!edit)} />
              </div>{" "}
              <div className="icon-settings">
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() =>
                    dispatch(toggleModalAction(true, "newActivity"))
                  }
                />
              </div>
            </div>

            <FontAwesomeIcon className="more-icon" icon={faEllipsisV} />
          </ButtonAdd>
        )}
        {sectionHeader}
        {isOpen && (
          <DragDropContext onDragEnd={handleMovement}>
            <Droppable droppableId={"activities" + item._id}>
              {(provided: any) => (
                <div
                  className={"activities" + item._id}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {activities
                    ? activities.map((activity: IActivity, index: number) => (
                        <Draggable
                          key={activity._id}
                          draggableId={activity._id}
                          index={index}
                        >
                          {(provided) => (
                            <Activity
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="activity-list-item"
                            >
                              <FontAwesomeIcon
                                style={{ cursor: "grabbing" }}
                                icon={selectIcon(activity.type)}
                              />
                              <span
                                onClick={async () => {
                                  history.push(
                                    `/courses/${activity.courseId}/${activity._id}`
                                  );
                                }}
                              >
                                {activity.type === "live" && (
                                  <>
                                    {" "}
                                    <Moment format="MM/DD">
                                      {activity?.liveMeeting?.start_time}
                                    </Moment>{" "}
                                    -{" "}
                                  </>
                                )}
                                {activity.title}
                              </span>
                              <FontAwesomeIcon
                                style={{
                                  cursor: "grabbing",
                                  marginLeft: "auto",
                                }}
                                icon={faTh}
                              />
                            </Activity>
                          )}
                        </Draggable>
                      ))
                    : ""}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </CardSection>
    );
  }
};

export default Section;
