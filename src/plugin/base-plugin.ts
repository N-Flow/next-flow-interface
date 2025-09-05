import { Locale } from '@/api/service/main/internationalization/dto/locale'
import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'

import { PluginType } from './dto/plugin-type.enum'

export default interface BasePlugin {
  id: string // 插件 ID
  name: string // 插件项目名
  version: string
  description: string

  type: PluginType
  theme: ThemeColor

  loadApi?: () => void

  data?: Record<string, unknown>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages?: Record<Locale, Record<string, any>> | string

  onInstall?: () => Promise<void>
  onEnable?: () => Promise<void>
  onDisable?: () => Promise<void>
  onUninstall?: () => Promise<void>
}
