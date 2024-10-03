import {ThemeBackground} from "../theme/ThemeBackground";
import {ThemeColor} from "../theme/ThemeColor";
import {ThemeShape} from "../theme/ThemeShape";
import {ScreenSize} from "./ScreenSize";
import {FocusMode} from "./FocusMode";

export default interface Screen {
  
  screenSize: ScreenSize
  screenScale: number

  themeBackground: ThemeBackground
  themeColor: ThemeColor
  themeShape: ThemeShape
  
  shadowAround: boolean
  
  focusMode: FocusMode
  
  showBabylonConsole: boolean
  
}
