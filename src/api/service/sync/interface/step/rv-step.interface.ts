import type { RhineVarMap } from 'rhine-var';
import RvCamera from "@/api/service/sync/interface/step/camera/rv-camera.interface";
import RvEnvironment from "@/api/service/sync/interface/step/environment/rv-environment.interface";
import RvConfiguration from "@/api/service/sync/interface/step/configuration/rv-configuration.interface";

export default interface RvStep {
  name: string
  sid: string
  attributes: RhineVarMap<any>

  camera: RvCamera
  configuration: RvConfiguration
  environment: RvEnvironment
}
