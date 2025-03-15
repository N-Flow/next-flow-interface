import {StoredRhineVar, RvPath} from "rhine-var";
import RvAttribute from "@/api/service/sync/interface/step/attributes/rv-attribute.interface";
import { TAttributeSubscriber } from "./t-attribute-subscriber.type";

export default interface TAttributeServiceApi {

  state: StoredRhineVar<RvAttribute> | null

  subscribe(subscriber: TAttributeSubscriber): () => void

  unsubscribe(subscriber: TAttributeSubscriber): void

  set<T>(path: string | RvPath, value: any): void

  get<T>(path: string | RvPath): T

}
