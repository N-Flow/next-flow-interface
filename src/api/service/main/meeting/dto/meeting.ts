import { MeetingStatus } from './meeting-status'
import { ShareMode } from './share-mode'

export default interface Meeting {
  mid: string
  presenterId: number
  status: MeetingStatus

  allFollow: boolean
  clickShareMode: ShareMode
  cursorShareMode: ShareMode

  selfFollow: boolean
}
