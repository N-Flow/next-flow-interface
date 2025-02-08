import {PluginConfig} from "./interface/plugin-config";
import PluginState from "@/api/service/main/plugin/interface/plugin-state";
import BasePlugin from "@/plugin/base-plugin";

export default interface PluginServiceApi {

  configs: PluginConfig[]

  plugins: Map<string, PluginState>


  get(id: string): PluginState | null


  add(config: PluginConfig): Promise<void>

  debug(config: PluginConfig): void


  load(plugin: BasePlugin): Promise<void>

  activate(id: string): Promise<void>

  deactivate(id: string): Promise<void>

  dispose(id: string): Promise<void>


}
