import ContextMenu from '@/service/main/context-menu/context-menu.class'

export interface ContextMenuController {
  contextMenu: ContextMenu

  show(): void

  destroy(): void
}
