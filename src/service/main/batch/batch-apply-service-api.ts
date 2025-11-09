export type BatchApplySubscriber = (selected: string[]) => void

export interface BatchApplyDown {
  nid: string
  index: number
  selected: string[]
  value: boolean
}

export default interface BatchApplyServiceApi {
  selected: string[]

  down: BatchApplyDown

  subscribe(subscriber: BatchApplySubscriber): () => void

  unsubscribe(subscriber: BatchApplySubscriber): void
}
