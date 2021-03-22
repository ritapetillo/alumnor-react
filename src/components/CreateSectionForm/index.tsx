import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, withRouter, useLocation } from "react-router";
import { createANewSectionAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { RootStore } from "../../store";
import { StatusBar } from "../../styles/uiKit";
import { InputWrapper } from "../CreateCourseForm/createCourseForm.elements";
import {
  CreateSectionWrap,
  InputSection,
  TextAreaSection,
  CreateSectionStep,
} from "./createSectionForm.elements";

interface CreateCourseForm {
  handleModal: (component: string, action: boolean) => void;
}

const CreateSectionForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  // const currentCourse = useState(
  //   (state: RootStore) => state.courses.currentCourse
  // );

  const goForward = () => {
    setStepNumber(stepNumber + 1);
  };
  const goBack = () => {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1);
    }
  };

  const handleCreateNewSection = async () => {
    console.log(params);
    const sectionData = {
      description,
      title,
    };
    const id = location.pathname.replace("/courses/", "");
    const newSection = await dispatch(createANewSectionAction(id, sectionData));
    dispatch(toggleModalAction(false, ""));
  };

  const step = useMemo(() => {
    switch (stepNumber) {
      case 0:
        return (
          <>
            <h3>What is the title of this section ?</h3>
            <p>Choose a title which describes the topic of this section.</p>
            <InputWrapper>
              <InputSection
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputWrapper>
          </>
        );
      case 1:
        return (
          <>
            <h3>Can you describe the topic of this section?</h3>
            <p>
              Write a short description. In case something is missing, you can
              change it later.
            </p>
            <InputWrapper>
              <TextAreaSection
                rows={4}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputWrapper>
          </>
        );
    }
  }, [stepNumber]);
  return (
    <CreateSectionWrap>
      <StatusBar step={stepNumber}>
        <span></span>
      </StatusBar>
      <CreateSectionStep> {step}</CreateSectionStep>
      <div className="arrow-bottom">
        <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />

        {stepNumber === 1 ? (
          <FontAwesomeIcon
            icon={faCheckSquare}
            onClick={() => handleCreateNewSection()}
          />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} onClick={goForward} />
        )}
      </div>
    </CreateSectionWrap>
  );
};

export default withRouter(CreateSectionForm);
