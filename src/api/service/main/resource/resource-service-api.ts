import FileData from '@/api/service/main/resource/dto/file-data.interface'

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

  upload(file: File, fid?: string): void

  uploadMulti(
    fileList: FileList | File[] | File | null | undefined,
    check?: boolean,
    fidList?: string[],
  ): void

  addByOssUrl(ossUrl: string, name?: string, fid?: string, check?: boolean): Promise<string>

  generateDescribeAndPreview(file: File): Promise<[string, File | null]>

  generatePreviewFile(img: HTMLImageElement | HTMLVideoElement, name: string): Promise<File>

  generateId(): string
}
