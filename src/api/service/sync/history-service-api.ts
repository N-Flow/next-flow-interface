import {HistoryServiceSubscriber} from "@/api/service/sync/dto/history-service-subscriber.type"
import {HistoryServiceStateSubscriber} from "@/api/service/sync/dto/history-service-state-subscriber.type"

export default interface HistoryServiceApi {

  operate: string

  undo(): void

  redo(): void

  canUndo(): boolean

  canRedo(): boolean


  pushState(state: any): void

  check(operate: string, forceStop?: boolean): void

  stop(): void


  clear(): void

  clearUndoStack(): void

  clearRedoStack(): void


  removeFirst(operate?: string): boolean

  removeLast(operate?: string): boolean


  subscribe(subscriber: HistoryServiceSubscriber): () => void

  unsubscribe(subscriber: HistoryServiceSubscriber): void


  subscribeState(subscriber: HistoryServiceStateSubscriber): () => void

  unsubscribeState(subscriber: HistoryServiceStateSubscriber): void

}
