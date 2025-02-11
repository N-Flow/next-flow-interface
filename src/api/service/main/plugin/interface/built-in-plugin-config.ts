import BasePlugin from "@/plugin/base-plugin";
import PluginConfig from "./plugin-config";

export default interface BuiltInPluginConfig extends PluginConfig {
  plugin: BasePlugin
}
