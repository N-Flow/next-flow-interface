import { FunctionComponent, MouseEvent } from 'react'

import { ContextMenuCreateOptions } from '@/service/main/context-menu/dto/context-menu-create-options.interface'

import { MenuLineCreateOptions } from './dto/menu-line-create-options.interface'
import { MenuLineType } from './dto/menu-line-type.enum'

export default class MenuLine {
  constructor(
    public options: MenuLineCreateOptions,

    public id: string,
    public type: MenuLineType = MenuLineType.BUTTON,
    public text = '',
    public tip = '',
    public icon: FunctionComponent | undefined = undefined,
    public view: FunctionComponent | undefined = undefined,
    public color = '',
    public disabled = false,
    public shortcut = '',

    public onClick: (e: MouseEvent) => void = () => {
      /* Default click handler */
    },
    public onMouseOver: (e: MouseEvent) => void = () => {
      /* Default mouse over handler */
    },
    public onMouseOut: (e: MouseEvent) => void = () => {
      /* Default mouse out handler */
    },

    public closeAllOnClick: boolean = type === MenuLineType.BUTTON,

    public checkboxDefaultValue = false,
    public onCheckboxChange: (value: boolean) => void = () => {
      /* Default checkbox change handler */
    },

    public sub: ContextMenuCreateOptions | undefined = undefined, // 子菜单项

    public createTime: Date = new Date(),
  ) {}

  static fromOptions(id: string, options: MenuLineCreateOptions): MenuLine {
    return new MenuLine(
      options,
      id,
      options.type,
      options.text,
      options.tip,
      options.icon,
      options.view,
      options.color,
      options.disabled,
      options.shortcut,
      options.onClick,
      options.onMouseOver,
      options.onMouseOut,
      options.closeAllOnClick,
      options.checkboxDefaultValue,
      options.onCheckboxChange,
      options.sub,
    )
  }
}
