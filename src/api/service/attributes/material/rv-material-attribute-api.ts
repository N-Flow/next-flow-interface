import RvMaterial from "@/api/service/sync/interface/step/attributes/material/rv-material.interface";
import {PBRMaterial} from "@babylonjs/core";

export default interface RvMaterialAttributeApi {

  key: string

  defaultValue: RvMaterial

  generate(nid: string): RvMaterial

  ensure(nid: string): boolean

}