import MeetingState from '@/api/service/main/meeting/dto/meeting-state'
import { ShareMode } from '@/api/service/main/meeting/dto/share-mode'

export default interface MeetingServiceApi {
  state: MeetingState

  // 是否在会议中
  inMeeting(): boolean

  // 会议中 且 身份为演讲者
  isPresenter(): boolean

  // 会议中 且 身份为观众
  isVisitor(): boolean

  // 会议中 且 身份为观众 且 实际镜头状态为跟随
  isFollowingVisitor(): boolean

  // 会议中 且 身份为观众 且 实际镜头状态为不跟随
  isUnfollowingVisitor(): boolean

  // 获取邀请链接
  getInvitationLink(): string
}
