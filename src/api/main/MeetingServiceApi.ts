import Meeting from "../../interface/core/meeting/meeting";
import {ShareMode} from "../../interface/core/meeting/share-mode";

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
