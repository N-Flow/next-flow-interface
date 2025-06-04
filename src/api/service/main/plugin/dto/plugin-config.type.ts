import ExternalPluginConfig from '@/api/service/main/plugin/dto/external-plugin-config.interface'

import BuiltInPluginConfig from './built-in-plugin-config.interface'

export type PluginConfig = BuiltInPluginConfig | ExternalPluginConfig
