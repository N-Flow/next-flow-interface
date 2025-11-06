import { Locale } from '@/service/main/internationalization/dto/locale'

export type Intl = (strings: TemplateStringsArray, ...values: unknown[]) => string

export type NamespaceSubscriber = (namespaces: string[]) => void

export type MessageLeaf = string
export interface MessageTree {
  [key: string]: MessageTree | MessageLeaf
}

export default interface InternationalizationServiceApi {
  // 全部支持的语言
  ALL_SUPPORT: Locale[]
  // 默认使用的语言
  DEFAULT_SUPPORT: Locale

  // 当前的语言
  locale: Locale

  messages: MessageTree

  // 直接导入多语言
  load(messages: MessageTree): boolean

  // 获取翻译器
  createIntl(namespace?: string): Intl

  // 是否存在对应namespace的缓存
  hasIntlCached(namespace?: string): boolean

  // 删除对应namespace的缓存
  deleteIntlCached(namespace?: string): boolean

  // 清除对应namespace的缓存
  clearIntlCached(namespace?: string): void

  // 等待对应namespace加载成功 并获取翻译
  createIntlWithWait(namespace?: string): Promise<Intl>

  // 监听messages变化
  subscribe(subscriber: NamespaceSubscriber): () => void

  // 取消messages变化监听
  unsubscribe(subscriber: NamespaceSubscriber): void

  // 等待指定namespace载入完成
  wait(namespace: string | string[]): Promise<void>
}
