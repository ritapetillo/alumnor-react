import React from "react";
import "./style.scss";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left-wrapper">
          <h4>Welcome Back to Alumnor</h4>
          <div className="login__left-divider"></div>
        </div>
      </div>
      <div className="login__right">
        <div className="login__form-wrapper">
          <form className="login__form">
            <h4>Login</h4>
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
            <input
              type="Email address"
              className="login__input-field"
              placeholder="Email Address"
            />
            <input
              type="Password"
              className="login__input-field"
              placeholder="Passwrod"
            />
            <button className="login__form-button">Sign In</button>
          </form>
          <span className="login__link">Forgot password?</span>
          <div className="login__sign-up">
            <span>
              Not a member yet? <span className="login__link">Sign up</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
