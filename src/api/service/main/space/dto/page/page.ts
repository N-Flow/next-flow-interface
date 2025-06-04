import {PageMode} from "./page-mode.enum"
import {PageType} from "./page-type.enum"

export default interface Page {
  
  type: PageType
  mode: PageMode
  
  viewing: boolean
  
  pid: string
  sid: string
  
  clientId: string
  
}
