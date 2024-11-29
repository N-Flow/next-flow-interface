import {Locale} from "./interface/locale";
import {Translator} from "./interface/translator";

export default class InternationalizationServiceApi {
  public static ALL_SUPPORT: Locale[] = [Locale.EN, Locale.ZH]
  public static DEFAULT_SUPPORT: Locale = Locale.EN

  public static current: Locale

  public static async getTranslator(namespace: string = '', locale: Locale = this.getCurrentLocale()): Promise<Translator> {
    return {} as any
  }

  public static getCurrentLocale(): Locale {
    return {} as any
  }

  public static getLocaleByString(locale: string): Locale {
    return {} as any
  }

  public static async loadMessages(locale: Locale): Promise<any> {

  }

  public static clearCache() {

  }

}
