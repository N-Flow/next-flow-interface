import HighLightInfo from '@/service/engine/operate/selection/dto/hight-light-info.interface'
import RsSelectionNodeInfo from '@/service/engine/operate/selection/dto/rs-selection-node-info'
import { RsSelectionMaterialInfo } from '@/service/engine/operate/selection/dto/rs-selection-state.interface'

import { LastSubscriber } from './dto/last-subscriber.type'
import { SelectedSubscriber } from './dto/selected-subscriber.type'

export default interface RsSelectionServiceApi {
  highlight: HighLightInfo[]

  selected: RsSelectionNodeInfo[]

  last: RsSelectionNodeInfo | null

  branchMode: boolean

  materialInfo: RsSelectionMaterialInfo

  set(nidList: string[]): void

  get(nid: string): RsSelectionNodeInfo | null

  has(nid: string): boolean

  clear(): void

  add(nid: string): void

  remove(nid: string): void

  click(nid?: string, ctrl?: boolean): void

  changeBranchMode(value?: boolean, message?: boolean): void

  toAllChildren(log?: boolean): boolean

  subscribe(subscriber: SelectedSubscriber): () => void

  unsubscribe(subscriber: SelectedSubscriber): void

  subscribeLast(subscriber: LastSubscriber): () => void

  unsubscribeLast(subscriber: LastSubscriber): void
}
