
export default interface RvFileInfo {
  name: string
  size: number
  type: string
  lastModified: number  // timestamp of last modified

  preview: string  // url of picture or base64 string
  description: string
}