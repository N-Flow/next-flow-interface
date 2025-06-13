import { NodeMaterial } from '@babylonjs/core'

import { NodeMaterialInfo } from '@/api/service/engine/render/material/dto/node-material-info.interface'

export default interface RsNodeMaterialManagerApi {

  materials: NodeMaterialInfo[]

  has(nid: string): boolean

  add(nid: string, fid: string, material: NodeMaterial): void

  get(nid: string): NodeMaterialInfo | null

  set(nid: string, fid: string, material: NodeMaterial): void

  remove(nid: string): void

  waitFid(nid: string, fid: string): Promise<void>

  updateNodeMaterialTemplate(nid: string, fid: string, syncStateWhenCreate: boolean): Promise<boolean>

  uploadNodeMaterialTemplate(nid: string, fid: string, material: NodeMaterial): void

  nodeMaterialToFile(material: NodeMaterial): File

}