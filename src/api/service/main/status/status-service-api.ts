import Status from "./interface/status";
import {StatusChangeCallback} from "./interface/status-change-callback";

export default class StatusServiceApi {
  
  static status: Status

  public static afterAuthenticated(callback: StatusChangeCallback) {
  }

  public static async waitAuthenticated(): Promise<boolean> {
    return false
  }

  public static afterDataSynchronized(callback: StatusChangeCallback) {
  }
  
  public static async waitDataSynchronized(): Promise<boolean> {
    return false
  }
  
  public static afterSyncInitialized(callback: StatusChangeCallback) {
  }
  
  public static async waitSyncInitialized(): Promise<boolean> {
    return false
  }

  public static afterRsInitialized(callback: StatusChangeCallback) {
  }
  
  public static async waitRsInitialized(): Promise<boolean> {
    return false
  }
  
  public static afterAllInitialized(callback: StatusChangeCallback) {
  }
  
  public static async waitAllInitialized(): Promise<boolean> {
    return false
  }
  
  public static afterLoaded(callback: StatusChangeCallback) {
  }
  
  public static async waitLoaded(): Promise<boolean> {
    return false
  }
  
  public static afterRendered(callback: StatusChangeCallback) {
  }
  
  public static async waitRendered(): Promise<boolean> {
    return false
  }
  
  public static afterShown(callback: StatusChangeCallback) {
  }
  
  public static async waitShown(): Promise<boolean> {
    return false
  }
  
}

