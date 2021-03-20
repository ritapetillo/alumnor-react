import { SWITCH_THEME } from "../actions/types";
import IThemeInitialState from "../interfaces/redux/states/IThemeInitialState";

const initialState: IThemeInitialState = {
  themeLight: true,
};

const themeReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_THEME:
      return {
        themeLight: payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
