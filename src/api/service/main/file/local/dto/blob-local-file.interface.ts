import BaseLocalFile from "@/api/service/main/file/local/dto/base-local-file.interface";
import {LocalFileType} from "@/api/service/main/file/local/dto/local-file-type.enum";

export default interface BlobLocalFile extends BaseLocalFile {

  type: LocalFileType.BLOB

  blob: Blob | null

}
