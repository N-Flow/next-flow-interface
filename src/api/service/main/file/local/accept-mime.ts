import { AbstractMesh, BaseTexture, Material } from '@babylonjs/core'
import { fileTypeFromBlob, fileTypeFromBuffer, fileTypeFromStream } from 'file-type'

import type { AnyWebByteStream } from 'strtok3'

export const ANY = '*/*'

export const UNKNOWN = 'unknown/unknown'

export const MESH = 'babylonjs/mesh'
export const LIGHT = 'babylonjs/light'
export const CAMERA = 'babylonjs/camera'
export const TEXTURE = 'babylonjs/texture'
export const MATERIAL = 'babylonjs/material'
export const UV = 'babylonjs/uv'
export const ANIMATION = 'babylonjs/animation'

export const GLB = 'model/gltf-binary'
export const GLTF = 'model/gltf+json'
export const STL = 'model/stl'
export const OBJ = 'model/obj'

export const MP3 = 'audio/mpeg'
export const WAV = 'audio/wav'
export const AAC = 'audio/aac'
export const OGG = 'audio/ogg'
export const FLAC = 'audio/flac'
export const OPUS = 'audio/opus'

export const JPG = 'image/jpeg'
export const PNG = 'image/png'
export const GIF = 'image/gif'
export const BMP = 'image/bmp'
export const WebP = 'image/webp'
export const SVG = 'image/svg+xml'
export const TIFF = 'image/tiff'
export const ICO = 'image/x-icon'
export const HEIF = 'image/heif'
export const AVIF = 'image/avif'

export const MP4 = 'video/mp4'
export const WebM = 'video/webm'
export const AVI = 'video/x-msvideo'
export const MPEG = 'video/mpeg'
export const MOV = 'video/quicktime'
export const WMV = 'video/x-ms-wmv'
export const FLV = 'video/x-flv'
export const OGV = 'video/ogg'
export const GP3 = 'video/3gpp'
export const MKV = 'video/x-matroska'

export const TXT = 'text/plain'
export const MARKDOWN = 'text/markdown'

export const SUPPORT_IMAGE_LIST = [JPG, PNG]

export const SUPPORT_MODEL_LIST = [GLB, GLTF, STL, OBJ]

export const SUPPORT_VIDEO_LIST = [MP4]

export const SUPPORT_BABYLON_LIST = [MESH, LIGHT, CAMERA, TEXTURE, MATERIAL, UV, ANIMATION]

export const SUPPORT_AUDIO_LIST = [MP3, WAV]

export const SUPPORT_TEXT_LIST = [TXT]

export const SUPPORT_ALL_LIST = [
  ...SUPPORT_IMAGE_LIST,
  ...SUPPORT_MODEL_LIST,
  ...SUPPORT_VIDEO_LIST,
  ...SUPPORT_BABYLON_LIST,
  ...SUPPORT_AUDIO_LIST,
  ...SUPPORT_TEXT_LIST,
]

export const SUPPORT_FILE_LIST = [
  ...SUPPORT_IMAGE_LIST,
  ...SUPPORT_MODEL_LIST,
  ...SUPPORT_VIDEO_LIST,
  ...SUPPORT_AUDIO_LIST,
  ...SUPPORT_TEXT_LIST,
]

export const SUPPORT_RENDER_LIST = [
  ...SUPPORT_IMAGE_LIST,
  ...SUPPORT_MODEL_LIST,
  ...SUPPORT_VIDEO_LIST,
  ...SUPPORT_TEXT_LIST,
]

export const SUPPORT_TEXTURE_LIST = [...SUPPORT_IMAGE_LIST, ...SUPPORT_VIDEO_LIST, TEXTURE]

export const ATTACH_LIST = [TEXTURE, MATERIAL, UV]

export async function getMimeByBlob(object?: File | Blob) {
  if (object && object instanceof Blob) {
    const ftr = await fileTypeFromBlob(object)
    if (!ftr) {
      if (object instanceof File) {
        if (object.name.endsWith('.stl')) {
          return STL
        }
      }
    }
    return ftr?.mime ?? UNKNOWN
  }
  return UNKNOWN
}

export async function getMimeByPath(path?: string) {
  if (path) {
    const mime = (await import('mime')).default
    return mime.getType(path) ?? UNKNOWN
  }
  return UNKNOWN
}

export async function getMimeByUrl(url?: string) {
  if (url) {
    const response = await fetch(url),
      ftr = await fileTypeFromStream(response.body)
    return ftr?.mime ?? UNKNOWN
  }
  return UNKNOWN
}

