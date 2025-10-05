import { PluginEventType } from './plugin-event-type.enum'
import PluginState from './plugin-state.interface'

/**
 * 插件服务订阅者
 *
 * @param id 插件id
 * @param type 事件类型
 */
export type PluginServiceSubscriber = (id: string, type: PluginEventType) => void
