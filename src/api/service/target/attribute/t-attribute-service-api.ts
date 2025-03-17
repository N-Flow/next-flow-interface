import {StoredRhineVar, RvPath} from "rhine-var";
import RvAttribute from "@/api/service/sync/interface/step/attributes/rv-attribute.interface";
import {TSubscriber} from "@/api/service/target/dto/t-subscriber.type";

export default interface TAttributeServiceApi {

  state: StoredRhineVar<RvAttribute> | null

  subscribe(subscriber: TSubscriber): () => void

  unsubscribe(subscriber: TSubscriber): void

  set<T>(path: string | RvPath, value: any): void

  get<T>(path: string | RvPath): T

}
