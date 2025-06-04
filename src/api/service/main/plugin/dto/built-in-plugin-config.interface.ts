import { PluginFrom } from '@/api/service/main/plugin/dto/plugin-from.enum'
import BasePlugin from '@/plugin/base-plugin'

import BasePluginConfig from './base-plugin-config.interface'

export default interface BuiltInPluginConfig extends BasePluginConfig {
  from: PluginFrom.BUILT_IN

  plugin: BasePlugin
}
