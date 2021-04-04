import React, { useEffect, useState, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ICourse } from "../../interfaces/redux/states/ICourseInitialState";
import { SpanLink } from "../../styles/uiKit";
import { ButtonDark } from "../ActivityPage/activityPage.elements";
import {
  CourseSideWrap,
  CourseSideImageDiv,
  CourseSideContentDiv,
} from "./coursesideenroll.elements";
import moment from "moment";
import { PayPalButton } from "react-paypal-button-v2";
import { createNewEnrollment } from "../../api/enrollmentApi";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import isEnrolled from "../../libs/isEnrolled";
import { toggleModalAction } from "../../actions/modalActions";
import { useHistory } from "react-router-dom";

const CourseSideEnroll = ({ course }: { course: ICourse }) => {
  const [statusPayment, setStatusPayment] = useState(false);
  const params: { id: string } = useParams();
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (currentUser._id) {
      setStatusPayment(isEnrolled(currentUser, params.id));
      console.log(statusPayment);
    }
  }, [params.id, currentUser]);

  const completeEnrollment = async (details: any) => {
    try {
      const data = {
        courseId: params.id,
        payed: true,
        paymentDetails: details,
      };
      const newEnrollment = await createNewEnrollment(data);
      return newEnrollment;
    } catch (err) {
      return null;
    }
  };

  const buttonToShow = useMemo(() => {
    if (!currentUser._id) {
      return (
        <ButtonDark onClick={() => dispatch(toggleModalAction(true, "login"))}>
          Login in to enroll
        </ButtonDark>
      );
    } else {
      if (!statusPayment) {
        return (
          <PayPalButton
            amount={course.price}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={async (details: any, data: any) => {
              console.log(data);
              console.log(details);
              if (details.status === "COMPLETED") {
                setStatusPayment(true);
                const enrollment = await completeEnrollment(details);
                console.log(enrollment);
              }
              // OPTIONAL: Call your server to save the transaction
              // return fetch("/paypal-transaction-complete", {
              //   method: "post",
              //   body: JSON.stringify({
              //     orderID: data.orderID,
              //   }),
              // });
            }}
          />
        );
      } else {
        return (
          <ButtonDark
            onClick={() => history.push("/courses/" + params.id + "/main")}
          >
            Go to course
          </ButtonDark>
        );
      }
    }
  }, [currentUser, statusPayment, params.id]);

  return (
    <CourseSideWrap>
      <CourseSideImageDiv>
        <img src={course.picture} />
      </CourseSideImageDiv>
      <CourseSideContentDiv>
        <h4>Course Dates</h4>
        {moment(course.startDate).format("D/MM/yyyy")} -{" "}
        {moment(course.endDate).format("D/MM/yyyy")}
        <h3>$ {course.price}</h3>
        <SpanLink>
          <AiOutlineHeart /> Add to favorites
        </SpanLink>
        {buttonToShow}
      </CourseSideContentDiv>
    </CourseSideWrap>
  );
};

export default CourseSideEnroll;
