import {RvPath, StoredRhineVar} from "rhine-var"

import RvCameraLocation from "@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface"
import RvStep from "@/api/service/sync/interface/step/rv-step.interface"


export default interface RsEnvironmentServiceApi {

  updateEnvironment(path: RvPath, step: StoredRhineVar<RvStep>): void

  getCurrentCameraLocation(): RvCameraLocation

}