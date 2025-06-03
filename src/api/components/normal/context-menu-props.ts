import {DivProps} from "@/api/components/interface/base-types"
import ContextMenu from "@/api/service/main/context-menu/context-menu.class"

export interface ContextMenuProps extends DivProps{
  contextMenus: ContextMenu,
}