import BasePlugin from "./base-plugin";
import {IconPluginPosition} from "./enum/icon-plugin-position";
import {FunctionComponent} from "react";
import {ThemeColor} from "../api/service/main/space/interface/theme/theme-color";
import {MouseEvent} from "react";

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor

  enabled: boolean
  
  icon: FunctionComponent

  onEnabledChange?: (value: boolean, e: MouseEvent) => void
  onIconClick?: (e: MouseEvent) => void
  onIconClickRouter?: (e: MouseEvent) => string
  onIconContextMenu?: (e: MouseEvent) => void
}
