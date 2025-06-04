import { PluginEventType } from './plugin-event-type.enum'
import PluginState from './plugin-state.interface'

/**
 * 插件服务订阅者
 *
 * @param type 事件类型
 * @param plugin 插件状态
 */
export type PluginServiceSubscriber = (type: PluginEventType, plugin?: PluginState) => void
