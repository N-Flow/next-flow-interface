import { NodeMaterial } from '@babylonjs/core'

export type NodeMaterialChangeListener = (nid: string, fid: string, material: NodeMaterial) => void
