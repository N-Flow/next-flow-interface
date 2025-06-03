import {RecursiveArray, RecursiveMap, RecursiveObject, StoredRhineVar} from "rhine-var"
import RvStep from "../interface/step/rv-step.interface"
import {StepOptions} from "@/api/service/sync/step/dto/step-options.type"

export default interface RvStepServiceApi {

  order: RecursiveArray<string>
  steps: RecursiveMap<RvStep>

  get(sid: string): RecursiveObject<RvStep> | undefined


  add(from?: string, index?: number): string

  move(sid: string, to: number): boolean

  remove(sid: string): boolean


  getStepOptions(withDisable?: boolean): StepOptions

  getStepIndex(sid: string): number

  getStepByIndex(index: number): StoredRhineVar<RvStep> | undefined

  getCurrentStep(): StoredRhineVar<RvStep> | undefined

  generateId(): string


}
