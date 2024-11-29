import Meeting from "./interface/meeting";
import {ShareMode} from "./interface/share-mode";

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
