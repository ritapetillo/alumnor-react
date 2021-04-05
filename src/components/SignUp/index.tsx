import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.scss";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import { EventInput } from "@fullcalendar/common";
import { signupApi } from "../../api/userApi";

const Signup = () => {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    return () => {
      setSuccess(false);
    };
  }, []);

  const handleSignup = async (e: EventInput) => {
    console.log("register");
    try {
      e.preventDefault();
      const credentials = {
        firstName,
        lastName,
        email,
        password: pass,
        role: "student",
      };
      console.log(credentials);
      if (pass !== confPass) {
        console.log("dont");
        setErrorMessage("Password and Confim Password don't match");
      } else {
        const singup = await signupApi(credentials);
        if (singup) {
          setSuccess(true);
        }
      }
    } catch (err) {
      return null;
    }
  };

  const form = useMemo(() => {
    if (showForm) {
      return (
        <div className="signup__email-form">
          <div>
            <input
              type="text"
              className="signup__input-field"
              placeholder="First Name"
              onChange={(e: EventInput) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="signup__input-field"
              placeholder="Last Name"
              onChange={(e: EventInput) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="Email address"
            className="signup__input-field"
            placeholder="Email Address"
            onChange={(e: EventInput) => {
              console.log(email);

              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            className="signup__input-field"
            placeholder="Create Passwrod"
            onChange={(e: EventInput) => setPass(e.target.value)}
          />
          <input
            type="password"
            className="signup__input-field"
            placeholder="Confirm Password"
            onChange={(e: EventInput) => setConfPass(e.target.value)}
          />

          <button
            className="signup__form-button"
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
          </button>
          <small>{errorMessage}</small>
        </div>
      );
    } else {
      return (
        <span
          className="signup__link text-centered"
          onClick={() => setShowForm(true)}
        >
          Sign Up with email and password
        </span>
      );
    }
  }, [showForm, errorMessage,email,firstName,lastName,confPass,pass]);

  return (
    <div className="signup">
      <div className="signup__left">
        <div className="signup__left-wrapper">
          <h4>Join Alumnor and start learning</h4>
          <div className="signup__left-divider"></div>
        </div>
      </div>
      <div className="signup__right">
        <div className="signup__form-wrapper">
          {success ? (
            <div>
              <h4>Thank you for registering to Alumnor</h4>
              <p>
                We've sent you an email to confirm you account. Please check
                your spam box in case you cannot find your verification email.
              </p>
            </div>
          ) : (
            <>
              <form className="signup__form">
                <h4>Sign Up</h4>
                <button>
                  <img src={facebook} alt="" /> Continue with Facebook
                </button>
                <button>
                  <img src={google} alt="" />
                  Continue with Google
                </button>
                <div className="form-separator">
                  <span>or</span>
                </div>

                {form}
              </form>
              <div className="signup__sign-up">
                <span>
                  Already a member?{" "}
                  <span className="signup__link">Sign In</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
