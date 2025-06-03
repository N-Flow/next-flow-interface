import {ScreenSize} from "./screen-size.enum"
import {FocusMode} from "./focus-mode.enum"

export default interface Screen {
  
  size: ScreenSize
  scale: number
  
  shadowAround: boolean
  
  focusMode: FocusMode

  babylonConsoleLoaded: boolean
  showBabylonConsole: boolean
  
}
