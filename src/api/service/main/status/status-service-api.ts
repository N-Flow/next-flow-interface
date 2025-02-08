import Status from "./interface/status";
import {StatusChangeCallback} from "./interface/status-change-callback";

export default interface StatusServiceApi {
  
  status: Status

  afterAuthenticated(callback: StatusChangeCallback): void

  waitAuthenticated(): Promise<boolean>

  afterDataSynchronized(callback: StatusChangeCallback): void
  
  waitDataSynchronized(): Promise<boolean>
  
  afterSyncInitialized(callback: StatusChangeCallback): void
  
  waitSyncInitialized(): Promise<boolean>

  afterRsInitialized(callback: StatusChangeCallback): void
  
  waitRsInitialized(): Promise<boolean>
  
  afterAllInitialized(callback: StatusChangeCallback): void
  
  waitAllInitialized(): Promise<boolean>
  
  afterLoaded(callback: StatusChangeCallback): void
  
  waitLoaded(): Promise<boolean>
  
  afterRendered(callback: StatusChangeCallback): void
  
  waitRendered(): Promise<boolean>
  
  afterShown(callback: StatusChangeCallback): void
  
  waitShown(): Promise<boolean>
  
}

