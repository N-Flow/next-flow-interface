
export enum HistoryServiceEventType {
  'UNDO' = 'UNDO',
  'REDO' = 'REDO',
}

export type HistoryServiceSubscriber = (type: HistoryServiceEventType, operate: string) => void
