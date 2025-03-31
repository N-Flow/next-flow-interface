
export interface RvMaterialTexture {
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