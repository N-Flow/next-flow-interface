import { Locale } from '@/api/service/main/internationalization/dto/locale'

export type Translator = (key: string) => string

export default interface InternationalizationServiceApi {
  ALL_SUPPORT: Locale[]
  DEFAULT_SUPPORT: Locale

  current: Locale

  getTranslator(namespace?: string, locale?: Locale): Promise<Translator>

  getCurrentLocale(): Locale

  getLocaleByString(locale: string): Locale

  loadMessages(locale: Locale): Promise<Record<string, unknown>>

  clearCache(): void
}
