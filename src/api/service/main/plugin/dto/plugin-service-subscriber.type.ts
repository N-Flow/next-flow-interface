import { PluginEventType } from './plugin-event-type.enum'

/**
 * 插件服务订阅者
 *
 * @param id 插件id
 * @param type 事件类型
 */
export type PluginServiceSubscriber = (id: string, type: PluginEventType) => void
