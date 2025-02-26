import {MenuLineType} from "@/api/service/main/context-menu/dto/menu-line-type.enum";
import {FunctionComponent} from "react";

export interface MenuLineCreateOptions {
  id?: string,  //单条菜单唯一id
  type?: MenuLineType, // 菜单选项种类 默认BUTTON
  text?: string,  // 文本
  tip?: string, // 附属文本
  icon?: FunctionComponent | undefined,  // 图标
  color?: string, // 字体颜色
  disabled?: boolean, // 禁用状态 默认false
  shortcut?: string, // 快捷键

  onClick?: () => void,  // 点击事件
  onMouseOver?: () => void, // 鼠标悬停事件
  onMouseOut?: () => void, // 鼠标移开事件

  checked?: boolean; // 是否被选中 默认false
  onChange?: (checked: boolean) => void; // 状态变更时的回调

  subMenu?: MenuLineCreateOptions[], // 子菜单项
}