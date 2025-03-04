
export default class AcceptMime {
  
  static TEXTURE = 'babylonjs/texture'
  static EXTENSION_TEXTURE = 'babylonjs/texture'
  
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

  static getExtension(filename: string): string {
    if (!filename) return ''
    const parts = filename.split('.')
    return parts.length > 0 ? parts.pop() as string : ''
  }

  static getExtensionWithDot(filename: string): string {
    if (!filename) return ''
    const parts = filename.split('.')
    return '.' + (parts.length > 1 ? parts.pop() as string : '')
  }
  
  static isSupportModel(mime: string, filename = '') {
    if (mime == AcceptMime.ANY) return true
    if (AcceptMime.getSupportModel().includes(mime)) return true
    return AcceptMime.isSupportModelExtension(filename)
  }
  
  static isSupportAudio(mime: string) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportAudio().includes(mime)
  }
  
  static isSupportImage(mime: string) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportImage().includes(mime)
  }
  
  static isSupportVideo(mime: string) {
    if (mime == AcceptMime.ANY) return true
    return AcceptMime.getSupportVideo().includes(mime)
  }
  
  static isSupport(mime: string, filename = '') {
    if (mime == AcceptMime.ANY) return true
    if (AcceptMime.getAllSupport().includes(mime)) return true
    return AcceptMime.isSupportModelExtension(filename)
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
  
  static isSupportExtension(filename = '') {
    const extension = this.getExtensionWithDot(filename)
    return AcceptMime.getAllSupportExtension().includes(extension)
  }
  
  static getExtensionByMime(mime: string) {
    switch (mime) {
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
        return ''
    }
  }
  
  static getMimeByExtension(extension: string) {
    switch (extension) {
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
        return ''
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
  
  // 是StepFlow内置定义的特殊子文件
  static isStepFlowDefine(type: string) {
    return type.startsWith('sf/')
  }
  
  static isTexture(type: string) {
    return type == 'sf/texture'
  }
  
  static isNodeMaterial(type: string) {
    return type == 'sf/node-material'
  }
  
  static isPreviewImage(type: string) {
    return type == 'sf/image-preview'
  }
}


