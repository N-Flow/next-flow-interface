import Meeting from "../../interface/core/meeting/Meeting";
import {ShareMode} from "../../interface/core/meeting/ShareMode";

export default class MeetingServiceApi {
  
  static meeting: Meeting
  
  static isPresenter(): boolean {
    return false
  }
  
  static isVisitor(): boolean {
    return false
  }
  
  static isFollowingVisitor(): boolean {
    return false
  }
  
  static isUnfollowingVisitor(): boolean {
    return false
  }
  
  static setConfigInfo(allFollow: boolean, clickShareMode: ShareMode, cursorShareMode: ShareMode): void {
  }
  
  static getInviteLink(): string {
    return ''
  }
  
}
