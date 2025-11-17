import { Node } from '@babylonjs/core'

import NodePair from '@/service/engine/render/model/dto/node-pair.interface'

export default interface RsNodeServiceApi {
  nodePairs: NodePair[]

  getNodePairByNid(nid: string): NodePair | null

  getNodePairByUniqueId(uniqueId: number): NodePair | null

  getNodeByNid(nid: string): Node | null

  getMidByNid(nid: string): string | null

  getNidByUniqueId(uniqueId: number): string | null

  getFidByMid(mid: string): string | null

  getFidByNid(nid: string): string | null

  subscribeNodePairs(subscriber: (pairs: NodePair[]) => void): () => void

  unsubscribeNodePairs(subscriber: (pairs: NodePair[]) => void): void
}
