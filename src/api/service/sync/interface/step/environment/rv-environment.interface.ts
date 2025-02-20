
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

    enable: boolean

    config: {
      easy: boolean
      distanceMin: number
      distanceMax: number
      fov: number
    }

    alpha: number
    beta: number
    radius: number

    target: {
      x: number
      y: number
      z: number
    }
  }

  fog: {
    enable: boolean
    density: number
    color: string
  }

}
