import Meeting from "./interface/meeting";
import {ShareMode} from "./interface/share-mode";

export default class MeetingServiceApi {
  
  static state: Meeting

  static getMid(): string {
    return ''
  }

  static setMid(mid: string) {

  }

  // 是否在会议中
  static inMeeting() {
    return false
  }

  // 会议中 且 身份为演讲者
  static isPresenter(): boolean {
    return false
  }

  // 会议中 且 身份为观众
  static isVisitor(): boolean {
    return false
  }

  // 会议中 且 身份为观众 且 实际镜头状态为跟随
  static isFollowingVisitor(): boolean {
    return false
  }

  // 会议中 且 身份为观众 且 实际镜头状态为不跟随
  static isUnfollowingVisitor(): boolean {
    return false
  }

  // 设置会议本地配置信息
  static setConfigInfo(allFollow: boolean, clickShareMode: ShareMode, cursorShareMode: ShareMode): void {
  }

  // 获取邀请链接
  static getInviteLink(): string {
    return ''
  }
  
}
