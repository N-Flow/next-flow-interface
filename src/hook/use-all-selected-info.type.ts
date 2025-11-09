import RsSelectionNodeInfo from '@/service/engine/operate/selection/dto/rs-selection-node-info'
import { RsSelectionMaterialInfo } from '@/service/engine/operate/selection/dto/rs-selection-state.interface'

export type UseAllSelectedInfo = () => {
  selected: RsSelectionNodeInfo[]
  materialInfo: RsSelectionMaterialInfo
  last: RsSelectionNodeInfo | null
}