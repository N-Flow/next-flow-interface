import {ShareMode} from "./share-mode"
import {MeetingStatus} from "./meeting-status"

export default interface Meeting {
  
  mid: string
  presenterId: string
  status: MeetingStatus
  
  allFollow: boolean
  clickShareMode: ShareMode
  cursorShareMode: ShareMode
  
  selfFollow: boolean
  
}
