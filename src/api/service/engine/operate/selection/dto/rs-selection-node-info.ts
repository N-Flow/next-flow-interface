import RvModel from "@/api/service/sync/interface/model/rv-model.interface"

export default interface RsSelectionNodeInfo {
  nid: string
  nodeName: string
  babylonNode: any
  uniqueId: number
  
  mid: string
  modelLoadName: string
  rvModel: RvModel
  
  isTransformNode: boolean
  isAbstractMesh: boolean
  isMesh: boolean
  
  isCoordinateFlip: boolean
  isCoordinateRotation: boolean
  
  hasGeometry: boolean
  
  isRoot: boolean
  childrenNumber: number
  
  supportQuaternion: boolean
  
  animationNumber: number
  skeletonNumber: number
  
  hasMaterial: boolean
  isSupportMaterial: boolean
  supportEditMaterial: boolean
}


