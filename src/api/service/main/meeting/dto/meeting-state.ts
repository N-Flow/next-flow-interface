import { MeetingStatus } from './meeting-status'
import { ShareMode } from './share-mode'

export default interface MeetingState {
  meetingId: string
  presenterId: number
  status: MeetingStatus

  startTime: number
  people: number

  allFollow: boolean
  clickShareMode: ShareMode
  cursorShareMode: ShareMode

  selfFollow: boolean
}
