import {MenuLineType} from "./dto/menu-line-type.enum";
import {FunctionComponent} from "react";
import {MenuLineCreateOptions} from "./dto/menu-line-create-options.interface";
import {ContextMenuController} from "@/api/service/main/context-menu/dto/context-menu-controller.interface";
import {ContextMenuCreateOptions} from "@/api/service/main/context-menu/dto/context-menu-create-options.interface";

export default class MenuLine {

  constructor(
    public options: MenuLineCreateOptions,

    public id: string,
    public type: MenuLineType = MenuLineType.BUTTON,
    public text: string = '',
    public tip: string = '',
    public icon: FunctionComponent | undefined = undefined,
    public view: FunctionComponent | undefined = undefined,
    public color: string = '',
    public disabled: boolean = false,
    public shortcut: string = '',

    public onClick: ((e: any) => void) = () => {},
    public onMouseOver: ((e: any) => void) = () => {},
    public onMouseOut: ((e: any) => void) = () => {},

    public closeAllOnClick: boolean = type === MenuLineType.BUTTON,

    public checkboxDefaultValue: boolean = false,
    public onCheckboxChange: ((value: any) => void) = () => {},

    public sub: ContextMenuCreateOptions | undefined = undefined, // 子菜单项

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