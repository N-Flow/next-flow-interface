import RsSelectionState from '@/service/engine/operate/selection/dto/rs-selection-state.interface'

import { LastSubscriber } from './dto/last-subscriber.type'
import { SelectedSubscriber } from './dto/selected-subscriber.type'

export default interface RsSelectionServiceApi {
  state: RsSelectionState

  changeBranchMode(value?: boolean, message?: boolean): void

  click: (nid?: string, ctrl?: boolean) => void

  set: (nid: string) => void

  add: (nid: string) => void

  remove: (nid: string) => void

  clear: () => void

  subscribe(subscriber: SelectedSubscriber): () => void

  unsubscribe(subscriber: SelectedSubscriber): void

  subscribeLast(subscriber: LastSubscriber): () => void

  unsubscribeLast(subscriber: LastSubscriber): void
}
