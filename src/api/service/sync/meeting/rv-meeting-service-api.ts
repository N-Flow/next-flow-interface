import { RecursiveMap, StoredRhineVar } from 'rhine-var'

import RvMeeting from '@/api/service/sync/interface/meeting/rv-meeting.interface'

export default interface RvMeetingServiceApi {
  meetings: RecursiveMap<RvMeeting>

  getRvMeeting(meetingId: string): StoredRhineVar<RvMeeting> | null

  generateId(): string

  removeAllMeetings(): void
}
