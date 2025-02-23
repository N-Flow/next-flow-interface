import type { RhineVarMap } from 'rhine-var';
import RvGlobal from "./global/rv-global.interface";
import RvStep from "./step/rv-step.interface";
import RvMaterial from "@/api/service/sync/interface/material/rv-material.interface";
import RvFile from "@/api/service/sync/interface/file/rv-file.interface";
import RvMeeting from "@/api/service/sync/interface/meeting/rv-meeting.interface";
import RvModel from "@/api/service/sync/interface/model/rv-model.interface";
import RvVersion from "@/api/service/sync/interface/version/rv-version.interface";

export default interface RvBase {

  global: RvGlobal
  order: RhineVarMap<string>
  steps: RhineVarMap<RvStep>

  files: RhineVarMap<RvFile>
  models: RvModel
  materials: RvMaterial

  meetings: RvMeeting

  version: RvVersion
}
