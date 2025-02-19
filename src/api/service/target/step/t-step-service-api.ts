import {StoredRhineVar, YPath} from "rhine-var";
import RvStep from "../../sync/interface/step/rv-step.interface";
import {TStepSubscriber} from "@/api/service/target/step/t-step-subscriber.type";

export default interface TStepServiceApi {

  state: StoredRhineVar<RvStep>

  subscribe(subscriber: TStepSubscriber): () => void

  unsubscribe(subscriber: TStepSubscriber): void

  set<T>(path: string | YPath, value: any): void

  get<T>(path: string | YPath): T

}
