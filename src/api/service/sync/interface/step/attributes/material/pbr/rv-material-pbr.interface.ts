
export interface RvMaterialPBR {
  basic: {
    albedoColor: string
    metallic: number
    roughness: number
    emissiveColor: string
    alpha: number
  }
  advance: {
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