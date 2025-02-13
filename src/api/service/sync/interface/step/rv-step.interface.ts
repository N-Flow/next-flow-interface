import type { RhineVarMap } from 'rhine-var';
import RvCamera from "@/api/service/sync/interface/step/camera/rv-camera.interface";

export default interface RvStep {
  name: string
  sid: string
  attributes: RhineVarMap<any>

  camera: RvCamera
}
