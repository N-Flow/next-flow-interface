import { MeetingStatus } from '@/api/service/main/meeting/dto/meeting-status'
import { ShareMode } from '@/api/service/main/meeting/dto/share-mode'

export interface RvMeetingCurrent {
  presenterId: number
  state: {
    personNumber: number
  }
  config: {
    allFollow: boolean
    clickShareMode: ShareMode
    cursorShareMode: ShareMode
  }
  visitors: number[]
}

export interface RvMeetingStatistic {
  people: {
    total: number
  }
}

export default interface RvMeeting {
  meetingId: string
  status: MeetingStatus
  startTime: number
  current: RvMeetingCurrent
  statistic: RvMeetingStatistic
  endTime?: number
}
