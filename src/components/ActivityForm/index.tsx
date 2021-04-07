import React, { useMemo, useRef, useState } from "react";
import { Row, Col } from "../../styles/grid";
import { Card } from "../../styles/uiKit";
import {
  ActivityFormWrap,
  ActivityStep,
  ActivityTypeCard,
} from "./activityForm.elements";
import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faBookReader,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
  faTasks,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { createNewCourseAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { StatusBar } from "../../styles/uiKit";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { activities } from "./activityTypes";
import {
  InputCourse,
  InputWrapper,
} from "../CreateCourseForm/createCourseForm.elements";
import { RootStore } from "../../store";
import { createANewActivity } from "../../api/courseApi";
import { useHistory } from "react-router";
import { HistoryOutlined } from "@material-ui/icons";

const ActivityForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const currentSection = useSelector(
    (state: RootStore) => state.courses.currentSection
  );
  const history = useHistory();

  const goForward = () => {
    setStepNumber(stepNumber + 1);
  };
  const goBack = () => {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1);
    }
  };

  const handleCreateNewActivity = async () => {
    const data = {
      title,
      type,
    };
    const courseId = currentSection.courseId;
    const sectionId = currentSection._id;
    const activity = await createANewActivity(courseId, sectionId, data);
    if (activity) {
      dispatch(toggleModalAction(false, ""));
      history.push(`/courses/${courseId}/${activity._id}`);
    }
  };

  const handleSelectActivity = (selected: string) => {
    console.log(selected);
    if (type === selected) setType("");
    else setType(selected);
  };

  const step = useMemo(() => {
    switch (stepNumber) {
      case 0:
        return (
          <ActivityStep className="activity-type">
            <h3>What type of activity would you like to add?</h3>
            <p>Choose between those types</p>
            <Row>
              {activities.map((activity: any) => (
                <Col sm={12} md={6}>
                  <ActivityTypeCard
                    className={`${activity.type === type && "active"}`}
                    onClick={() => handleSelectActivity(activity.type)}
                  >
                    <FontAwesomeIcon icon={activity.icon} />
                    {activity.title}
                  </ActivityTypeCard>
                </Col>
              ))}
            </Row>
          </ActivityStep>
        );
      case 1:
        return (
          <ActivityStep>
            <h3>What about a title?</h3>
            <p>
              It's ok if you can't think of a good title now. You can change it
              later.
            </p>

            <InputWrapper>
              <InputCourse
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputWrapper>
          </ActivityStep>
        );
    }
  }, [stepNumber, type]);
  return (
    <ActivityFormWrap>
      <StatusBar step={stepNumber} className="progress-bar">
        <span></span>
      </StatusBar>
      {step}
      <div className="arrow-bottom">
        {stepNumber !== 0 ? (
          <FontAwesomeIcon icon={faChevronLeft} onClick={goBack} />
        ) : (
          <div></div>
        )}

        {stepNumber === 1 ? (
          <FontAwesomeIcon
            icon={faCheckSquare}
            onClick={() => handleCreateNewActivity()}
          />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} onClick={goForward} />
        )}
      </div>
    </ActivityFormWrap>
  );
};

export default ActivityForm;
