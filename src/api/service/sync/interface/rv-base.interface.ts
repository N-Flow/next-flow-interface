import type { RhineVarMap } from 'rhine-var';
import RvGlobal from "./global/rv-global.interface";
import RvStep from "./step/rv-step.interface";
import RvMaterials from "@/api/service/sync/interface/materials/rv-materials.interface";
import RvFile from "@/api/service/sync/interface/files/rv-file.interface";
import RvMeetings from "@/api/service/sync/interface/ meetings/rv-meetings.interface";
import RvModels from "@/api/service/sync/interface/models/rv-models.interface";
import RvVersion from "@/api/service/sync/interface/version/rv-version.interface";

export default interface RvBase {

  global: RvGlobal
  order: RhineVarMap<string>
  steps: RhineVarMap<RvStep>

  files: RvFile
  models: RvModels
  materials: RvMaterials

  meetings: RvMeetings

  version: RvVersion
}
