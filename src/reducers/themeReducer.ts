import { SWITCH_THEME } from "../actions/types";
import { ThemeDispachTypes } from "../interfaces/redux/actions/theme";
import IThemeInitialState from "../interfaces/redux/states/IThemeInitialState";

const initialState: IThemeInitialState = {
  themeLight: true,
};

const themeReducer = (state = initialState, action: ThemeDispachTypes) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_THEME:
      return {
        ...state,
        themeLight: payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
