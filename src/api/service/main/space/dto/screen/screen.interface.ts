import { FocusMode } from './focus-mode.enum'
import { ScreenSize } from './screen-size.enum'

export default interface Screen {
  size: ScreenSize
  scale: number

  shadowAround: boolean

  focusMode: FocusMode

  babylonConsoleLoaded: boolean
  showBabylonConsole: boolean
}
