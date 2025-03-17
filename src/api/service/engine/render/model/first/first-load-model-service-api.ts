import RsModel from "@/api/service/engine/render/model/dto/rs-model.interface";
import {FirstLoadModelServiceStatus} from "@/api/service/engine/render/model/first/dto/first-load-model-service-status.enum";
import {FirstLoadModelServiceSubscriber} from "@/api/service/engine/render/model/first/dto/first-load-model-service-subscriber.type";

export default interface FirstLoadModelServiceApi {

  status: FirstLoadModelServiceStatus

  rsModelList: RsModel[]

  loadingNumber: number
  loadedNumber: number
  errorNumber: number
  canceledNumber: number

  totalSize: number
  loadedSize: number

  startTime: number


  start(): void


  subscribe(subscriber: FirstLoadModelServiceSubscriber): () => void

  unsubscribe(subscriber: FirstLoadModelServiceSubscriber): void

}