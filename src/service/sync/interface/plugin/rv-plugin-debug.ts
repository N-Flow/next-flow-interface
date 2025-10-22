import { Locale } from '@/service/main/internationalization/dto/locale'

/**
 * RvPluginDebug
 *
 * Example:
 * {
 *   id: 'example-plugin',
 *   name: 'Example Plugin',
 *   enable: true
 *
 *   url: 'http://localhost:8080',
 *   hmr: 'ws://localhost:8081',
 *
 *   entry: 'index.js',
 *   css: 'index.css',
 *   messages: {
 *     path: 'messages'
 *     support: ['en', 'zh'],
 *     default: 'en'
 *   }
 * }
 */
export default interface RvPluginDebug {
  id: string
  name: string
  enable: boolean

  url: string
  hmr: string

  entry: string
  css: string
  messages: {
    path: string
    namespace: string
    support: Locale[]
    default: Locale
  }
}
