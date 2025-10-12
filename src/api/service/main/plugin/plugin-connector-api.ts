import { NfpApi } from '@/api/nfp-api'
import { MessageLoader } from '@/api/service/main/internationalization/message-loader.type'

import BasePlugin from '../../../../plugin/base-plugin'

export default interface PluginConnectorApi {
  install(plugin: BasePlugin, messageLoader?: MessageLoader): void

  getNfpApi(): NfpApi
}
