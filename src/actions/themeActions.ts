import { SWITCH_THEME } from "./types";
import { Dispatch } from "react";
import { ThemeDispachTypes } from "../interfaces/redux/actions/theme";

export const switchTheme = (bool: boolean) => async (
  dispatch: Dispatch<ThemeDispachTypes>
) => {
  dispatch({
    type: SWITCH_THEME,
    payload: bool,
  });
};
