import BasePlugin from '@/plugin/base-plugin'

export default interface PluginState {
  instance?: BasePlugin
  element?: HTMLScriptElement
  styleElement?: HTMLLinkElement
  installed: boolean
  enabled: boolean
  debug?: boolean
}
