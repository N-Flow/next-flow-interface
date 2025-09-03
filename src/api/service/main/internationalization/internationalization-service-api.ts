import { Locale } from '@/api/service/main/internationalization/dto/locale'

export type Translator = (key: string) => string

export type NamespaceSubscriber = (namespaces: string[]) => void

export default interface InternationalizationServiceApi {
  // 全部支持的语言
  ALL_SUPPORT: Locale[]
  // 默认使用的语言
  DEFAULT_SUPPORT: Locale

  // 当前的语言
  locale: Locale

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  load(messages: Record<string, any>): void

  // 获取翻译器，wait为true则自动等待对应namespace加载成功
  getTranslator(namespace?: string, wait?: boolean): Promise<Translator>

  // 通过字符串转换语言元组，不存在则返回undefined
  getLocaleByString(locale: string): Locale | undefined

  // 监听messages变化
  subscribe(subscriber: NamespaceSubscriber): () => void

  // 取消messages变化监听
  unsubscribe(subscriber: NamespaceSubscriber): void

  // 等待指定namespace载入完成
  wait(namespace: string | string[]): Promise<void>
}
