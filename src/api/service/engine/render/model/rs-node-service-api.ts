import NodePair from "@/api/service/engine/render/model/dto/node-pair.interface"
import {Node} from '@babylonjs/core'

export default interface RsNodeServiceApi {

  nodePairs: NodePair[]


  getInfoMapByNid(nid: string): NodePair | null

  getInfoMapByUniqueId(uniqueId: number): NodePair | null


  getNodeByNid(nid: string): Node | null

  getMidByNid(nid: string): string | null


  getNidByUniqueId(uniqueId: number): string | null


  getFidByMid(mid: string): string | null

  getFidByNid(nid: string): string | null


  subscribeNodePairs(subscriber: (pairs: NodePair[]) => void): () => void

  unsubscribeNodePairs(subscriber: (pairs: NodePair[]) => void): void

}
