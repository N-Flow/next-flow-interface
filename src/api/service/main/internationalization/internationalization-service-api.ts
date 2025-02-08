import {Locale} from "./interface/locale";
import {Translator} from "./interface/translator";

export default interface InternationalizationServiceApi {

  ALL_SUPPORT: Locale[]
  DEFAULT_SUPPORT: Locale

  current: Locale

  getTranslator(namespace: string, locale: Locale): Promise<Translator>

  getCurrentLocale(): Locale

  getLocaleByString(locale: string): Locale

  loadMessages(locale: Locale): Promise<any>

  clearCache(): void

}
