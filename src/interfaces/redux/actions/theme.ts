import {
  SWITCH_THEME,
} from "../../../actions/types";
import IThemeInitialState from "../states/IThemeInitialState";


export interface SwitchTheme {
    type: typeof SWITCH_THEME;
    payload: boolean;
}


export type ThemeDispachTypes = SwitchTheme;