import RvFileInfo from "@/api/service/sync/interface/file/info/rv-file-info.interface";
import FileData from "@/api/service/main/file/resource/dto/file-data.interface";

export default interface ResourceServiceApi {

  PREVIEW_IMAGE_WIDTH: number

  PREVIEW_IMAGE_HEIGHT: number


  dragState: {
    fid: string
    data: FileData | null
    x: number
    y: number
    offsetX: number
    offsetY: number
  }


  upload(fileList: FileList | File[] | File | null | undefined): void


  generateFileInfoAndPreview(file: File): Promise<[RvFileInfo, File | null]>

  generatePreviewFile(img: HTMLImageElement | HTMLVideoElement, name: string): Promise<File>

}