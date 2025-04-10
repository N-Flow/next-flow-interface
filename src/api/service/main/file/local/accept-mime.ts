import { RvAttachType } from "../../../sync/interface/resource/rv-attach-type.enum"

export default class AcceptMime {
  
  static TEXTURE = 'babylonjs/texture'
  static EXTENSION_TEXTURE = 'babylonjs/texture'
  static MATERIAL = 'babylonjs/material'
  static EXTENSION_MATERIAL = 'babylonjs/material'
  static UV = 'babylonjs/uv'
  static EXTENSION_UV = 'babylonjs/uv'
  
  static GLB = 'model/gltf-binary'
  static GLTF = 'model/gltf+json'
  static STL = 'model/stl'
  static OBJ = 'model/obj'
  
  static EXTENSION_GLB = '.glb'
  static EXTENSION_GLTF = '.gltf'
  static EXTENSION_STL = '.stl'
  static EXTENSION_OBJ = '.obj'
  
  static MP3 = 'audio/mpeg'
  static WAV = 'audio/wav'
  static AAC = 'audio/aac'
  static OGG = 'audio/ogg'
  static FLAC = 'audio/flac'
  static OPUS = 'audio/opus'
  
  static EXTENSION_MP3 = '.mp3'
  static EXTENSION_WAV = '.wav'
  static EXTENSION_AAC = '.aac'
  static EXTENSION_OGG = '.ogg'
  static EXTENSION_FLAC = '.flac'
  static EXTENSION_OPUS = '.opus'
  
  static JPG = 'image/jpeg';
  static PNG = 'image/png';
  static GIF = 'image/gif';
  static BMP = 'image/bmp';
  static WebP = 'image/webp';
  static SVG = 'image/svg+xml';
  static TIFF = 'image/tiff';
  static ICO = 'image/x-icon';
  static HEIF = 'image/heif';
  static AVIF = 'image/avif';
  
  static EXTENSION_JPG = '.jpg';
  static EXTENSION_JPEG = '.jpeg';
  static EXTENSION_PNG = '.png';
  static EXTENSION_GIF = '.gif';
  static EXTENSION_BMP = '.bmp';
  static EXTENSION_WEBP = '.webp';
  static EXTENSION_SVG = '.svg';
  static EXTENSION_TIFF = '.tiff';
  static EXTENSION_ICO = '.ico';
  static EXTENSION_HEIF = '.heif';
  static EXTENSION_AVIF = '.avif';
  
  static MP4 = 'video/mp4';
  static WebM = 'video/webm';
  static AVI = 'video/x-msvideo';
  static MPEG = 'video/mpeg';
  static MOV = 'video/quicktime';
  static WMV = 'video/x-ms-wmv';
  static FLV = 'video/x-flv';
  static OGV = 'video/ogg';
  static GP3 = 'video/3gpp';
  static MKV = 'video/x-matroska';
  
  static EXTENSION_MP4 = '.mp4';
  static EXTENSION_WEBM = '.webm';
  static EXTENSION_AVI = '.avi';
  static EXTENSION_MPEG = '.mpeg';
  static EXTENSION_MOV = '.mov';
  static EXTENSION_WMV = '.wmv';
  static EXTENSION_FLV = '.flv';
  static EXTENSION_OGV = '.ogv';
  static EXTENSION_GP3 = '.3gp';
  static EXTENSION_MKV = '.mkv';
  
  static ANY = '*/*'

  static UNKNOWN = 'unknown/unknown'
  
  
  static getSupportModel() {
    return [
      AcceptMime.GLB,
      AcceptMime.GLTF,
      AcceptMime.STL,
      AcceptMime.OBJ,
    ]
  }
  
  static getSupportModelExtension() {
    return [
      AcceptMime.EXTENSION_GLB,
      AcceptMime.EXTENSION_GLTF,
      AcceptMime.EXTENSION_STL,
      AcceptMime.EXTENSION_OBJ,
    ]
  }
  
  static getSupportAudio() {
    return [
      AcceptMime.MP3,
      AcceptMime.WAV,
      AcceptMime.AAC,
      AcceptMime.OGG,
    ]
  }
  
