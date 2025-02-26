
export type FirstLoadServiceSubscriber = (type: FirstLoadServiceEventType) => void

export enum FirstLoadServiceEventType {
  START = 'START',
  PROGRESS = 'PROGRESS',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
}
