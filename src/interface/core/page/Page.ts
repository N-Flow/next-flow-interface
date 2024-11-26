import {PageType} from "./page-type";
import {PageMode} from "./page-mode";

export default interface Page {
  
  type: PageType
  mode: PageMode
  
  viewing: boolean
  
  pid: string
  sid: string
  
  clientId: string
  
}
