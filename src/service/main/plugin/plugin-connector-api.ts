import BasePlugin from '@/plugin/base-plugin'
import { MessageTree } from '@/service/main/internationalization/internationalization-service-api'
import { MessageLoader } from '@/service/main/internationalization/message-loader.type'

export default interface PluginConnectorApi {
  loadMessages(messages: MessageTree | MessageLoader): void

  install(plugin: BasePlugin): void
}
