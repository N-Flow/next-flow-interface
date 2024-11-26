import BasePlugin from "./base-plugin";
import {IconPluginPosition} from "./position/icon-plugin-position";
import {FunctionComponent} from "react";
import {ThemeColor} from "../interface/core/theme/theme-color";

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor
  
  icon: FunctionComponent
  onIconClickRouter: (e: MouseEvent) => string
  onIconContextMenu: (e: MouseEvent) => void
}
