import { TransformNode } from '@babylonjs/core/Meshes/transformNode'

import LabelInfo from '@/api/service/engine/render/label/dto/label-info'
import RvLabel from '@/api/service/sync/interface/step/attributes/label/rv-label.interface'


export default interface RsLabelServiceApi {

  labels: LabelInfo[]

  updateClick(nid: string | null | undefined): void

  getLabel(nid: string): LabelInfo | undefined

  ensureLabel(nid: string, node: TransformNode | null): LabelInfo

  removeLabel(nid: string): void

  updateLabelWithNid(nid: string, rvLabel: RvLabel): void

}