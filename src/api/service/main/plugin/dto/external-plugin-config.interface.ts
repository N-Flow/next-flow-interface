import {PluginFrom} from "@/api/service/main/plugin/dto/plugin-from.enum"

import BasePluginConfig from "./base-plugin-config.interface"

export default interface ExternalPluginConfig extends BasePluginConfig {
  from: PluginFrom.EXTERNAL

  url: string
  css?: boolean | string
  debug?: string
}
