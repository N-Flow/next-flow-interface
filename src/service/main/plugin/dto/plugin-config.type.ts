import { FunctionComponent } from 'react'

import { Locale } from '@/service/main/internationalization/dto/locale'

export interface PluginConfig {
  id: string

  url: string

  entry: string
  css?: string
  messages?: {
    path: string
    namespace: string
    support: Locale[]
    default: Locale
  }

  official?: boolean
  necessary?: boolean
  private?: boolean

  information: {
    name: string
    icon?: FunctionComponent | string
    version?: string
    description?: string
  }
}
