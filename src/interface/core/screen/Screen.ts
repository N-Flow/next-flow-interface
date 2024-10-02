import {ThemeBackground} from "../theme/ThemeBackground";
import {ThemeColor} from "../theme/ThemeColor";
import {ThemeShape} from "../theme/ThemeShape";
import {ScreenSize} from "./ScreenSize";
import {FocusMode} from "./FocusMode";

export default interface Screen {

  themeBackground: ThemeBackground
  themeColor: ThemeColor
  themeShape: ThemeShape
  
  shadowAround: boolean
  
  screenSize: ScreenSize
  screenScale: number
  
  focusMode: FocusMode
  
}
