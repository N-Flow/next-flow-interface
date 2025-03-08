import RsModel from "@/api/service/engine/service/model/dto/rs-model.interface";

export type RsModelServiceSubscriber = (type: RsModelServiceEventType, rsModel: RsModel) => void

export enum RsModelServiceEventType {
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
