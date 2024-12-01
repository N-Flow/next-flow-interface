import Meeting from "./interface/meeting";
import {ShareMode} from "./interface/share-mode";

export default class MeetingServiceApi {
  
  public static state: Meeting

  // 是否在会议中
  public static inMeeting() {
    return false
  }

  // 会议中 且 身份为演讲者
  public static isPresenter(): boolean {
    return false
  }

  // 会议中 且 身份为观众
  public static isVisitor(): boolean {
    return false
  }

  // 会议中 且 身份为观众 且 实际镜头状态为跟随
  public static isFollowingVisitor(): boolean {
    return false
  }

  // 会议中 且 身份为观众 且 实际镜头状态为不跟随
  public static isUnfollowingVisitor(): boolean {
    return false
  }

  // 设置会议本地配置信息
  public static setConfigInfo(allFollow: boolean, clickShareMode: ShareMode, cursorShareMode: ShareMode): void {
  }

  // 获取邀请链接
  public static getInviteLink(): string {
    return ''
  }
  
}
