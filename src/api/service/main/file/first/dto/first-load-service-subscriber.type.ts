
export type FirstLoadServiceSubscriber = (type: FirstLoadServiceEventType) => void

export enum FirstLoadServiceEventType {
  START = 'START',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
}
