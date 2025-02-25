import { LocalFile } from "./local-file.type";

export type LocalFileServiceSubscriber = (type: LocalFileServiceEventType, localFile: LocalFile) => void

export enum LocalFileServiceEventType {
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
