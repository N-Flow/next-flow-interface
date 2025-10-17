import { Locale } from '@/service/main/internationalization/dto/locale'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'

import { PluginType } from './dto/plugin-type.enum'

export default interface BasePlugin {
  id: string // 插件 ID
  version: string

  namespace: string

  name: string // 插件项目名
  description: string

  type: PluginType
  theme: ThemeColor

  data?: Record<string, unknown>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages?: Record<Locale, Record<string, any>> | string

  onInstall?: () => Promise<void>
  onEnable?: () => Promise<void>
  onDisable?: () => Promise<void>
  onUninstall?: () => Promise<void>
}
