import {ThemeBackground} from "../theme/theme-background";
import {ThemeColor} from "../theme/theme-color";
import {ThemeShape} from "../theme/theme-shape";
import {ScreenSize} from "./screen-size";
import {FocusMode} from "./focus-mode";

export default interface Screen {
  
  screenSize: ScreenSize
  screenScale: number

  themeBackground: ThemeBackground
  themeColor: ThemeColor
  themeShape: ThemeShape
  
  shadowAround: boolean
  
  focusMode: FocusMode

  babylonConsoleLoaded: boolean
  showBabylonConsole: boolean
  
}
