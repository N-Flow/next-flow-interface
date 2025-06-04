import { FunctionComponent } from 'react'

import { ContextMenuCreateOptions } from '@/api/service/main/context-menu/dto/context-menu-create-options.interface'
import { MenuLineType } from '@/api/service/main/context-menu/dto/menu-line-type.enum'

export interface MenuLineCreateOptions {
  id?: string //单条菜单唯一id
  type?: MenuLineType // 菜单选项种类 默认BUTTON
  text?: string // 文本
  tip?: string // 附属文本
  icon?: FunctionComponent // 图标
  view?: FunctionComponent // 图标
  color?: string // 字体颜色
  disabled?: boolean // 禁用状态 默认false
  shortcut?: string // 快捷键

  onClick?: (e: any) => void // 点击事件
  onMouseOver?: (e: any) => void // 鼠标悬停事件
  onMouseOut?: (e: any) => void // 鼠标移开事件

  closeAllOnClick?: boolean // 点击后关闭所有菜单  Type为Button时默认true 其他默认false

  checkboxDefaultValue?: boolean // 复选框状态 默认值false
  onCheckboxChange?: (value: any) => void // 复选框回调

  sub?: ContextMenuCreateOptions // 子菜单项
}
