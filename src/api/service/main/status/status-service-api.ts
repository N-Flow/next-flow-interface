import Status from '@/api/service/main/status/dto/status'
import { StatusChangeSubscriber } from '@/api/service/main/status/dto/status-change-subscriber'

export default interface StatusServiceApi {
  status: Status

  subscribeAuthenticated(subscriber: StatusChangeSubscriber): () => void

  unsubscribeAuthenticated(subscriber: StatusChangeSubscriber): void

  afterAuthenticated(subscriber: StatusChangeSubscriber): void

  waitAuthenticated(): Promise<boolean>

  subscribeDataSynchronized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeDataSynchronized(subscriber: StatusChangeSubscriber): void

  afterDataSynchronized(subscriber: StatusChangeSubscriber): void

  waitDataSynchronized(): Promise<boolean>

  subscribeSyncInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeSyncInitialized(subscriber: StatusChangeSubscriber): void

  afterSyncInitialized(subscriber: StatusChangeSubscriber): void

  waitSyncInitialized(): Promise<boolean>

  subscribeRsInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeRsInitialized(subscriber: StatusChangeSubscriber): void

  afterRsInitialized(subscriber: StatusChangeSubscriber): void

  waitRsInitialized(): Promise<boolean>

  subscribeAllInitialized(subscriber: StatusChangeSubscriber): () => void

  unsubscribeAllInitialized(subscriber: StatusChangeSubscriber): void

  afterAllInitialized(subscriber: StatusChangeSubscriber): void

  waitAllInitialized(): Promise<boolean>

  subscribePluginEnabled(subscriber: StatusChangeSubscriber): () => void

  unsubscribePluginEnabled(subscriber: StatusChangeSubscriber): void

  afterPluginEnabled(subscriber: StatusChangeSubscriber): void

  waitPluginEnabled(): Promise<boolean>

  subscribePluginPreLoaded(subscriber: StatusChangeSubscriber): () => void

  unsubscribePluginPreLoaded(subscriber: StatusChangeSubscriber): void

  afterPluginPreLoaded(subscriber: StatusChangeSubscriber): void

  waitPluginPreLoaded(): Promise<boolean>

  subscribeFileLoaded(subscriber: StatusChangeSubscriber): () => void

  unsubscribeFileLoaded(subscriber: StatusChangeSubscriber): void

  afterFileLoaded(subscriber: StatusChangeSubscriber): void

  waitFileLoaded(): Promise<boolean>

  subscribeModelLoaded(subscriber: StatusChangeSubscriber): () => void

  unsubscribeModelLoaded(subscriber: StatusChangeSubscriber): void

  afterModelLoaded(subscriber: StatusChangeSubscriber): void

  waitModelLoaded(): Promise<boolean>

  subscribePluginPreRendered(subscriber: StatusChangeSubscriber): () => void

  unsubscribePluginPreRendered(subscriber: StatusChangeSubscriber): void

  afterPluginPreRendered(subscriber: StatusChangeSubscriber): void

  waitPluginPreRendered(): Promise<boolean>

  subscribeRendered(subscriber: StatusChangeSubscriber): () => void

  unsubscribeRendered(subscriber: StatusChangeSubscriber): void

  afterRendered(subscriber: StatusChangeSubscriber): void

  waitRendered(): Promise<boolean>

  subscribeShown(subscriber: StatusChangeSubscriber): () => void

  unsubscribeShown(subscriber: StatusChangeSubscriber): void

  afterShown(subscriber: StatusChangeSubscriber): void

  waitShown(): Promise<boolean>
}
