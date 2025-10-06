import { FunctionComponent } from 'react'

export interface PluginConfig {
  id: string

  url: string

  official?: boolean
  necessary?: boolean
  private?: boolean

  css?: boolean | string
  debug?: string

  information: {
    name: string
    icon?: FunctionComponent | string
    version?: string
    description?: string
  }
}
