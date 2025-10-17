import BasePlugin from '@/plugin/base-plugin'
import { PluginType } from '@/plugin/dto/plugin-type.enum'
import { PluginConfig } from '@/service/main/plugin/dto/plugin-config.type'
import { PluginServiceSubscriber } from '@/service/main/plugin/dto/plugin-service-subscriber.type'
import PluginState from '@/service/main/plugin/dto/plugin-state.interface'

export default interface PluginServiceApi {
  /**
   * 是否为精简输出模式 不会针对每一个插件输出详细信息 （默认为 true）
   */
  DETAILED_LOG_MODE: boolean

  /**
   * 所有已添加的插件状态
   */
  plugins: Map<string, PluginState>

  createPreLoadedHook(id: string): void

  completePreLoadedHook(id: string): void

  createPreRenderedHook(id: string): void

  completePreRenderedHook(id: string): void

  /**
   * 获取插件状态
   *
   * @param id  插件 ID
   *
   * @returns  插件状态 没有找到则返回 undefined
   */
  get(id: string): PluginState | undefined

  /**
   * 订阅插件服务事件 详情请见 {@link PluginServiceSubscriber}
   *
   * @param subscriber  订阅者
   *
   * @returns 取消订阅函数
   */
  subscribe(subscriber: PluginServiceSubscriber): () => void

  /**
   * 取消订阅插件服务事件
   *
   * @param subscriber  订阅者
   */
  unsubscribe(subscriber: PluginServiceSubscriber): void

  /**
   * 添加插件
   *
   * @param config  插件配置
   */
  add(config: PluginConfig): Promise<boolean>

  /**
   * 安装插件
   *
   * @param plugin  插件实例
   */
  install(plugin: BasePlugin): Promise<void>

  /**
   * 启用插件
   *
   * @param id  插件 ID
   */
  enable(id: string): Promise<void>

  /**
   * 打开插件 (侧栏中的可开启项)
   *
   * @param id  插件 ID
   */
  open(id: string): Promise<void>

  /**
   * 关闭插件
   *
   * @param id  插件 ID
   */
  close(id: string): Promise<void>

  /**
   * 禁用插件
   *
   * @param id  插件 ID
   */
  disable(id: string): Promise<void>

  /**
   * 卸载插件
   *
   * @param id  插件 ID
   */
  uninstall(id: string): Promise<void>

  waitInstall(id: string): Promise<void>

  waitEnable(id: string): Promise<void>

  isOpenablePlugin(type: PluginType): boolean

  isSideBarPlugin(type: PluginType): boolean

  isViewPlugin(type: PluginType): boolean
}
