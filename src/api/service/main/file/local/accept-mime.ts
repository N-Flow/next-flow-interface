import {fileTypeFromBlob, fileTypeFromBuffer, fileTypeFromFile, fileTypeFromStream} from "file-type";
import {RvAttachType} from "../../../sync/interface/resource/rv-attach-type.enum"
import {BaseTexture, Material} from "@babylonjs/core";
import type {AnyWebByteStream} from "strtok3";


export default class AcceptMime {
  
  static MESH = 'babylonjs/mesh'
  static LIGHT = 'babylonjs/light'
  static CAMERA = 'babylonjs/camera'
  static TEXTURE = 'babylonjs/texture'
  static MATERIAL = 'babylonjs/material'
  static UV = 'babylonjs/uv'
  static ANIMATION = 'babylonjs/animation'

  static EXTENSION_TEXTURE = 'babylonjs/texture'
  static EXTENSION_MATERIAL = 'babylonjs/material'
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


  static async getMimeByObject(object?: File | Blob | BaseTexture | Material | any) {
    if (object && object instanceof Blob) {
      const ftr = await fileTypeFromBlob(object)
      return ftr?.mime ?? AcceptMime.UNKNOWN
    }
    return AcceptMime.UNKNOWN
  }

  static async getMimeByPath(path?: string) {
    if (path) {
      const mime = (await import('mime')).default
      return mime.getType(path) ?? AcceptMime.UNKNOWN
    }
    return AcceptMime.UNKNOWN
  }

  static async getMimeByUrl(url?: string) {
    if (url) {
      const response = await fetch(url)
      const ftr = await fileTypeFromStream(response.body)
      return ftr?.mime ?? AcceptMime.UNKNOWN
    }
    return AcceptMime.UNKNOWN
  }

  static async getMimeByBuffer(buffer?: ArrayBuffer | Uint8Array) {
    if (buffer) {
      const ftr = await fileTypeFromBuffer(buffer)
      return ftr?.mime ?? AcceptMime.UNKNOWN
    }
    return AcceptMime.UNKNOWN
  }

  static async getMimeByStream(stream: AnyWebByteStream) {
    if (stream) {
      const ftr = await fileTypeFromStream(stream)
      return ftr?.mime ?? AcceptMime.UNKNOWN
    }
    return AcceptMime.UNKNOWN
  }

  // 通用获取 Mime 函数
  static async getMime(
    input?: File | Blob | string | ArrayBuffer | Uint8Array | AnyWebByteStream | BaseTexture | Material | any
  ): Promise<string> {
    if (!input) {
      return AcceptMime.UNKNOWN
    } else if (typeof ReadableStream !== 'undefined' && input instanceof ReadableStream) {
      return this.getMimeByStream(input);
    } else if (input instanceof Blob) {
      return this.getMimeByObject(input);
    } else if (typeof input === 'string') {
      if (input.startsWith('http://') || input.startsWith('https://')) {
        return this.getMimeByUrl(input)
      } else {
        return this.getMimeByPath(input)
      }
    } else if (input instanceof ArrayBuffer || input instanceof Uint8Array) {
      return this.getMimeByBuffer(input)
    } else if (input instanceof BaseTexture) {
      return AcceptMime.TEXTURE
    } else if (input instanceof Material) {
      return AcceptMime.MATERIAL
    }
    return AcceptMime.UNKNOWN
  }


  
  static getSupportModel() {
    return [
      AcceptMime.GLB,
      AcceptMime.GLTF,
      AcceptMime.STL,
      AcceptMime.OBJ,
    ]
  }

