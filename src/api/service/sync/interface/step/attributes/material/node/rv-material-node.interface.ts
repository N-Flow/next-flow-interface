import { NodeMaterialBlockConnectionPointTypes } from '@babylonjs/core'

import { C3, C4 } from '@/type/general/color.type'

export interface RvMaterialNode {
  fid: string
  inputs: RvMaterialNodeInput[]
}

export interface RvMaterialNodeInput {
  type: NodeMaterialBlockConnectionPointTypes
  key: string
  value: string | number | C3 | C4
  range?: [number, number]
}
