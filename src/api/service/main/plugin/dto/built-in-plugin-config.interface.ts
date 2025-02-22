import BasePlugin from "@/plugin/base-plugin";
import BasePluginConfig from "./base-plugin-config.interface";
import {PluginFrom} from "@/api/service/main/plugin/dto/plugin-from.enum";

export default interface BuiltInPluginConfig extends BasePluginConfig {
  from: PluginFrom.BUILT_IN

  plugin: BasePlugin
}
