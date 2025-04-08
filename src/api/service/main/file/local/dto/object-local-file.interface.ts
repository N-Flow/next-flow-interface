import BaseLocalData from "@/api/service/main/file/local/dto/base-local-file.interface";
import {LocalDataType} from "@/api/service/main/file/local/dto/local-file-type.enum";

export default interface ObjectLocalData extends BaseLocalData {

  type: LocalDataType.BLOB

  object: any | null

}
