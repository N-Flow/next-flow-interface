import { RecursiveArray, RecursiveMap, RecursiveObject, StoredRhineVar } from 'rhine-var'

import { StepOptions } from '@/service/sync/step/dto/step-options.type'

import RvStep from '../interface/step/rv-step.interface'

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
