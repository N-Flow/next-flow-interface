import ContextMenu from '@/api/service/main/context-menu/context-menu.class'
import { ContextMenuController } from '@/api/service/main/context-menu/dto/context-menu-controller.interface'
import { ContextMenuCreateOptions } from '@/api/service/main/context-menu/dto/context-menu-create-options.interface'

export default interface ContextMenuServiceApi {
  /**
   * 当前所有右键菜单
   */
  contextMenus: ContextMenu[]

  /**
   * 创建右键菜单
   *
   * @param options 创建右键菜单的选项对象 具体选项见 ContextMenuCreateOptions
   *
   * @returns 返回所创建的右键菜单的控制器
   */
  create(options: ContextMenuCreateOptions): ContextMenuController

  /**
   * 获取右键菜单
   *
   * @param id 右键菜单的 id
   *
   * @returns 返回对应 id 的右键菜单 如果没有则返回 undefined
   */
  get(id: string): ContextMenu | undefined

  /**
   * 关闭右键菜单
   *
   * @param contextMenu 右键菜单控制器
   */
  close(contextMenu: string | ContextMenu): Promise<boolean>

  /**
   * 关闭所有右键菜单
   */
  closeAll(): Promise<number>
}
