// Import GlobalMessage from "@/core/main/message/global-message";
// Import InternationalizationService from "@/core/main/internationalization/internationalization-service";

export default class UrlUtils {
  static getParam(name: string): string {
    const reg = new RegExp(`(^|&)${  name  }=([^&]*)(&|$)`, 'i'),
     r = window.location.search.substr(1).match(reg)
    return (r != null) ? decodeURIComponent(r[2]) : ''
  }

  static getHashParam(name: string): string {
    const reg = new RegExp(`(^|&)${  name  }=([^&]*)(&|$)`, 'i'),
     r = window.location.hash.substr(1).match(reg)
    return (r != null) ? decodeURIComponent(r[2]) : ''
  }

  static check(str: string) {
    const v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i')
    return v.test(str)
  }

  static async copyCurrentUrlToClipboard(): Promise<boolean> {
    const url = window.location.href
    return UrlUtils.trySetClipboard(url)
  }

  static async copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      // GlobalMessage.success('copySuccessful', 'utils')
      return true
    } catch {
      // GlobalMessage.error('copyFailed', 'utils')
      return false
    }
  }

  static async trySetClipboard(url: string) {
    try {
      await navigator.clipboard.writeText(url)
      return true
    } catch {
      return false
    }
  }
}
