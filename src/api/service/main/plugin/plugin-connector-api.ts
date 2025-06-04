import { OfpApi } from '@/api/ofp-api'

import BasePlugin from '../../../../plugin/base-plugin'

export default interface PluginConnectorApi {
  install(plugin: BasePlugin): void

  getOfpApi(): OfpApi
}
