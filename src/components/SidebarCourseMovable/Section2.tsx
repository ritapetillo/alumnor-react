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
import {
  getCurrentSectionAction,
  selectActivityAction,
} from "../../actions/courseAction";
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
import Moment from "react-moment";

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
          <div className={"activities" + item._id}>
            {activities
              ? activities.map((activity: IActivity, index: number) => (
                  <Activity className="activity-list-item">
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
                ))
              : ""}
          </div>
        )}
      </CardSection>
    );
  }
};

export default Section;
