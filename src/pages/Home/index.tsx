import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Coursecard from "../../components/CourseCard";
import { CourseCard } from "../../components/CourseList/courselist.elements";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { Col, ImageCoverDiv, Row, SpaceBetweenRow } from "../../styles/grid";
import { HomeRow, HomeWrap, HomeWrapBottom } from "./home.elements";
import { getAllPublicCourses } from "../../api/publicApi";

const Home = () => {
  const history = useHistory();
  const [courses, setCourses] = useState<ICourse[] | undefined>();
  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      const allCourses = await getAllPublicCourses();
      if (allCourses) {
        setCourses(allCourses);
        console.log(allCourses);
      }
    } catch (err) {
      return null;
    }
  };
  return (
    <>
      <HomeWrap>
        <HomeRow>
          <Col sm={12} md={6}>
            <h1>Learn everything everywhere</h1>
          </Col>
        </HomeRow>
      </HomeWrap>
      <HomeWrapBottom>
        <h3>Last Courses</h3>
        <Row>
          {courses?.map((course: ICourse) => (
            <Col sm={6} md={3}>
              <CourseCard>
                <ImageCoverDiv
                  width={"100%"}
                  height={"200px"}
                  radius={"10px 10px 0 0"}
                  onClick={() => history.push(`/view/courses/${course._id}`)}
                >
                  <img
                    src={
                      course.picture ||
                      "https://elearningindustry.com/wp-content/uploads/2020/01/designing-effective-elearning-courses.jpg"
                    }
                    alt=""
                  />
                </ImageCoverDiv>
                <SpaceBetweenRow>
                  <h4>{course.title}</h4>
                </SpaceBetweenRow>
              </CourseCard>
            </Col>
          ))}
        </Row>
      </HomeWrapBottom>
    </>
  );
};

export default Home;
