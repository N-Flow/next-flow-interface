import { RecursiveMap } from 'rhine-var'

import RvSceneNode from '../interface/scene/rv-scene-node.interface'

export interface RvSceneNodeWithRelatedInfo extends RvSceneNode {
  children: string[] // 无序
  parents: string[] // 从近到远
}

export type NodeSubscriber = (nid: string) => void

export type NodeMoveSubscriber = (nid: string, from: string, to: string) => void

export default interface RvSceneServiceApi {
  scene: RecursiveMap<RvSceneNode>

  isDescendant(nid: string, from: string): boolean

  isAncestor(nid: string, of: string): boolean

  isParent(nid: string, of: string): boolean

  isChild(nid: string, of: string): boolean

  move(nid: string, newParent?: string): void

  subscribeNode(subscriber: NodeSubscriber): () => void

  unsubscribeNode(subscriber: NodeSubscriber): void

  subscribeNodeMove(subscriber: NodeMoveSubscriber): () => void

  unsubscribeNodeMove(subscriber: NodeMoveSubscriber): void

  getSortedRvSceneNodeWithRelatedInfoList(): RvSceneNodeWithRelatedInfo[]
}
