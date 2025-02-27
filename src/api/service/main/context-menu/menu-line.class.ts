import {MenuLineType} from "./dto/menu-line-type.enum";
import {FunctionComponent} from "react";
import {MenuLineCreateOptions} from "./dto/menu-line-create-options.interface";
import {ContextMenuController} from "@/api/service/main/context-menu/dto/context-menu-controller.interface";

export default class MenuLine {

  constructor(
    public options: MenuLineCreateOptions,

    public id: string,
    public type: MenuLineType = MenuLineType.BUTTON,
    public text: string = '',
    public tip: string = '',
    public icon: FunctionComponent | undefined = undefined,
    public color: string = '',
    public disabled: boolean = false,
    public shortcut: string = '',

    public onClick: (() => void) = () => {},
    public onMouseOver: (() => void) = () => {},
    public onMouseOut: (() => void) = () => {},

    public checked: boolean = false,
    public onChange: ((checked: boolean) => void) = () => {},

    public subMenu: MenuLineCreateOptions[] = [], // 子菜单项

    public controller: ContextMenuController | null = null,
    public createTime: Date = new Date(),
  ) {
  }

  static fromOptions(id: string, options: MenuLineCreateOptions): MenuLine {
    return new MenuLine(
      options,
      id,
      options.type,
      options.text,
      options.tip,
      options.icon,
      options.color,
      options.disabled,
      options.shortcut,
      options.onClick,
      options.onMouseOver,
      options.onMouseOut,
      options.checked,
      options.onChange,
      options.subMenu,
    )
  }

}