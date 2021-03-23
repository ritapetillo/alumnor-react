import { ReactComponent } from "*.svg";
import {
  faChevronDown,
  faChevronUp,
  faCircle,
  faEdit,
  faEllipsisV,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCurrentSectionAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { ISection } from "../../interfaces/redux/states/ICourseInitialState";
import { selectIcon } from "../ActivityForm/activityTypes";
import {
  Activity,
  ButtonAdd,
  CardSection,
  CloudSidebar,
} from "./sidebarCourse.elements";

interface SectionProps {
  item: ISection;
}
const Section = ({ item }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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
          <div>
            {item.activities
              ? item.activities.map((activity) => (
                  <Activity
                    className="activity-list-item"
                    onClick={() =>
                      history.push(
                        `/courses/${activity.courseId}/${activity._id}`
                      )
                    }
                  >
                    <FontAwesomeIcon icon={selectIcon(activity.type)} />
                    <span>{activity.title}</span>
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
