import {RhineVarMap} from "rhine-var";

export default interface RvAttributesServiceApi {

  forEach(callback: (attributes: RhineVarMap<any>, sid: string) => void): void

  forEachNode(nid: string, callback: (attributes: RhineVarMap<any>, sid: string) => void): void

  setToAll(nid: string, key: string, value: any): void

}