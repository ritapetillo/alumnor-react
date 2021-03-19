import React, { useMemo, useState } from "react";
import "./style.scss";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";

const Signup = () => {
  const [showForm, setShowForm] = useState(false)

  const form = useMemo(() => {
    if (showForm) {
      return (
        <div className="signup__email-form">
          <div>
            <input
              type="text"
              className="signup__input-field"
              placeholder="First Name"
            />
            <input
              type="text"
              className="signup__input-field"
              placeholder="Last Name"
            />
          </div>

          <input
            type="Email address"
            className="signup__input-field"
            placeholder="Email Address"
          />

          <input
            type="password"
            className="signup__input-field"
            placeholder="Create Passwrod"
          />
          <input
            type="password"
            className="signup__input-field"
            placeholder="Confirm Password"
          />

          <button className="signup__form-button">Sign Up</button>
        </div>
      );
    } else {
      return (   <span className="signup__link text-centered" onClick={()=>setShowForm(true)}>
              Sign Up with email and password
            </span>)
    }
    }
    
  ,[showForm])

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
              Already a member? <span className="signup__link">Sign In</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
