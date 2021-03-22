import React, { useRef } from "react";
import "./style.scss";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/authActions";
import config from "../../config";
import { toggleModalAction } from "../../actions/modalActions";
import { RootStore } from "../../store";

const Login = () => {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootStore) => state.auth.isAuth);

  const handleLogin = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log("ciao");
    const userEmail: string = email.current!.value;
    const userPass: string = password.current!.value;
    const login = await dispatch(loginAction(userEmail, userPass));
    if (isAuth) dispatch(toggleModalAction(false, ""));
  };
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
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.assign(`${config.BE_URI}/auth/facebook`);
              }}
            >
              <img src={facebook} alt="" /> Continue with Facebook
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.assign(`${config.BE_URI}/auth/google`);
              }}
            >
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
              ref={email}
            />
            <input
              type="Password"
              className="login__input-field"
              placeholder="Passwrod"
              ref={password}
            />
            <button className="login__form-button" onClick={handleLogin}>
              Sign In
            </button>
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
