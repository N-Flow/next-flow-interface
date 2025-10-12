import { Locale } from '@/api/service/main/internationalization/dto/locale'
import { MessageLoader } from '@/api/service/main/internationalization/message-loader.type'

export type Translator = (key: string) => string

export type NamespaceSubscriber = (namespaces: string[]) => void

export interface Messages {
  [key: string]: Messages | string
}

export default interface InternationalizationServiceApi {
  // 全部支持的语言
  ALL_SUPPORT: Locale[]
  // 默认使用的语言
  DEFAULT_SUPPORT: Locale

  // 当前的语言
  locale: Locale

  messages: Messages

  // 直接导入多语言
  load(messages: Messages): Promise<boolean>

  // 应用多语言导入器
  applyLoader(loader: MessageLoader): Promise<boolean>

  // 获取翻译器，wait为true则自动等待对应namespace加载成功
  getTranslator(namespace?: string, wait?: boolean): Promise<Translator>

  // 监听messages变化
  subscribe(subscriber: NamespaceSubscriber): () => void

  // 取消messages变化监听
  unsubscribe(subscriber: NamespaceSubscriber): void

  // 等待指定namespace载入完成
  wait(namespace: string | string[]): Promise<void>
}