export async function getMimeByBuffer(buffer?: ArrayBuffer | Uint8Array) {
  if (buffer) {
    const ftr = await fileTypeFromBuffer(buffer)
    return ftr?.mime ?? UNKNOWN
  }
  return UNKNOWN
}

export async function getMimeByStream(stream: AnyWebByteStream) {
  const ftr = await fileTypeFromStream(stream)
  return ftr?.mime ?? UNKNOWN
}

export async function getMime(
  input?:
    | File
    | Blob
    | string
    | ArrayBuffer
    | Uint8Array
    | AnyWebByteStream
    | BaseTexture
    | Material,
): Promise<string> {
  if (!input) {
    return UNKNOWN
  } else if (typeof ReadableStream !== 'undefined' && input instanceof ReadableStream) {
    return getMimeByStream(input)
  } else if (input instanceof Blob) {
    return getMimeByBlob(input)
  } else if (typeof input === 'string') {
    if (input.startsWith('http://') || input.startsWith('https://')) {
      return getMimeByUrl(input)
    }
    return getMimeByPath(input)
  } else if (input instanceof ArrayBuffer || input instanceof Uint8Array) {
    return getMimeByBuffer(input)
  } else if (input instanceof BaseTexture) {
    return TEXTURE
  } else if (input instanceof Material) {
    return MATERIAL
  } else if (input instanceof AbstractMesh) {
    return MESH
  }
  return UNKNOWN
}

export async function getExtension(mime: string = UNKNOWN) {
  if (isBabylon(mime) || isAttach(mime)) {
    return mime
  }
  if (mime === ANY || mime === UNKNOWN) {
    return ''
  }
  const mimeConverter = (await import('mime')).default
  return mimeConverter.getExtension(mime) ?? ''
}

export function isSupport(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_ALL_LIST.includes(mime)
}

export function isSupportFile(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_FILE_LIST.includes(mime)
}

export function isSupportImage(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_IMAGE_LIST.includes(mime)
}

export function isSupportModel(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_MODEL_LIST.includes(mime)
}

export function isSupportVideo(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_VIDEO_LIST.includes(mime)
}

export function isSupportText(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_TEXT_LIST.includes(mime)
}

export function isBabylon(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_BABYLON_LIST.includes(mime)
}

export function isSupportAudio(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_AUDIO_LIST.includes(mime)
}

export function isSupportRender(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_RENDER_LIST.includes(mime)
}

export function isSupportTexture(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return SUPPORT_TEXTURE_LIST.includes(mime)
}

export function isTexture(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return mime == TEXTURE
}

export function isMaterial(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return mime == MATERIAL
}

export function isUV(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return mime == UV
}

export function isAttach(mime: string = UNKNOWN) {
  if (mime == ANY) {
    return true
  }
  if (mime == UNKNOWN) {
    return false
  }
  return ATTACH_LIST.includes(mime)
}

// Create a namespace object for backward compatibility
const AcceptMime = {
  ANY,
  UNKNOWN,
  MESH,
  LIGHT,
  CAMERA,
  TEXTURE,
  MATERIAL,
  UV,
  ANIMATION,
  GLB,
  GLTF,
  STL,
  OBJ,
  MP3,
  WAV,
  AAC,
  OGG,
  FLAC,
  OPUS,
  JPG,
  PNG,
  GIF,
  BMP,
  WebP,
  SVG,
  TIFF,
  ICO,
  HEIF,
  AVIF,
  MP4,
  WebM,
  AVI,
  MPEG,
  MOV,
  WMV,
  FLV,
  OGV,
  GP3,
  MKV,
  TXT,
  MARKDOWN,
  SUPPORT_IMAGE_LIST,
  SUPPORT_MODEL_LIST,
  SUPPORT_VIDEO_LIST,
  SUPPORT_BABYLON_LIST,
  SUPPORT_AUDIO_LIST,
  SUPPORT_TEXT_LIST,
  SUPPORT_ALL_LIST,
  SUPPORT_FILE_LIST,
  SUPPORT_RENDER_LIST,
  SUPPORT_TEXTURE_LIST,
  ATTACH_LIST,
  getMimeByBlob,
  getMimeByPath,
  getMimeByUrl,
  getMimeByBuffer,
  getMimeByStream,
  getMime,
  getExtension,
  isSupport,
  isSupportFile,
  isSupportImage,
  isSupportModel,
  isSupportVideo,
  isSupportText,
  isBabylon,
  isSupportAudio,
  isSupportRender,
  isSupportTexture,
  isTexture,
  isMaterial,
  isUV,
  isAttach,
}

export default AcceptMime
