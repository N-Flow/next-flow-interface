import {RhineVarMap, RhineVarArray} from "rhine-var"

export default interface RvMaterial {
  separate: {
    groups: RhineVarArray<any>,
    ignore: RhineVarArray<any>,
  }
  templates: RhineVarMap<any>
}