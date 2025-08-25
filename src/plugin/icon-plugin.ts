import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'

import BasePlugin from './base-plugin'
import { IconPluginPosition } from './dto/icon-plugin-position.enum'

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor

  open: boolean

  icon: string

  onEnabledChange?: (value: boolean, e: MouseEvent) => void
  onIconClick?: (e: MouseEvent) => void
  onIconClickRouter?: (e: MouseEvent) => string
  onIconContextMenu?: (e: MouseEvent) => void
}
