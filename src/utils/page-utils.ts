import { PageType } from '../api/service/main/space/dto/page/page-type.enum'

export function getPageTypeBySpaceText(space: string): PageType {
  if (space === 'space') {
    return PageType.EDITOR
  }
  if (space === 'm') {
    return PageType.VISITOR
  }
  if (space === 's') {
    return PageType.VIEWER
  }
  return PageType.VIEWER
}

export function forceGetSearchParams(key: string, errorMessage = '') {
  const params = new URLSearchParams(window.location.search),
    mt = params.get(key)
  if (!mt) {
    if (errorMessage) {
      console.error(errorMessage, mt)
    }
    window.location.href = '/not-found'
    return ''
  }
  return mt
}

// Create a namespace object for backward compatibility
const PageUtils = {
  getPageTypeBySpaceText,
  forceGetSearchParams,
}

export default PageUtils
