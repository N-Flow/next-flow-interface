import { RecursiveMap, StoredRhineVar } from 'rhine-var'

import RvNode from '../../interface/step/node/rv-node.interface'

export default interface RvNodeServiceApi {
  forEachMap(callback: (nodes: RecursiveMap<RvNode>, sid: string) => void): void

  forEach(nid: string, callback: (nodes: StoredRhineVar<RvNode>, sid: string) => void): void

  getMap(sid?: string): RecursiveMap<RvNode> | undefined

  get(nid: string, sid?: string): StoredRhineVar<RvNode> | undefined

  initialize(): void

  isInitialized(): void

  resetAll(): void
}
