export type FirstLoadModelServiceSubscriber = (type: FirstLoadModelServiceEventType) => void

export enum FirstLoadModelServiceEventType {
  START = 'START',
  PROGRESS = 'PROGRESS',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
}
