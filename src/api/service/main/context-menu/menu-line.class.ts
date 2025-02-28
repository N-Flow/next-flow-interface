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
    public color: string = '',
    public disabled: boolean = false,
    public shortcut: string = '',

    // TODO: 添加传入参数e @YF
    public onClick: (() => void) = () => {},

    // TODO: 改名为 onMouseEnter/Leave @YF
    public onMouseOver: (() => void) = () => {},
    public onMouseOut: (() => void) = () => {},

    // TODO: 改名为 checkboxDefaultValue @YF
    public checkboxValue: boolean = false,
    public onCheckboxChange: ((value: any) => void) = () => {},

    // TODO: 删除2个 @YF
    public checked: boolean = false,
    public onChange: ((value: boolean) => void) = () => {},

    // TODO: 改名为 sub @YF
    public subMenu: ContextMenuCreateOptions | undefined = undefined, // 子菜单项

    public controller: ContextMenuController | undefined = undefined,
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
      options.checkboxValue,
      options.onCheckboxChange,
      options.checked,
      options.onChange,
      options.subMenu,
    )
  }

}