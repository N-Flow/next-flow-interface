import { Locale } from '@/service/main/internationalization/dto/locale'
import { Intl, MessageTree } from '@/service/main/internationalization/internationalization-service-api'
import { ThemeColor } from '@/service/main/theme/dto/theme-color.enum'

import { PluginType } from './dto/plugin-type.enum'

export default interface BasePlugin {
  id: string // 插件 ID
  version: string

  namespace: string
  intl?: Intl
  createIntl: (namespace: string) => Intl

  name: string // 插件项目名
  description: string

  type: PluginType
  theme: ThemeColor

  data?: Record<string, unknown>

  messages?: Record<Locale, MessageTree>

  onInstall?: () => Promise<void>
  onEnable?: () => Promise<void>
  onDisable?: () => Promise<void>
  onUninstall?: () => Promise<void>
}
