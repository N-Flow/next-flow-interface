import RvGlobal from "./global/rv-global.interface";

export default interface RvBase {

  global: RvGlobal
  order: string[],
  steps: any[],

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
