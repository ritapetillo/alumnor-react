import {
  faMoon,
  faSun,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchTheme } from "../../actions/themeActions";
import { RootStore } from "../../store";

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 40px;
  top: 90px;
  font-size: 20px;
  cursor: pointer;
  div {
    font-size: 25px;
    margin-right: -10px;
    margin-left: -10px;
  }
`;

const Toggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStore) => state.theme);
  const toggleTheme = () => {
    dispatch(switchTheme(!theme.themeLight));
  };
  return (
    <ToggleWrap>
      <FontAwesomeIcon icon={faSun} onClick={() => toggleTheme()} />
      <div>
        {theme.themeLight ? (
          <FontAwesomeIcon icon={faToggleOff} onClick={() => toggleTheme()} />
        ) : (
          <FontAwesomeIcon icon={faToggleOn} onClick={() => toggleTheme()} />
        )}
      </div>
      <FontAwesomeIcon icon={faMoon} onClick={() => toggleTheme()} />
    </ToggleWrap>
  );
};

export default Toggle;
