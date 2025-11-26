import { RecursiveMap, RhineVarMap, StoredRhineVar } from 'rhine-var'

import RvNode from '../../interface/step/attributes/rv-node.interface'

export default interface RvNodeServiceApi {
  forEach(callback: (attributes: RhineVarMap, sid: string) => void): void

  forEachNode(
    nid: string,
    callback: (attributes: StoredRhineVar<RvNode>, sid: string) => void,
  ): void

  setToAllStep(nid: string, key: string, value: unknown): void

  getAll(sid?: string): RecursiveMap<RvNode> | undefined

  get(nid: string, sid?: string): StoredRhineVar<RvNode> | undefined
}
