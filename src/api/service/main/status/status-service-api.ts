import Status from "./interface/status";
import {StatusChangeCallback} from "./interface/status-change-callback";

export default class StatusServiceApi {
  
  static status: Status
  
  static afterAuthenticated(callback: StatusChangeCallback) {
  }
  
  static async waitAuthenticated(): Promise<boolean> {
    return false
  }
  
  static afterDataSynchronized(callback: StatusChangeCallback) {
  }
  
  static async waitDataSynchronized(): Promise<boolean> {
    return false
  }
  
  static afterSyncInitialized(callback: StatusChangeCallback) {
  }
  
  static async waitSyncInitialized(): Promise<boolean> {
    return false
  }
  
  static afterRsInitialized(callback: StatusChangeCallback) {
  }
  
  static async waitRsInitialized(): Promise<boolean> {
    return false
  }
  
  static afterAllInitialized(callback: StatusChangeCallback) {
  }
  
  static async waitAllInitialized(): Promise<boolean> {
    return false
  }
  
  static afterLoaded(callback: StatusChangeCallback) {
  }
  
  static async waitLoaded(): Promise<boolean> {
    return false
  }
  
  static afterRendered(callback: StatusChangeCallback) {
  }
  
  static async waitRendered(): Promise<boolean> {
    return false
  }
  
  static afterShown(callback: StatusChangeCallback) {
  }
  
  static async waitShown(): Promise<boolean> {
    return false
  }
  
}

