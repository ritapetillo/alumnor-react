import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import { SpaceBetweenRow } from "../../styles/grid";
import { ButtonLightBlue, Input, StatusBar } from "../../styles/uiKit";
import {
  CreateCourseWrap,
  InputCourse,
  InputWrapper,
  TextAreaCourse,
  CreateCourseStep,
} from "./createCourseForm.elements";

const CreateCourseForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const goForward = () => {
    setStepNumber(stepNumber + 1);
  };
  const goBack = () => {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1);
    }
  };
  const step = useMemo(() => {
    switch (stepNumber) {
      case 0:
        return (
          <>
            <h3>What about a working title?</h3>
            <p>
              It's ok if you can't think of a good title now. You can change it
              later.
            </p>
            <InputWrapper>
              <InputCourse type="text" placeholder="Title" />
            </InputWrapper>
          </>
        );
      case 1:
        return (
          <>
            <h3>Can you describe your course?</h3>
            <p>
              Write as much as you can, but in case something is missing, you
              can change it later.
            </p>
            <InputWrapper>
              <TextAreaCourse rows={4} placeholder="Description" />
            </InputWrapper>
          </>
        );
      case 2:
        return (
          <>
            <h3>What category best fits the knowledge you'll share?</h3>
            <p>
              If you're not sure about the right category, you can change it
              later.
            </p>
            <InputWrapper>
              <InputCourse type="text" placeholder="Category" />
            </InputWrapper>
          </>
        );
    }
  }, [stepNumber]);
  return (
    <CreateCourseWrap>
      <StatusBar step={stepNumber} ><span></span></StatusBar>
      <CreateCourseStep> {step}</CreateCourseStep>
      <div className="arrow-bottom">
        <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />

        {stepNumber === 2 ? (
          <FontAwesomeIcon icon={faCheckSquare} onClick={goForward} />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} onClick={goForward} />
        )}
      </div>
    </CreateCourseWrap>
  );
};

export default CreateCourseForm;
