import {fileTypeFromBlob, fileTypeFromBuffer, fileTypeFromFile, fileTypeFromStream} from "file-type"
import {RvAttachType} from "../../../sync/interface/resource/rv-attach-type.enum"
import {AbstractMesh, BaseTexture, Material} from "@babylonjs/core"
import type {AnyWebByteStream} from "strtok3"


export default class AcceptMime {

  static ANY = '*/*'

  static UNKNOWN = 'unknown/unknown'

  static MESH = 'babylonjs/mesh'
  static LIGHT = 'babylonjs/light'
  static CAMERA = 'babylonjs/camera'
  static TEXTURE = 'babylonjs/texture'
  static MATERIAL = 'babylonjs/material'
  static UV = 'babylonjs/uv'
  static ANIMATION = 'babylonjs/animation'
  
  static GLB = 'model/gltf-binary'
  static GLTF = 'model/gltf+json'
  static STL = 'model/stl'
  static OBJ = 'model/obj'
  
  static MP3 = 'audio/mpeg'
  static WAV = 'audio/wav'
  static AAC = 'audio/aac'
  static OGG = 'audio/ogg'
  static FLAC = 'audio/flac'
  static OPUS = 'audio/opus'
  
  static JPG = 'image/jpeg'
  static PNG = 'image/png'
  static GIF = 'image/gif'
  static BMP = 'image/bmp'
  static WebP = 'image/webp'
  static SVG = 'image/svg+xml'
  static TIFF = 'image/tiff'
  static ICO = 'image/x-icon'
  static HEIF = 'image/heif'
  static AVIF = 'image/avif'
  
  static MP4 = 'video/mp4'
  static WebM = 'video/webm'
  static AVI = 'video/x-msvideo'
  static MPEG = 'video/mpeg'
  static MOV = 'video/quicktime'
  static WMV = 'video/x-ms-wmv'
  static FLV = 'video/x-flv'
  static OGV = 'video/ogg'
  static GP3 = 'video/3gpp'
  static MKV = 'video/x-matroska'

  static TXT = 'text/plain'
  static MARKDOWN = 'text/markdown'


  static SUPPORT_IMAGE_LIST = [
    AcceptMime.JPG,
    AcceptMime.PNG,
  ]

  static SUPPORT_MODEL_LIST = [
    AcceptMime.GLB,
    AcceptMime.GLTF,
    AcceptMime.STL,
    AcceptMime.OBJ,
  ]

  static SUPPORT_VIDEO_LIST = [
    AcceptMime.MP4,
  ]

  static SUPPORT_BABYLON_LIST = [
    AcceptMime.MESH,
    AcceptMime.LIGHT,
    AcceptMime.CAMERA,
    AcceptMime.TEXTURE,
    AcceptMime.MATERIAL,
    AcceptMime.UV,
    AcceptMime.ANIMATION,
  ]

  static SUPPORT_AUDIO_LIST = [
    AcceptMime.MP3,
    AcceptMime.WAV,
  ]

  static SUPPORT_TEXT_LIST = [
    AcceptMime.TXT,
  ]


  static SUPPORT_ALL_LIST = [
    ...AcceptMime.SUPPORT_IMAGE_LIST,
    ...AcceptMime.SUPPORT_MODEL_LIST,
    ...AcceptMime.SUPPORT_VIDEO_LIST,
    ...AcceptMime.SUPPORT_BABYLON_LIST,
    ...AcceptMime.SUPPORT_AUDIO_LIST,
    ...AcceptMime.SUPPORT_TEXT_LIST,
  ]

  static SUPPORT_FILE_LIST = [
    ...AcceptMime.SUPPORT_IMAGE_LIST,
    ...AcceptMime.SUPPORT_MODEL_LIST,
    ...AcceptMime.SUPPORT_VIDEO_LIST,
    ...AcceptMime.SUPPORT_AUDIO_LIST,
    ...AcceptMime.SUPPORT_TEXT_LIST,
  ]

  static SUPPORT_RENDER_LIST = [
    ...AcceptMime.SUPPORT_IMAGE_LIST,
    ...AcceptMime.SUPPORT_MODEL_LIST,
    ...AcceptMime.SUPPORT_VIDEO_LIST,
    ...AcceptMime.SUPPORT_TEXT_LIST,
  ]

  static SUPPORT_TEXTURE_LIST = [
    ...AcceptMime.SUPPORT_IMAGE_LIST,
    ...AcceptMime.SUPPORT_VIDEO_LIST,
    AcceptMime.TEXTURE,
  ]


  static ATTACH_LIST = [
    AcceptMime.TEXTURE,
    AcceptMime.MATERIAL,
    AcceptMime.UV,
  ]


  static async getMimeByBlob(object?: File | Blob) {
    if (object && object instanceof Blob) {
      const ftr = await fileTypeFromBlob(object)
      if (!ftr) {
        if (object instanceof File) {
          if (object.name.endsWith('.stl')) {
            return AcceptMime.STL
          }
        }
      }
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

  static async getMime(
    input?: File | Blob | string | ArrayBuffer | Uint8Array | AnyWebByteStream | BaseTexture | Material | any
  ): Promise<string> {
    if (!input) {
      return AcceptMime.UNKNOWN
    } else if (typeof ReadableStream !== 'undefined' && input instanceof ReadableStream) {
      return this.getMimeByStream(input)
    } else if (input instanceof Blob) {
      return this.getMimeByBlob(input)
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
    } else if (input instanceof AbstractMesh) {
      return AcceptMime.MESH
    }
    return AcceptMime.UNKNOWN
  }

  
  static async getExtension(mime: string = AcceptMime.UNKNOWN) {
    if (AcceptMime.isBabylon(mime) || AcceptMime.isAttach(mime)) {
      return mime
    }
    if (mime === AcceptMime.ANY || mime === AcceptMime.UNKNOWN) {
      return ''
    }
    const mimeConverter = (await import('mime')).default
    return mimeConverter.getExtension(mime) ?? ''
  }


  static isSupport(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_ALL_LIST.includes(mime)
  }

  static isSupportFile(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_FILE_LIST.includes(mime)
  }

  static isSupportImage(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_IMAGE_LIST.includes(mime)
  }

  static isSupportModel(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_MODEL_LIST.includes(mime)
  }

  static isSupportVideo(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_VIDEO_LIST.includes(mime)
  }

  static isSupportText(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_TEXT_LIST.includes(mime)
  }

  static isBabylon(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_BABYLON_LIST.includes(mime)
  }

  static isSupportAudio(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_AUDIO_LIST.includes(mime)
  }

  static isSupportRender(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_RENDER_LIST.includes(mime)
  }

  static isSupportTexture(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.SUPPORT_TEXTURE_LIST.includes(mime)
  }


  static isTexture(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return mime == AcceptMime.TEXTURE
  }
  
  static isMaterial(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return mime == AcceptMime.MATERIAL
  }

  static isUV(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return mime == AcceptMime.UV
  }


  static isAttach(mime: string = AcceptMime.UNKNOWN) {
    if (mime == AcceptMime.ANY) return true
    if (mime == AcceptMime.UNKNOWN) return false
    return AcceptMime.ATTACH_LIST.includes(mime)
  }

}


