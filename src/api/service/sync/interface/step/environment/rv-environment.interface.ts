
export default interface RvEnvironment {
  skybox: {
    background: string
  }
  light: {
    intensity: number
    diffuseColor: string
    specularColor: string
  }
  ground: {
    opacityRate: number
    diffuseColor: string
    emissiveColor: string
    enableOnViewerMode: boolean
    enableOnEditorMode: boolean
  }
  shadow: {
    enable: boolean
    darkness: number
    blurOffset: number
    blurScale: number
    onlyOnGround: boolean
    normalBias: number
  }
  camera: {
    distanceMin: number
    distanceMax: number
    fov: number
  }
  fog: {
    enable: boolean
    density: number
    color: string
  }
}
