import { Locale } from '@/service/main/internationalization/dto/locale'

export type Translator = (strings: TemplateStringsArray, ...values: unknown[]) => string

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
  load(messages: MessageTree): Promise<boolean>

  // 获取翻译器
  createTranslator(namespace?: string): Translator

  // 等待对应namespace加载成功 并获取翻译
  createTranslatorWithWait(namespace?: string): Promise<Translator>

  // 监听messages变化
  subscribe(subscriber: NamespaceSubscriber): () => void

  // 取消messages变化监听
  unsubscribe(subscriber: NamespaceSubscriber): void

  // 等待指定namespace载入完成
  wait(namespace: string | string[]): Promise<void>
}
