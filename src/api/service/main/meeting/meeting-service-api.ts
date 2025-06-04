import Meeting from '@/api/service/main/meeting/dto/meeting'
import { ShareMode } from '@/api/service/main/meeting/dto/share-mode'

export default interface MeetingServiceApi {
  state: Meeting

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

  // 设置会议本地配置信息
  setConfigInfo(allFollow: boolean, clickShareMode: ShareMode, cursorShareMode: ShareMode): void

  // 获取邀请链接
  getInviteLink(): string
}
