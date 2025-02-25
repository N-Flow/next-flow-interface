import {FirstLoadServiceStatus} from "@/api/service/main/file/first/dto/first-load-service-status.enum";
import {FirstLoadServiceSubscriber} from "@/api/service/main/file/first/dto/first-load-service-subscriber.type";

export default interface FirstLoadServiceApi {

  status: FirstLoadServiceStatus

  start(): void


  subscribe(subscriber: FirstLoadServiceSubscriber): () => void

  unsubscribe(subscriber: FirstLoadServiceSubscriber): void

}
