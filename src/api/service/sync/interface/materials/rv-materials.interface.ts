import {RhineVarMap, RhineVarArray} from "rhine-var"

export default interface RvMaterials {
  separate: {
    groups: RhineVarArray<any>,
    ignore: RhineVarArray<any>,
  }
  templates: RhineVarMap<any>
}