import {MeetingStatus} from "@/api/service/main/meeting/dto/meeting-status";
import {ShareMode} from "@/api/service/main/meeting/dto/share-mode";

export default interface RvMeeting {
  meetingId: string
  status: MeetingStatus
  startTime: number
  endTime: number
  current: {
    presenter: string
    state: {
      personNumber: number
    }
    config: {
      allFollow: boolean
      clickShareMode: ShareMode
      cursorShareMode: ShareMode
    }
    visitors: string[]
  }
}