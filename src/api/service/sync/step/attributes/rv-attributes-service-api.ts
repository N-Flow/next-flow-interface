import {RecursiveMap, RhineVarMap, StoredRhineVar} from "rhine-var";
import RvAttribute from "../../interface/step/attributes/rv-attribute.interface";

export default interface RvAttributesServiceApi {

  forEach(callback: (attributes: RhineVarMap<any>, sid: string) => void): void

  forEachNode(nid: string, callback: (attributes: RhineVarMap<any>, sid: string) => void): void

  setToAllStep(nid: string, key: string, value: any): void


  get(sid: string): RecursiveMap<RvAttribute> | undefined

  getNode(sid: string, nid: string): StoredRhineVar<RvAttribute> | undefined

}