import { NfpApi } from '@/api/nfp-api'
import { MessageTree } from '@/api/service/main/internationalization/internationalization-service-api'
import { MessageLoader } from '@/api/service/main/internationalization/message-loader.type'

import BasePlugin from '../../../../plugin/base-plugin'

export default interface PluginConnectorApi {
  loadMessages(messages: MessageTree | MessageLoader): void

  install(plugin: BasePlugin): void

  readonly api: Readonly<NfpApi>
}
