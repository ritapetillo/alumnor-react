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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentSectionAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import {
  IActivity,
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
import { editSectionById } from "../../api/courseApi";
import { NONAME } from "node:dns";

interface SectionProps {
  item: ISection;
}
const Section = ({ item }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [activities, setActivities] = useState<Array<IActivity> | []>([]);

  useEffect(() => {
    if (item.activities) setActivities(item.activities);
  }, []);

  useEffect(() => {
    if (item.activities) setActivities(item.activities);
  }, [item._id]);

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

  if (!item) {
    return <h1>No item</h1>;
  } else {
    return (
      <CardSection>
        <ButtonAdd>
          <div onClick={() => dispatch(getCurrentSectionAction(item))}>
            <div className="icon-settings">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => dispatch(toggleModalAction(true, "newActivity"))}
              />
            </div>
            <div className="icon-settings">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>

          <FontAwesomeIcon className="more-icon" icon={faEllipsisV} />
        </ButtonAdd>
        <div>
          <h4>{item.title}</h4>
          <span className="activity-open">
            {item.description}{" "}
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
          </span>
        </div>
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
                                onClick={() =>
                                  history.push(
                                    `/courses/${activity.courseId}/${activity._id}`
                                  )
                                }
                              >
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
