import { MeetingStatus } from './meeting-status'
import { ShareMode } from './share-mode'

export default interface MeetingState {
  meetingId: string
  presenterId: number
  status: MeetingStatus

  startTime: number
  peopleCount: number

  forceFollow: boolean
  clickShareMode: ShareMode
  cursorShareMode: ShareMode

  selfFollow: boolean
}
