import RvCameraLocation
  from "@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface"

export default interface RvCamera {

  enable: boolean

  location: RvCameraLocation

  config: {
    easy: boolean
    distanceMin: number
    distanceMax: number
    fov: number
  }

}