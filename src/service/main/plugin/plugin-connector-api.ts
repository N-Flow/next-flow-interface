import BasePlugin from '@/plugin/base-plugin'

export default interface PluginConnectorApi {
  install(plugin: BasePlugin): void
}
