import {FirstLoadServiceStatus} from "@/api/service/main/file/first/dto/first-load-service-status.enum"
import {FirstLoadServiceSubscriber} from "@/api/service/main/file/first/dto/first-load-service-subscriber.type"
import {LocalData} from "@/api/service/main/file/local/dto/local-data.type"

export default interface FirstLoadServiceApi {

  status: FirstLoadServiceStatus

  localDataList: LocalData[]

  loadingNumber: number
  loadedNumber: number
  errorNumber: number
  canceledNumber: number

  totalSize: number
  loadedSize: number

  startTime: number


  start(): void


  subscribe(subscriber: FirstLoadServiceSubscriber): () => void

  unsubscribe(subscriber: FirstLoadServiceSubscriber): void

}
