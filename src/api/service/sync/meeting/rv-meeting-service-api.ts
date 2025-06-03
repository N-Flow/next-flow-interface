import { RecursiveMap, StoredRhineVar} from "rhine-var"
import RvMeeting from "@/api/service/sync/interface/meeting/rv-meeting.interface"

export default interface RvMeetingServiceApi {

  PACKAGE_INTERVAL: number

  ANIMATION_DURATION: number

  CLICK_STORAGE_TIME: number

  CLICK_STORAGE_NUMBER: number

  CLICK_ANIMATION_DURATION: number

  CLICK_ALLOW_DELAY: number

  meetings: RecursiveMap<RvMeeting>

  currentMeeting: StoredRhineVar<RvMeeting> | null

  getRvMeetingById(id: string): any

  setConfigByCurrentMeeting(): boolean

  generateId(): string

  removeAllMeetings(): void

}