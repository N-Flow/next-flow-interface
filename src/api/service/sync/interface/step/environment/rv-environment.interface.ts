import RvCamera from "@/api/service/sync/interface/step/environment/camera/rv-camera.interface"

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

  camera: RvCamera

  fog: {
    enable: boolean
    density: number
    color: string
  }

}
