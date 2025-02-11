import PluginConfig from "./plugin-config";

export default interface ExternalPluginConfig extends PluginConfig {
  url: string
  css?: boolean | string
  debug?: string
}
