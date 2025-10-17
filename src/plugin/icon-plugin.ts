import { IconViewProps } from '@/plugin/dto/icon-view-props.interface'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'
import { MixView } from '@/type/view/mix-view'

import BasePlugin from './base-plugin'
import { IconPluginPosition } from './dto/icon-plugin-position.enum'

export default interface IconPlugin extends BasePlugin {
  position: IconPluginPosition
  group: string
  label: string
  color: ThemeColor

  open: boolean

  icon: MixView<IconViewProps>

  onEnabledChange?: (value: boolean, e: MouseEvent) => void
  onIconClick?: (e: MouseEvent) => void
  onIconClickRouter?: (e: MouseEvent) => string
  onIconContextMenu?: (e: MouseEvent) => void
}
