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

export function getSearchParams(key: string) {
  const params = new URLSearchParams(window.location.search)
  return params.get(key) ?? undefined
}

// Create a namespace object for backward compatibility
const PageUtils = {
  getPageTypeBySpaceText,
  getSearchParams,
}

export default PageUtils
