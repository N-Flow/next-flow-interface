import {FunctionComponent} from "react";

export default interface BasePluginConfig {
  id: string

  information?: {
    name: string
    icon?: FunctionComponent | string
    version?: string
    description?: string
  }
}
