import { RecursiveMap, StoredRhineVar } from 'rhine-var'

import RvNode from '../../interface/step/node/rv-node.interface'

/**
 * 处理协同数据中的 Node 层级的数据
 */
export default interface RvNodeServiceApi {
  // 获取指定 Step 下的所有 RvNode 的 Map
  getMap(sid?: string): RecursiveMap<RvNode> | undefined

  // 获取指定 RvNode
  get(nid: string, sid?: string): StoredRhineVar<RvNode> | undefined

  // 获取当前 Step 下的所有 RvNode 的 Map
  getCurrentMap(): RecursiveMap<RvNode>

  // 若未初始化，则初始化 RvNode。仅确保节点本身存在
  initialize(nid: string): void

  // 若其中有未初始化的节点，则初始化这些 RvNode。仅确保节点本身存在
  multiInitialize(nidList: string[]): void

  // 是否已经初始化
  isInitialized(nid: string): boolean

  // 是否都已经初始化
  isAllInitialized(nidList: string[]): boolean

  // 指定任意范围遍历
  forEachAny(
    callback: (node: StoredRhineVar<RvNode>, sid: string, nid: string) => void,
    nidList?: string[],
    sidList?: string[],
  ): void

  // 遍历每个Step中的指定的一个Node
  forEach(callback: (node: StoredRhineVar<RvNode>, sid: string) => void, nid: string): void

  // 遍历每个Step中的指定的多个Node
  forEachMulti(callback: (nodes: Map<string, RvNode>, sid: string) => void, nidList: string[]): void

  // 遍历每个Step中的所有Node
  forEachMap(callback: (nodes: RecursiveMap<RvNode>, sid: string) => void): void

  // 重置所有 Step 下的所有 RvNode 数据。全部清空。
  resetAll(): void
}
