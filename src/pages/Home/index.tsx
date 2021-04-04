import React from "react";
import { Col } from "../../styles/grid";
import { HomeRow, HomeWrap, HomeWrapBottom } from "./home.elements";

const Home = () => {
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
              
      </HomeWrapBottom>
    </>
  );
};

export default Home;