  static getSupportAudioExtension() {
    return [
      AcceptMime.EXTENSION_MP3,
      AcceptMime.EXTENSION_WAV,
      AcceptMime.EXTENSION_AAC,
      AcceptMime.EXTENSION_OGG,
    ]
  }
  
  static getSupportImage() {
    return [
      AcceptMime.JPG,
      AcceptMime.PNG,
    ]
  }
  
  static getSupportImageExtension() {
    return [
      AcceptMime.EXTENSION_JPG,
      AcceptMime.EXTENSION_JPEG,
      AcceptMime.EXTENSION_PNG,
    ]
  }
  
  static getSupportVideo() {
    return [
      AcceptMime.MP4,
    ]
  }
  
  static getSupportVideoExtension() {
    return [
      AcceptMime.EXTENSION_MP4,
    ]
  }
  
  static getAllSupport() {
    return [
      ...AcceptMime.getSupportAudio(),
      ...AcceptMime.getSupportImage(),
      ...AcceptMime.getSupportVideo(),
      ...AcceptMime.getSupportModel(),
      ...AcceptMime.getSupportModelExtension(),
    ]
  }
  
  static getAllSupportExtension() {
    return [
      ...AcceptMime.getSupportAudioExtension(),
      ...AcceptMime.getSupportImageExtension(),
      ...AcceptMime.getSupportVideoExtension(),
      ...AcceptMime.getSupportModelExtension(),
    ]
  }
  
  static getSupportMedia(
    image: boolean = false,
    texture: boolean = false,
    video: boolean = false,
    audio: boolean = false,
  ) {
    let support = []
    if (image) {
      support.push(...AcceptMime.getSupportImage())
    }
    if (texture) {
      support.push(AcceptMime.TEXTURE)
    }
    if (video) {
      support.push(...AcceptMime.getSupportVideo())
    }
    if (audio) {
      support.push(...AcceptMime.getSupportAudio())
    }
    return support
  }

  static getExtensionByFilename(filename: string): string {
    if (!filename) return ''
    const parts = filename.split('.')
    return parts.length > 0 ? parts.pop() as string : ''
  }

  static getExtensionWithDot(filename: string): string {
    if (!filename) return ''
    const parts = filename.split('.')
    return '.' + (parts.length > 1 ? parts.pop() as string : '')
  }

  static getNameWithoutExtension(filename: string): string {
    const i = filename.lastIndexOf('.')
    return i > 0 ? filename.substring(0, i) : filename
  }

  static isSupportModel(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportModel().includes(mime)
  }
  
  static isSupportAudio(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportAudio().includes(mime)
  }
  
  static isSupportImage(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportImage().includes(mime)
  }
  
  static isSupportVideo(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportVideo().includes(mime)
  }
  
  static isSupport(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getAllSupport().includes(mime)
  }
  
  static isSupportModelExtension(filename: string) {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getSupportModelExtension().includes(extension)
  }
  
  static isSupportAudioExtension(filename: string) {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getSupportAudioExtension().includes(extension)
  }
  
  static isSupportImageExtension(filename: string) {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getSupportImageExtension().includes(extension)
  }
  
  static isSupportVideoExtension(filename: string) {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getSupportVideoExtension().includes(extension)
  }
  
  static isSupportExtension(filename: string) {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getAllSupportExtension().includes(extension)
  }
  
  static getExtensionByMime(mime: string) {
    switch (mime) {
      case AcceptMime.TEXTURE:
        return AcceptMime.EXTENSION_TEXTURE
      case AcceptMime.MATERIAL:
        return AcceptMime.EXTENSION_MATERIAL
      case AcceptMime.UV:
        return AcceptMime.EXTENSION_UV
      case AcceptMime.GLB:
        return AcceptMime.EXTENSION_GLB
      case AcceptMime.GLTF:
        return AcceptMime.EXTENSION_GLTF
      case AcceptMime.STL:
        return AcceptMime.EXTENSION_STL
      case AcceptMime.OBJ:
        return AcceptMime.EXTENSION_OBJ
      case AcceptMime.MP3:
        return AcceptMime.EXTENSION_MP3
      case AcceptMime.WAV:
        return AcceptMime.EXTENSION_WAV
      case AcceptMime.AAC:
        return AcceptMime.EXTENSION_AAC
      case AcceptMime.OGG:
        return AcceptMime.EXTENSION_OGG
      case AcceptMime.JPG:
        return AcceptMime.EXTENSION_JPG
      case AcceptMime.PNG:
        return AcceptMime.EXTENSION_PNG
      case AcceptMime.MP4:
        return AcceptMime.EXTENSION_MP4
      default:
        return AcceptMime.UNKNOWN
    }
  }
  
