import BasePlugin from "./base-plugin"
import {IconPluginPosition} from "./dto/icon-plugin-position.enum"
import {FunctionComponent} from "react"
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum"
import {MouseEvent} from "react"

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor

  open: boolean
  
  icon: FunctionComponent

  onEnabledChange?: (value: boolean, e: MouseEvent) => void
  onIconClick?: (e: MouseEvent) => void
  onIconClickRouter?: (e: MouseEvent) => string
  onIconContextMenu?: (e: MouseEvent) => void
}
