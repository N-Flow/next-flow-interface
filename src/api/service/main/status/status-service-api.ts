import Status from "@/api/service/main/status/dto/status";
import {StatusChangeSubscriber} from "@/api/service/main/status/dto/status-change-subscriber";

export default interface StatusServiceApi {
  
  status: Status


  subscribeAuthenticated(subscriber: StatusChangeSubscriber): () => void

  unsubscribeAuthenticated(subscriber: StatusChangeSubscriber): void

  waitAuthenticated(): Promise<boolean>


  subscribeDataSynchronized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeDataSynchronized(subscriber: StatusChangeSubscriber): void
  
  waitDataSynchronized(): Promise<boolean>

  
  subscribeSyncInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeSyncInitialized(subscriber: StatusChangeSubscriber): void
  
  waitSyncInitialized(): Promise<boolean>


  subscribeRsInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeRsInitialized(subscriber: StatusChangeSubscriber): void
  
  waitRsInitialized(): Promise<boolean>

  
  subscribeAllInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeAllInitialized(subscriber: StatusChangeSubscriber): void
  
  waitAllInitialized(): Promise<boolean>

  
  subscribeLoaded(subscriber: StatusChangeSubscriber): () => void

  unsubscribeLoaded(subscriber: StatusChangeSubscriber): void
  
  waitLoaded(): Promise<boolean>

  
  subscribeRendered(subscriber: StatusChangeSubscriber): () => void

  unsubscribeRendered(subscriber: StatusChangeSubscriber): void
  
  waitRendered(): Promise<boolean>

  
  subscribeShown(subscriber: StatusChangeSubscriber): () => void

  unsubscribeShown(subscriber: StatusChangeSubscriber): void
  
  waitShown(): Promise<boolean>
  
}

