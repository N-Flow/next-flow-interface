import { FunctionComponent } from 'react'

export default interface BasePluginConfig {
  id: string

  necessary?: boolean // 用户无法通过UI进行 Disable

  information?: {
    name: string
    icon?: FunctionComponent | string
    version?: string
    description?: string
  }
}
