import {RecursiveMap, RhineVarMap, StoredRhineVar} from "rhine-var"
import RvAttributes from "../../interface/step/attributes/rv-attributes.interface"

export default interface RvAttributesServiceApi {

  forEach(callback: (attributes: RhineVarMap, sid: string) => void): void

  forEachNode(nid: string, callback: (attributes: RhineVarMap, sid: string) => void): void

  setToAllStep(nid: string, key: string, value: any): void


  get(sid: string): RecursiveMap<RvAttributes> | undefined

  getNode(sid: string, nid: string): StoredRhineVar<RvAttributes> | undefined

}