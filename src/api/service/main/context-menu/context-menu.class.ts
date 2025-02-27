import {ContextMenuCreateOptions} from "@/api/service/main/context-menu/dto/context-menu-create-options.interface";
import {ContextMenuController} from "@/api/service/main/context-menu/dto/context-menu-controller.interface";
import {MenuLineCreateOptions} from "@/api/service/main/context-menu/dto/menu-line-create-options.interface";

export default class ContextMenu {

  constructor(
    public options: ContextMenuCreateOptions,

    public id: string,
    public lines: MenuLineCreateOptions[] = [],
    public x: number = 0,
    public y: number = 0,
    public onOutsideClick: (() => void) = () => {},
    public closeOnOutsideClick: boolean = false,

    public controller: ContextMenuController | null = null,
    public createTime: Date = new Date(),
  ) {
  }

  static fromOptions(id: string, options: ContextMenuCreateOptions): ContextMenu {
    return new ContextMenu(
      options,
      id,
      options.lines,
      options.x,
      options.y,
      options.onOutsideClick,
      options.closeOnOutsideClick,
    )
  }

}