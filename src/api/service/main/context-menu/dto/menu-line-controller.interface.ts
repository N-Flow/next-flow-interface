import MenuLine from "@/api/service/main/context-menu/menu-line.class";

export interface MenuLineController {

  menuLine: MenuLine

  show(): void

  destroy(): void

}