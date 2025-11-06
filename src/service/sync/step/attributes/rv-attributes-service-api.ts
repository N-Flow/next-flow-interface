import { RecursiveMap, RhineVarMap, StoredRhineVar } from 'rhine-var'

import RvAttributes from '../../interface/step/attributes/rv-attributes.interface'

export default interface RvAttributesServiceApi {
  forEach(callback: (attributes: RhineVarMap, sid: string) => void): void

  forEachNode(nid: string, callback: (attributes: RhineVarMap, sid: string) => void): void

  setToAllStep(nid: string, key: string, value: unknown): void

  getMap(sid?: string): RecursiveMap<RvAttributes> | undefined

  get(nid: string, sid?: string): StoredRhineVar<RvAttributes> | undefined
}
