import {RecursiveArray, RecursiveMap, RecursiveObject} from "rhine-var";
import RvStep from "../interface/step/rv-step.interface";

export default interface RvStepServiceApi {

  order: RecursiveArray<string>
  steps: RecursiveMap<RvStep>

  get(sid: string): RecursiveObject<RvStep> | undefined

  add(from?: string, index?: number): void

  move(sid: string, to: number): boolean

  delete(sid: string): boolean

}
