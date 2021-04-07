import {
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCourseAction } from "../../actions/courseAction";
import { toggleModalAction } from "../../actions/modalActions";
import { StatusBar } from "../../styles/uiKit";
import {
  CreateCourseWrap,
  InputCourse,
  InputWrapper,
  TextAreaCourse,
  CreateCourseStep,
} from "./createCourseForm.elements";

interface CreateCourseForm {
  handleModal: (component: string, action: boolean) => void;
}

const CreateCourseForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);

  const goForward = () => {
    setStepNumber(stepNumber + 1);
  };
  const goBack = () => {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1);
    }
  };

  const handleCreateNewCourse = async () => {
    const courseData = {
      description,
      category,
      title,
    };

    const newCourse = await dispatch(createNewCourseAction(courseData));
    dispatch(toggleModalAction(false, ""));
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
              <InputCourse
                ref={titleRef}
                id="title"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                onClick={() => console.log(titleRef.current)}
              />
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
              <TextAreaCourse
                rows={4}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
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
              <InputCourse
                type="text"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </InputWrapper>
          </>
        );
    }
  }, [stepNumber]);
  return (
    <CreateCourseWrap>
      <StatusBar step={stepNumber}>
        <span></span>
      </StatusBar>
      <CreateCourseStep> {step}</CreateCourseStep>
      <div className="arrow-bottom">
        <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />

        {stepNumber === 2 ? (
          <FontAwesomeIcon
            icon={faCheckSquare}
            onClick={() => handleCreateNewCourse()}
          />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} onClick={goForward} />
        )}
      </div>
    </CreateCourseWrap>
  );
};

export default CreateCourseForm;
