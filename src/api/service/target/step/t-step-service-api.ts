import {StoredRhineVar, YPath} from "rhine-var";
import RvSteps from "../../sync/interface/steps/rv-steps.interface";
import {TStepSubscriber} from "@/api/service/target/step/t-step-subscriber.type";

export default interface TStepServiceApi {

  state: StoredRhineVar<RvSteps>

  subscribe(subscriber: TStepSubscriber): () => void

  unsubscribe(subscriber: TStepSubscriber): void

  set<T>(path: string | YPath, value: any): void

  get<T>(path: string | YPath): T

}
