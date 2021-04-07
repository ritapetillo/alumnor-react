import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { Col, Row, RowColumn } from "../../styles/grid";
import { Input, InputContainer } from "../../styles/uiKit";
import { CourseDetailsEditWrapper } from "./coursedetails.elements";
import Select from "react-select";
import ReactQuill from "react-quill";
import { modules } from "../../libs/quill";
import "react-quill/dist/quill.snow.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { ButtonDark } from "../ActivityPage/activityPage.elements";
import { editCourse } from "../../api/courseApi";
import { getCurrentCourseAction } from "../../actions/courseAction";

const CourseDetailsEdit = () => {
  const currentCourse = useSelector(
    (state: RootStore) => state.courses.currentCourse
  );
  const [description, setDescription] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [scheduleDescription, setScheduleDescription] = useState<
    string | undefined
  >();
  const [highlights, setHighlights] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const [salePrice, setSalePrice] = useState<string | undefined>();
  const dispatch = useDispatch();

  const handeSave = async () => {
    try {
      const data = {
        title,
        description,
        scheduleDescription,
        highlights,
        category,
        startDate,
        endDate,
        price,
        salePrice,
      };
      const edit = await editCourse(currentCourse._id, data);
      if (edit) {
        dispatch(getCurrentCourseAction(currentCourse._id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CourseDetailsEditWrapper>
      <h2>Course Settings</h2>
      <Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Title</h4>
            <Input
              type="text"
              name="title"
              placeholder="Course Title"
              defaultValue={currentCourse.title}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Category</h4>
            <Select value={currentCourse.category} />
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Highlights</h4>
            <span>separate highlights with a comma</span>
            <Input
              name="highlights"
              type="text"
              placeholder="Exclusive Content, Qualified Instructors, Live Contents, etc "
              defaultValue={currentCourse.highlights}
              onChange={(e) => setHighlights(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Description</h4>
            <ReactQuill
              modules={modules}
              defaultValue={currentCourse.description}
              onChange={(text) => setDescription(text)}
            />
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col sm={12} md={6}>
            <RowColumn>
              <h4>Star Date</h4>
              <Datetime
                timeFormat={false}
                initialValue={currentCourse.startDate}
                onChange={(value) => setStartDate(value.toString())}
              />
            </RowColumn>
          </Col>
          <Col sm={12} md={6}>
            <RowColumn>
              <h4>End Date</h4>
              <Datetime
                timeFormat={false}
                initialValue={currentCourse.endDate}
                onChange={(value) => setEndDate(value.toString())}
              />
            </RowColumn>
          </Col>
        </Row>
        <Row></Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Schedule Description</h4>
            <ReactQuill
              modules={modules}
              defaultValue={currentCourse.scheduleDescription}
              onChange={(text) => setScheduleDescription(text)}
            />
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>Price</h4>

            <Input
              name="price"
              type="number"
              placeholder="$"
              defaultValue={currentCourse.price}
              onChange={(e) => setPrice(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>Sale Price</h4>

            <Input
              name="salePrice"
              type="number"
              placeholder="$"
              defaultValue={currentCourse.salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
      </Row>
      <ButtonDark onClick={handeSave}>Save</ButtonDark>
    </CourseDetailsEditWrapper>
  );
};

export default CourseDetailsEdit;
