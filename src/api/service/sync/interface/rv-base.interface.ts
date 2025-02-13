import type { RhineVarMap } from 'rhine-var';
import RvGlobal from "./global/rv-global.interface";
import RvStep from "./step/rv-step.interface";

export default interface RvBase {

  global: RvGlobal
  order: string[],
  steps: RhineVarMap<RvStep>,

  files: any[]
  models: any[]
  materials: {
    separate: {
      groups: any[],
      ignore: string[],
    },
    templates: {
    }
  }

  meetings: any[]

  version: {
    core: number,
    label: string,
  }
}
