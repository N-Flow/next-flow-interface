import {RvPath, StoredRhineVar} from "rhine-var";
import RvStep from "@/api/service/sync/interface/step/rv-step.interface";
import RvCameraLocation from "@/api/service/sync/interface/step/environment/camera/location/rv-camera-location.interface";


export default interface RsEnvironmentServiceApi {

  updateEnvironment(path: RvPath, step: StoredRhineVar<RvStep>): void

  getCurrentCameraLocation(): RvCameraLocation

}