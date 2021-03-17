import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/authActions";

const Auth = () => {
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log("ciao");
    const userEmail: string = email.current!.value;
    const userPass: string = password.current!.value;
    const login = dispatch(loginAction(userEmail, userPass));
  };
  return (
    <div>
      <input type="text" placeholder="email" ref={email} />
      <input type="password" placeholder="password" ref={password} />
      <span onClick={() => handleLogin()}>Login</span>
    </div>
  );
};

export default Auth;
