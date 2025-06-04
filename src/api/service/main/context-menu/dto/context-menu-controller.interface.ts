import ContextMenu from '@/api/service/main/context-menu/context-menu.class'

export interface ContextMenuController {
  contextMenu: ContextMenu

  show(): void

  destroy(): void
}
