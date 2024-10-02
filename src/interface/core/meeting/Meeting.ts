import {ShareMode} from "./ShareMode";
import {MeetingStatus} from "./MeetingStatus";

export default interface Meeting {
  
  mid: string
  presenterId: string
  status: MeetingStatus
  
  allFollow: boolean
  clickShareMode: ShareMode
  cursorShareMode: ShareMode
  
  selfFollow: boolean
  
}