  static getSupportAudio() {
    return [
      AcceptMime.MP3,
      AcceptMime.WAV,
      AcceptMime.AAC,
      AcceptMime.OGG,
      AcceptMime.FLAC,
      AcceptMime.OPUS,
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
  
  static getSupportAudioExtension() {
    return [
      AcceptMime.EXTENSION_MP3,
      AcceptMime.EXTENSION_WAV,
      AcceptMime.EXTENSION_AAC,
      AcceptMime.EXTENSION_OGG,
      AcceptMime.EXTENSION_FLAC,
      AcceptMime.EXTENSION_OPUS,
    ]
  }
  
  static getSupportImage() {
    return [
      AcceptMime.JPG,
      AcceptMime.PNG,
      AcceptMime.GIF,
      AcceptMime.BMP,
      AcceptMime.WebP,
      AcceptMime.SVG,
      AcceptMime.TIFF,
      AcceptMime.ICO,
      AcceptMime.HEIF,
      AcceptMime.AVIF,
    ]
  }
  
  static getSupportImageExtension() {
    return [
      AcceptMime.EXTENSION_JPG,
      AcceptMime.EXTENSION_JPEG,
      AcceptMime.EXTENSION_PNG,
      AcceptMime.EXTENSION_GIF,
      AcceptMime.EXTENSION_BMP,
      AcceptMime.EXTENSION_WEBP,
      AcceptMime.EXTENSION_SVG,
      AcceptMime.EXTENSION_TIFF,
      AcceptMime.EXTENSION_ICO,
      AcceptMime.EXTENSION_HEIF,
      AcceptMime.EXTENSION_AVIF,
    ]
  }
  
  static getSupportVideo() {
    return [
      AcceptMime.MP4,
      AcceptMime.WebM,
      AcceptMime.AVI,
      AcceptMime.MPEG,
      AcceptMime.MOV,
      AcceptMime.WMV,
      AcceptMime.FLV,
      AcceptMime.OGV,
      AcceptMime.GP3,
      AcceptMime.MKV,
    ]
  }
  
  static getSupportVideoExtension() {
    return [
      AcceptMime.EXTENSION_MP4,
      AcceptMime.EXTENSION_WEBM,
      AcceptMime.EXTENSION_AVI,
      AcceptMime.EXTENSION_MPEG,
      AcceptMime.EXTENSION_MOV,
      AcceptMime.EXTENSION_WMV,
      AcceptMime.EXTENSION_FLV,
      AcceptMime.EXTENSION_OGV,
      AcceptMime.EXTENSION_GP3,
      AcceptMime.EXTENSION_MKV,
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
  
  static getExtensionByMime(mime: string = AcceptMime.UNKNOWN) {
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
      case AcceptMime.FLAC:
        return AcceptMime.EXTENSION_FLAC
      case AcceptMime.OPUS:
        return AcceptMime.EXTENSION_OPUS
      case AcceptMime.JPG:
        return AcceptMime.EXTENSION_JPG
      case AcceptMime.PNG:
        return AcceptMime.EXTENSION_PNG
      case AcceptMime.GIF:
        return AcceptMime.EXTENSION_GIF
      case AcceptMime.BMP:
        return AcceptMime.EXTENSION_BMP
      case AcceptMime.WebP:
        return AcceptMime.EXTENSION_WEBP
      case AcceptMime.SVG:
        return AcceptMime.EXTENSION_SVG
      case AcceptMime.TIFF:
        return AcceptMime.EXTENSION_TIFF
      case AcceptMime.ICO:
        return AcceptMime.EXTENSION_ICO
      case AcceptMime.HEIF:
        return AcceptMime.EXTENSION_HEIF
      case AcceptMime.AVIF:
        return AcceptMime.EXTENSION_AVIF
      case AcceptMime.MP4:
        return AcceptMime.EXTENSION_MP4
      case AcceptMime.WebM:
        return AcceptMime.EXTENSION_WEBM
      case AcceptMime.AVI:
        return AcceptMime.EXTENSION_AVI
      case AcceptMime.MPEG:
        return AcceptMime.EXTENSION_MPEG
      case AcceptMime.MOV:
        return AcceptMime.EXTENSION_MOV
      case AcceptMime.WMV:
        return AcceptMime.EXTENSION_WMV
      case AcceptMime.FLV:
        return AcceptMime.EXTENSION_FLV
      case AcceptMime.OGV:
        return AcceptMime.EXTENSION_OGV
      case AcceptMime.GP3:
        return AcceptMime.EXTENSION_GP3
      case AcceptMime.MKV:
        return AcceptMime.EXTENSION_MKV
      case AcceptMime.ANY:
        return ''
      case AcceptMime.UNKNOWN:
        return ''
      default:
        return ''
    }
  }
  
  static getMimeByExtension(extension: string = '') {
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
      case AcceptMime.EXTENSION_FLAC:
        return AcceptMime.FLAC
      case AcceptMime.EXTENSION_OPUS:
        return AcceptMime.OPUS
      case AcceptMime.EXTENSION_JPG:
        return AcceptMime.JPG
      case AcceptMime.EXTENSION_PNG:
        return AcceptMime.PNG
      case AcceptMime.EXTENSION_GIF:
        return AcceptMime.GIF
      case AcceptMime.EXTENSION_BMP:
        return AcceptMime.BMP
      case AcceptMime.EXTENSION_WEBP:
        return AcceptMime.WebP
      case AcceptMime.EXTENSION_SVG:
        return AcceptMime.SVG
      case AcceptMime.EXTENSION_TIFF:
        return AcceptMime.TIFF
      case AcceptMime.EXTENSION_ICO:
        return AcceptMime.ICO
      case AcceptMime.EXTENSION_HEIF:
        return AcceptMime.HEIF
      case AcceptMime.EXTENSION_AVIF:
        return AcceptMime.AVIF
      case AcceptMime.EXTENSION_MP4:
        return AcceptMime.MP4
      case AcceptMime.EXTENSION_WEBM:
        return AcceptMime.WebM
      case AcceptMime.EXTENSION_AVI:
        return AcceptMime.AVI
      case AcceptMime.EXTENSION_MPEG:
        return AcceptMime.MPEG
      case AcceptMime.EXTENSION_MOV:
        return AcceptMime.MOV
      case AcceptMime.EXTENSION_WMV:
        return AcceptMime.WMV
      case AcceptMime.EXTENSION_FLV:
        return AcceptMime.FLV
      case AcceptMime.EXTENSION_OGV:
        return AcceptMime.OGV
      case AcceptMime.EXTENSION_GP3:
        return AcceptMime.GP3
      case AcceptMime.EXTENSION_MKV:
        return AcceptMime.MKV
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


