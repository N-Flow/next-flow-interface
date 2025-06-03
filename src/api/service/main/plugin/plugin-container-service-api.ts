import BasePlugin from "@/plugin/base-plugin"
import { IconPluginPosition } from "@/plugin/dto/icon-plugin-position.enum"
import IconPlugin from "@/plugin/icon-plugin"

export default interface PluginContainerServiceApi {

  plugins: BasePlugin[]

  addPlugin(plugin: BasePlugin): void

  removePlugin(plugin: BasePlugin): void


  openPlugin(plugin: IconPlugin): boolean

  closePlugin(plugin: IconPlugin): boolean

  closePluginByPosition(position: IconPluginPosition): boolean

}
