import RvFileInfo from "@/api/service/sync/interface/file/info/rv-file-info.interface";

export default interface ResourceServiceApi {

  PREVIEW_IMAGE_WIDTH: number

  PREVIEW_IMAGE_HEIGHT: number


  generateFileInfoAndPreview(file: File): Promise<[RvFileInfo, File | null]>

  generatePreviewFile(img: HTMLImageElement | HTMLVideoElement, name: string): Promise<File>

}