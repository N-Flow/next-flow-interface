import BaseLocalFile from "@/api/service/main/file/local/dto/base-local-file.interface";
import {LocalFileType} from "@/api/service/main/file/local/dto/local-file-type.enum";

export default interface ObjectLocalFile extends BaseLocalFile {

  type: LocalFileType.BLOB

  object: any | null

}
