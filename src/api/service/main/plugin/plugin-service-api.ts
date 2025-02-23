import PluginState from "@/api/service/main/plugin/dto/plugin-state.interface";
import BasePlugin from "@/plugin/base-plugin";
import ExternalPluginConfig from "@/api/service/main/plugin/dto/external-plugin-config.interface";
import BuiltInPluginConfig from "@/api/service/main/plugin/dto/built-in-plugin-config.interface";
import {PluginConfig} from "@/api/service/main/plugin/dto/plugin-config.type";
import { PluginServiceSubscriber } from "@/api/service/main/plugin/dto/plugin-service-subscriber.type";

export default interface PluginServiceApi {

  /**
   * 是否为精简输出模式 不会针对每一个插件输出详细信息 （默认为 true）
   */
  CONCISE_LOG_MODE: boolean

  /**
   * 所有已添加的插件状态
   */
  plugins: Map<string, PluginState>

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
  add(config: PluginConfig): Promise<void>

  /**
   * 添加所有官方插件
   */
  addOfficialPlugins(): Promise<void>

  /**
   * 添加外部插件
   *
   * @param config
   */
  addExternal(config: ExternalPluginConfig): Promise<void>

  /**
   * 添加内置插件
   *
   * @param config
   */
  addBuiltIn(config: BuiltInPluginConfig): void

  /**
   * 调试插件 对接插件项目的dev模式 进行自动热重载
   *
   * @param config  插件配置
   */
  debug(config: ExternalPluginConfig): void


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


}
