import {MaterialType} from "@/api/service/sync/interface/step/class/material-type.enum";
import {NodeMaterialBlockConnectionPointTypes} from "@babylonjs/core"

export interface RvMaterialState {
  general: RvMaterialGeneralState
  texture: RvMaterialTextureState
  pbr?: RvMaterialPBRState
  node?: RvMaterialNodeState
}

export interface RvMaterialGeneralState {
  isPickable: boolean
  visibility: number
  receiveShadows: boolean
  materialType: MaterialType
  isExtracted: boolean
}

export interface RvMaterialPBRState {
  basic: {
    albedoColor: string
    metallic: number
    roughness: number
    emissiveColor: string
    alpha: number

    reflectivityColor: string
    ambientColor: string
    indexOfRefraction: number
    metallicF0Factor: number
    reflectionColor: string
  }

  coat: {
    enable: boolean
    intensity: number
    roughness: number
    indexOfRefraction: number
    useRoughnessFromMainTexture: boolean

    clearCoatTexture: string,
    roughnessTexture: string,
    bumpTexture: string,

    enableTint: boolean
    tintColor: string
    atDistance: number
    tintThickness: number
  }
}

export interface RvMaterialTextureState {
  basic: {
    albedoTexture: string
    metallicRoughnessTexture: string
    bumpTexture: string
    emissiveTexture: string
    opacityTexture: string
    ambientTexture: string

    reflectionTexture: string
    metallicReflectanceTexture: string
    refractionTexture: string
    reflectivityTexture: string
    microSurfaceTexture: string
    lightMapTexture: string
    detailMapTexture: string
    reflectanceTexture: string

    tintTexture: string
  }

  extra: {
    texture1: string
    texture2: string
    texture3: string
    texture4: string
  }
}

export interface RvMaterialNodeState {
  template: string
  inputs: RvMaterialNodeInput[]
}

export interface RvMaterialNodeInput {
  type: NodeMaterialBlockConnectionPointTypes
  key: string
  value: string | number
  range?: [number, number]
}
