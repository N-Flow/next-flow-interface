
export default interface RvEnvironment {
  camera: {
    distanceMax: number
    distanceMin: number
    fov: number
  }
  fog: {
    color: string
    density: number
    enable: boolean
  }
  ground: {
    diffuseColor: string
    emissiveColor: string
    enableOnEditorMode: boolean
    enableOnViewerMode: boolean
    opacityRate: number
  }
  light: {
    diffuseColor: string
    intensity: number
    specularColor: string
  }
  shadow: {
    blurOffset: number
    blurScale: number
    darkness: number
    enable: boolean
    normalBias: number
    onlyOnGround: boolean
  }
  skybox: {
    background: string
  }
}
