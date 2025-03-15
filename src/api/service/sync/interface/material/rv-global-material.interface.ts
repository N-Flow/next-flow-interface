import {RhineVarMap, RhineVarArray} from "rhine-var"

export default interface RvGlobalMaterial {
  separate: {
    groups: RhineVarArray<any>,
    ignore: RhineVarArray<any>,
  }
  templates: RhineVarMap<any>
}