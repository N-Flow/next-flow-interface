import { Material, Node } from '@babylonjs/core'

import RvMaterial from '../../../../sync/interface/step/attributes/material/rv-material.interface'

export default interface RsSeparateServiceApi {
  get(nid: string, node?: Node): Promise<Material | null>

  getWithEnsureType(nid: string, rvMaterial: RvMaterial, node?: Node): Promise<Material | null>
}
