import { ContextMenuController } from '@/api/service/main/context-menu/dto/context-menu-controller.interface'
import { ContextMenuCreateOptions } from '@/api/service/main/context-menu/dto/context-menu-create-options.interface'
import MenuLine from '@/api/service/main/context-menu/menu-line.class'
import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'

export default class ContextMenu {
  constructor(
    public options: ContextMenuCreateOptions,

    public id: string,
    public lines: MenuLine[] = [],
    public showIcon = false,
    public x = 0,
    public y = 0,
    public closeOnOutsideClick = false,
    public theme?: ThemeColor,

    public controller: ContextMenuController | null = null,
    public createTime: Date = new Date(),
  ) {}

  static fromOptions(
    id: string,
    options: ContextMenuCreateOptions,
    menuLines?: MenuLine[],
  ): ContextMenu {
    let { showIcon } = options
    if (showIcon === undefined) {
      options.lines?.forEach((line) => {
        if (line.icon) {
          showIcon = true
        }
      })
    }
    return new ContextMenu(
      options,
      id,
      menuLines,
      showIcon,
      options.x,
      options.y,
      options.closeOnOutsideClick,
      options.theme,
    )
  }
}
