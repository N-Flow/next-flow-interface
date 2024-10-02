import {PageType} from "./PageType";
import {PageMode} from "./PageMode";

export default interface Page {
  
  type: PageType
  mode: PageMode
  
  pid: string
  sid: string
  
  clientId: string
  
}
