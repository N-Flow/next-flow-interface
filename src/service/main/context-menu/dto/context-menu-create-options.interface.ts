import { MenuLineCreateOptions } from '@/service/main/context-menu/dto/menu-line-create-options.interface'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'

export interface ContextMenuCreateOptions {
  id?: string // 菜单唯一id
  lines?: MenuLineCreateOptions[] // 菜单内容
  showIcon?: boolean //显示图标 默认false
  x?: number // 菜单所在x轴
  y?: number // 菜单所在y轴
  closeOnOutsideClick?: boolean // 点击外部后关闭 默认为 false
  theme?: ThemeColor

  onClose?: () => void
}
