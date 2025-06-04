import { PageType } from "../api/service/main/space/dto/page/page-type.enum"

export default class PageUtils {

  static getPageTypeBySpaceText(space: string): PageType {
    if (space === 'space') {return PageType.EDITOR}
    if (space === 'm') {return PageType.VISITOR}
    if (space === 's') {return PageType.VIEWER}
    return PageType.VIEWER
  }

  static forceGetSearchParams(key: string, errorMessage = '') {
    const params = new URLSearchParams(window.location.search),
     mt = params.get(key)
    if (!mt) {
      if (errorMessage) {console.error(errorMessage, mt)}
      window.location.href = '/not-found'
      return ''
    }
    return mt
  }

}
