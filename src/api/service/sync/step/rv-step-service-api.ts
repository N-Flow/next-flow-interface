import {RecursiveArray, RecursiveMap, RecursiveObject} from "rhine-var";
import RvStep from "../interface/step/rv-step.interface";
import {StepOptions} from "@/api/service/sync/step/dto/step-options.type";

export default interface RvStepServiceApi {

  order: RecursiveArray<string>
  steps: RecursiveMap<RvStep>

  get(sid: string): RecursiveObject<RvStep> | undefined


  add(from?: string, index?: number): void

  move(sid: string, to: number): boolean

  remove(sid: string): boolean


  getStepIndex(sid: string): number

  generateId(): string


  getStepOptions(withDisable?: boolean): StepOptions

}
