import BasePlugin from "./base-plugin";
import {IconPluginPosition} from "./enum/icon-plugin-position";
import {FunctionComponent} from "react";
import {ThemeColor} from "@/api/service/main/space/interface/theme/theme-color";
import {MouseEvent} from "react";

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor

  enabled: boolean
  
  icon: FunctionComponent

  ow?: number  // 默认顺序权值 同一区域的插件按照order从小到大排序

  onEnabledChange?: (value: boolean, e: MouseEvent) => void
  onIconClick?: (e: MouseEvent) => void
  onIconClickRouter?: (e: MouseEvent) => string
  onIconContextMenu?: (e: MouseEvent) => void
}
