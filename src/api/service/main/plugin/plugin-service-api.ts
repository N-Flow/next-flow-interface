import PluginState from "@/api/service/main/plugin/interface/plugin-state.interface";
import BasePlugin from "@/plugin/base-plugin";
import ExternalPluginConfig from "@/api/service/main/plugin/interface/external-plugin-config.interface";
import BuiltInPluginConfig from "@/api/service/main/plugin/interface/built-in-plugin-config.interface";

export default interface PluginServiceApi {

  plugins: Map<string, PluginState>


  get(id: string): PluginState | null


  addExternal(config: ExternalPluginConfig): Promise<void>

  addBuiltIn(config: BuiltInPluginConfig): void

  debug(config: ExternalPluginConfig): void


  load(plugin: BasePlugin): Promise<void>

  activate(id: string): Promise<void>

  deactivate(id: string): Promise<void>

  dispose(id: string): Promise<void>


}
