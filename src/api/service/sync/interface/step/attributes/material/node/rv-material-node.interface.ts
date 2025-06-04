import { NodeMaterialBlockConnectionPointTypes } from '@babylonjs/core'

export interface RvMaterialNode {
  fid: string
  inputs: RvMaterialNodeInput[]
}

export interface RvMaterialNodeInput {
  type: NodeMaterialBlockConnectionPointTypes
  key: string
  value: string | number
  range?: [number, number]
}
