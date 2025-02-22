import RvModel from "@/api/service/sync/interface/model/rv-model.interface";

export default interface ModelsListApi {

  modelsListKeys: string[]
  modelsList: RvModel[]

}