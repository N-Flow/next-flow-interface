import { NfpApi } from '@/api/nfp-api'
import { MessageTree } from '@/api/service/main/internationalization/internationalization-service-api'

import BasePlugin from '../../../../plugin/base-plugin'

export default interface PluginConnectorApi {
  install(plugin: BasePlugin, messages: MessageTree): void

  getNfpApi(): NfpApi
}
