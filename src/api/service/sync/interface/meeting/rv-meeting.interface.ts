import {MeetingStatus} from "@/api/service/main/meeting/dto/meeting-status"
import {ShareMode} from "@/api/service/main/meeting/dto/share-mode"

export interface RvMeetingCurrent {
  presenter: string,
  state: {
    personNumber: number
  },
  config: {
    allFollow: boolean,
    clickShareMode: ShareMode,
    cursorShareMode: ShareMode,
  },
  visitors: string[],
}

export interface RvMeetingStatistic {
  total: number,
}

export default interface RvMeeting {
  meetingId: string,
  status: MeetingStatus,
  startTime: number,
  endTime: number,
  current?: RvMeetingCurrent,
  statistic?: RvMeetingStatistic
}