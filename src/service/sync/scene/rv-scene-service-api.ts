import { RecursiveMap } from 'rhine-var'

import RvSceneNode from '../interface/scene/rv-scene-node.interface'

export interface RvSceneNodeWithRelatedInfo extends RvSceneNode {
  children: string[] // 无序
  parents: string[] // 从近到远
}

export default interface RvSceneServiceApi {
  scene: RecursiveMap<RvSceneNode>

  getRvSceneNodeWithRelatedInfoList(): RvSceneNodeWithRelatedInfo[]
}
