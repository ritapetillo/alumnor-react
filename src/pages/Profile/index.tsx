import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ButtonDark } from "../../components/ActivityPage/activityPage.elements";
import withDashSidebar from "../../HOC/withDashSidebar";
import { RootStore } from "../../store";
import { Col, Row, RowColumn } from "../../styles/grid";
import { Input,TextArea } from "../../styles/uiKit";
import { ProfileWrapper } from "./profile.elements";

const Profile = () => {
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
      const [headline, setHeadline] = useState<string | undefined>();
    const [about, setAbout] = useState<string | undefined>();


  const currentUser = useSelector((state: RootStore) => state.auth.user);
  return (
    <ProfileWrapper>
      <h2>Profile</h2>
      <Row>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>First Name</h4>
            <Input
              type="text"
              name="fistName"
              placeholder="First Name"
              defaultValue={currentUser.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>Last Name</h4>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={currentUser.lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>Email</h4>
            <Input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={currentUser.email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
        <Col sm={12} md={6}>
          <RowColumn>
            <h4>Password</h4>
            <Input
              type="password"
              name="email"
              placeholder="password"
              defaultValue={currentUser.password}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </RowColumn>
        </Col>
      </Row>
       <Row>
        <Col sm={12} >
          <RowColumn>
            <h4>Headline</h4>
            <Input
              type="text"
              name="headline"
              placeholder="Headline"
              defaultValue={currentUser.headline}
              onChange={(e) => setHeadline(e.target.value)}
            ></Input>
          </RowColumn>
        </Col></Row>
        <Row>
        <Col sm={12}>
          <RowColumn>
            <h4>Password</h4>
            <TextArea
            style={{height:'140px'}}
              name="about"
              placeholder="About"
              defaultValue={currentUser.about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </RowColumn>
        </Col>
      </Row>

      <ButtonDark>Save</ButtonDark>
    </ProfileWrapper>
  );
};

export default withDashSidebar(Profile);
