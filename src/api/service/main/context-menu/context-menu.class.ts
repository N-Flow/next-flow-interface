import {ContextMenuCreateOptions} from "@/api/service/main/context-menu/dto/context-menu-create-options.interface";
import {ContextMenuController} from "@/api/service/main/context-menu/dto/context-menu-controller.interface";
import {MenuLineCreateOptions} from "@/api/service/main/context-menu/dto/menu-line-create-options.interface";
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum";
import MenuLine from "@/api/service/main/context-menu/menu-line.class";

export default class ContextMenu {

  constructor(
    public options: ContextMenuCreateOptions,

    public id: string,
    public lines: MenuLine[] = [],
    public showIcon: boolean = false,
    public x: number = 0,
    public y: number = 0,
    public closeOnOutsideClick: boolean = false,
    public theme?: ThemeColor,

    public controller: ContextMenuController | null = null,
    public createTime: Date = new Date(),
  ) {
  }

  static fromOptions(id: string, options: ContextMenuCreateOptions, menuLines?: MenuLine[]): ContextMenu {
    return new ContextMenu(
      options,
      id,
      menuLines,
      options.showIcon,
      options.x,
      options.y,
      options.closeOnOutsideClick,
      options.theme
    )
  }

}