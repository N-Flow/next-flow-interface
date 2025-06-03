import BaseLocalData from "@/api/service/main/file/local/dto/base-local-data.interface"
import {LocalDataType} from "@/api/service/main/file/local/dto/local-data-type.enum"

export default interface ObjectLocalData extends BaseLocalData {

  type: LocalDataType.BLOB

  object: any | null

}
