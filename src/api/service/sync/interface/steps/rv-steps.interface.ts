import type { RhineVarMap } from 'rhine-var';
import RvCamera from "@/api/service/sync/interface/steps/camera/rv-camera.interface";
import RvEnvironment from "@/api/service/sync/interface/steps/environment/rv-environment.interface";
import RvConfiguration from "@/api/service/sync/interface/steps/configuration/rv-configuration.interface";

export default interface RvSteps {
  name: string
  sid: string
  attributes: RhineVarMap<any>

  camera: RvCamera
  configuration: RvConfiguration
  environment: RvEnvironment
}
