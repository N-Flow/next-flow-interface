import RvAwareness from '@/api/service/sync/interface/awareness/rv-awareness.interface'

export type AwarenessChangeSubscriber = (allAwareness: Map<number, RvAwareness>) => void

export default interface AwarenessServiceApi {

  subscribeChange: (subscriber: AwarenessChangeSubscriber) => (() => void)

  unsubscribeChange: (subscriber: AwarenessChangeSubscriber) => void

  states: Map<number, RvAwareness>

  getCurrentRvAwareness(): RvAwareness

}
