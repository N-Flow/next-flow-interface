import {PageType} from "./page-type.enum";
import {PageMode} from "./page-mode.enum";

export default interface Page {
  
  type: PageType
  mode: PageMode
  
  viewing: boolean
  
  pid: string
  sid: string
  
  clientId: string
  
}
