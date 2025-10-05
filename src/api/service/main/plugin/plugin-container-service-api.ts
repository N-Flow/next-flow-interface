import { Root } from 'react-dom/client'

import BasePlugin from '@/plugin/base-plugin'
import { IconPluginPosition } from '@/plugin/dto/icon-plugin-position.enum'
import IconPlugin from '@/plugin/icon-plugin'

export interface PluginInformation {
  plugin: BasePlugin
  root?: Root
  iconButton?: HTMLSpanElement
}

export default interface PluginContainerServiceApi {
  plugins: Map<string, PluginInformation>

  addPlugin(plugin: BasePlugin): Promise<void>

  removePlugin(plugin: BasePlugin): void

  openPlugin(plugin: IconPlugin): Promise<boolean>

  closePlugin(plugin: IconPlugin): Promise<boolean>

  closeDrawerPluginByPosition(position: IconPluginPosition): Promise<boolean>
}
