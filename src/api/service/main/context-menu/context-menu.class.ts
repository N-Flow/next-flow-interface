import {ContextMenuCreateOptions} from "@/api/service/main/context-menu/dto/context-menu-create-options.interface";
import {ContextMenuController} from "@/api/service/main/context-menu/dto/context-menu-controller.interface";
import {MenuLineCreateOptions} from "@/api/service/main/context-menu/dto/menu-line-create-options.interface";
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum";

export default class ContextMenu {

  constructor(
    public options: ContextMenuCreateOptions,

    public id: string,
    public lines: MenuLineCreateOptions[] = [],
    public showIcon: boolean = false,
    public x: number = 0,
    public y: number = 0,
    public closeOnOutsideClick: boolean = false,
    public theme?: ThemeColor,

    public controller: ContextMenuController | null = null,
    public createTime: Date = new Date(),
  ) {
  }

  static fromOptions(id: string, options: ContextMenuCreateOptions): ContextMenu {
    return new ContextMenu(
      options,
      id,
      options.lines,
      options.showIcon,
      options.x,
      options.y,
      options.closeOnOutsideClick,
      options.theme
    )
  }

}