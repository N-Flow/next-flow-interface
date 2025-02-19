import {RecursiveArray, RecursiveMap, RecursiveObject} from "rhine-var";
import RvSteps from "../interface/steps/rv-steps.interface";

export default interface RvStepServiceApi {

  order: RecursiveArray<string>
  steps: RecursiveMap<RvSteps>

  get(sid: string): RecursiveObject<RvSteps> | undefined

  add(from?: string, index?: number): void

  move(sid: string, to: number): boolean

  delete(sid: string): boolean

}
