import { LocalData } from './local-data.type'

export type LocalDataServiceSubscriber = (
  type: LocalDataServiceEventType,
  LocalData: LocalData,
) => void

export enum LocalDataServiceEventType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  START = 'START',
  PROGRESS = 'PROGRESS',
  PAUSE = 'PAUSE',
  RESUME = 'RESUME',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
}
