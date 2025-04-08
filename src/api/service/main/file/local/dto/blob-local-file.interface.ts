import BaseLocalData from "@/api/service/main/file/local/dto/base-local-file.interface";
import {LocalDataType} from "@/api/service/main/file/local/dto/local-file-type.enum";

export default interface BlobLocalData extends BaseLocalData {

  type: LocalDataType.BLOB

  blob: Blob | null

}
