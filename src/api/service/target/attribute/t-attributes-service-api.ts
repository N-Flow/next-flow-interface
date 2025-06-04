import {RvPath, StoredRhineVar} from "rhine-var"

import RvAttributes from "@/api/service/sync/interface/step/attributes/rv-attributes.interface"
import {TAttributesSubscriber} from "@/api/service/target/dto/t-attributes-subscriber.type"

export default interface TAttributesServiceApi {

  sid: string

  nid: string

  state: StoredRhineVar<RvAttributes> | null

  subscribe(subscriber: TAttributesSubscriber): () => void

  unsubscribe(subscriber: TAttributesSubscriber): void

  set<T>(path: string | RvPath, value: any): void

  get<T>(path: string | RvPath): T

}
