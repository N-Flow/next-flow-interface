// Import GlobalMessage from "@/core/main/message/global-message";
// Import InternationalizationService from "@/core/main/internationalization/internationalization-service";

export function getParam(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i'),
    r = window.location.search.substring(1).match(reg)
  return r != null ? decodeURIComponent(r[2]) : ''
}

export function getHashParam(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i'),
    r = window.location.hash.substring(1).match(reg)
  return r != null ? decodeURIComponent(r[2]) : ''
}

export function check(str: string) {
  const v = new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?:\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i',
  )
  return v.test(str)
}

export async function copyCurrentUrlToClipboard(): Promise<boolean> {
  const url = window.location.href
  return trySetClipboard(url)
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    // GlobalMessage.success('copySuccessful', 'utils')
    return true
  } catch {
    // GlobalMessage.error('copyFailed', 'utils')
    return false
  }
}

export async function trySetClipboard(url: string) {
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    return false
  }
}

export function extractFilenameFromUrl(url: string, includeExtension = true): string {
  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const filename = pathname.split('/').pop() ?? ''
    
    if (!includeExtension && filename.includes('.')) {
      return filename.substring(0, filename.lastIndexOf('.'))
    }
    
    return filename
  } catch {
    return ''
  }
}

// Create a namespace object for backward compatibility
const UrlUtils = {
  getParam,
  getHashParam,
  check,
  copyCurrentUrlToClipboard,
  copyText,
  trySetClipboard,
  extractFilenameFromUrl,
}

export default UrlUtils