  static getMimeByExtension(extension: string) {
    switch (extension) {
      case AcceptMime.EXTENSION_TEXTURE:
        return AcceptMime.TEXTURE
      case AcceptMime.EXTENSION_MATERIAL:
        return AcceptMime.MATERIAL
      case AcceptMime.EXTENSION_UV:
        return AcceptMime.UV
      case AcceptMime.EXTENSION_GLB:
        return AcceptMime.GLB
      case AcceptMime.EXTENSION_GLTF:
        return AcceptMime.GLTF
      case AcceptMime.EXTENSION_STL:
        return AcceptMime.STL
      case AcceptMime.EXTENSION_OBJ:
        return AcceptMime.OBJ
      case AcceptMime.EXTENSION_MP3:
        return AcceptMime.MP3
      case AcceptMime.EXTENSION_WAV:
        return AcceptMime.WAV
      case AcceptMime.EXTENSION_AAC:
        return AcceptMime.AAC
      case AcceptMime.EXTENSION_OGG:
        return AcceptMime.OGG
      case AcceptMime.EXTENSION_JPG:
        return AcceptMime.JPG
      case AcceptMime.EXTENSION_PNG:
        return AcceptMime.PNG
      case AcceptMime.EXTENSION_MP4:
        return AcceptMime.MP4
      default:
        return AcceptMime.UNKNOWN
    }
  }
  
  static isSupportFrom(accepts: string[], type: string, filename: string, attachFrom: string = '') {
    if (attachFrom && accepts.includes(AcceptMime.TEXTURE)) {
      // WARNING: 暂定Attach文件都是Texture
      return true
    }
    let extension = this.getExtensionWithDot(filename)
    for (const accept of accepts) {
      if (type && accept == type) return true
      if (extension && accept == extension) return true
    }
  }

  
  static isTexture(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return mime == AcceptMime.TEXTURE || mime == AcceptMime.EXTENSION_TEXTURE
  }
  
  static isMaterial(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return mime == AcceptMime.MATERIAL || mime == AcceptMime.EXTENSION_MATERIAL
  }

  static isUV(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return mime == AcceptMime.UV || mime == AcceptMime.EXTENSION_UV
  }


  static rvAttachTypeToExtension(rvAttachType: RvAttachType) {
    if (rvAttachType === RvAttachType.TEXTURE) {
      return AcceptMime.EXTENSION_TEXTURE
    } else if (rvAttachType === RvAttachType.MATERIAL) {
      return AcceptMime.EXTENSION_MATERIAL
    } else if (rvAttachType === RvAttachType.UV) {
      return AcceptMime.EXTENSION_UV
    }
  }

  static rvAttachTypeToMime(rvAttachType: RvAttachType) {
    if (rvAttachType === RvAttachType.TEXTURE) {
      return AcceptMime.TEXTURE
    } else if (rvAttachType === RvAttachType.MATERIAL) {
      return AcceptMime.MATERIAL
    } else if (rvAttachType === RvAttachType.UV) {
      return AcceptMime.UV
    }
  }

  static isAttachTypeExtension(extension: string) {
    return extension == AcceptMime.EXTENSION_TEXTURE || extension == AcceptMime.EXTENSION_MATERIAL || extension == AcceptMime.EXTENSION_UV
  }

  static isAttachTypeMime(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    return mime == AcceptMime.TEXTURE || mime == AcceptMime.MATERIAL || mime == AcceptMime.UV
  }

}


