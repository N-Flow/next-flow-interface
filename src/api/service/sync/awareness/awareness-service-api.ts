import RvAwareness from '@/api/service/sync/interface/awareness/rv-awareness.interface'

export interface AwarenessChanges {
  added: number[]
  updated: number[]
  removed: number[]
}

export type AwarenessChangeSubscriber = (
  changeStates: Map<number, RvAwareness>,
  changes: AwarenessChanges,
) => void

export default interface AwarenessServiceApi {
  subscribeChange: (subscriber: AwarenessChangeSubscriber) => () => void

  unsubscribeChange: (subscriber: AwarenessChangeSubscriber) => void

  states: Map<number, RvAwareness>

  getCurrentRvAwareness(): RvAwareness
}
