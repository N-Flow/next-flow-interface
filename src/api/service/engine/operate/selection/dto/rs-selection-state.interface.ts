import HighLightInfo from '@/api/service/engine/operate/selection/dto/hight-light-info.interface'
import RsSelectionNodeInfo from '@/api/service/engine/operate/selection/dto/rs-selection-node-info'

export default interface RsSelectionState {
  highlight: HighLightInfo[]
  selected: RsSelectionNodeInfo[]
  last: RsSelectionNodeInfo | null
  branchMode: boolean
  materialInfo: RsSelectionMaterialInfo
}

export interface RsSelectionMaterialInfo {
  allNumber: number
  supportEditMaterialNumber: number
  hasGeometryNumber: number
  hasOtherMaterialNumber: number
  hasChildrenNumber: number
  isAbstractMeshNumber: number
}
