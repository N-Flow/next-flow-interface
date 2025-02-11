import BasePlugin from "../../../../../plugin/base-plugin";

export default interface PluginState {
  instance?: BasePlugin
  element: HTMLScriptElement
  loaded: boolean
  activated: boolean
  debug?: boolean
}
