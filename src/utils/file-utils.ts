import CryptoUtils from "./crypto-utils";

export default class FileUtils {

  static to3n(bn: number) {
    const integerPartLength = Math.floor(bn).toString().length
    const decimalPlaces = integerPartLength <= 1 ? 2 : 1
    return bn.toFixed(decimalPlaces)
  }

  static convertBytesToHigherUnit(bn: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0
    while (bn >= 1024 && i < units.length - 1) {
      bn /= 1024
      i++
    }
    let numberText = FileUtils.to3n(bn)
    if (numberText.endsWith('.0')) numberText = numberText.slice(0, -2)
    if (numberText.endsWith('.00')) numberText = numberText.slice(0, -3)
    return `${numberText} ${units[i]}`
  }

  static splitName(name: string): [string, string] {
    const index = name.lastIndexOf('.')
    if (index === -1) return [name, '']
    return [name.substring(0, index), name.substring(index + 1)]
  }

  static ensureFileArray(files: File | File[] | FileList | null | undefined): File[] {
    if (!files) return [];
    if (files instanceof File) return [files]
    if (files instanceof FileList) return Array.from(files)
    return files
  }

  static async chunkHash(file: File): Promise<string> {
    const CHUNKS_POSITIONS = [0.25, 0.5, 0.75]  // 25%, 50%, 75%
    const CHUNK_SIZE = 64 * 1024 // 64KB
    const SIZE_THRESHOLD = 1024 * 1024 // 1MB

    // 处理小文件（<=1MB）
    if (file.size <= SIZE_THRESHOLD) {
      const buffer = await file.arrayBuffer()
      return CryptoUtils.computeSHA256(buffer)
    }

    // 处理大文件（>1MB）

    // 选择三个位置的片段
    const positions = CHUNKS_POSITIONS.map(p => Math.floor(file.size * p))

    // 并行读取并计算各片段的哈希
    const partialHashes = await Promise.all(
      positions.map(async (position) => {
        const start = position
        const end = Math.min(start + CHUNK_SIZE, file.size)
        const chunk = file.slice(start, end)
        const buffer = await chunk.arrayBuffer()
        return CryptoUtils.computeSHA256(buffer)
      })
    );

    // 合并哈希并生成最终哈希
    const encoder = new TextEncoder()
    const combinedHashString = partialHashes.join('')
    const finalBuffer = encoder.encode(combinedHashString)

    return CryptoUtils.computeSHA256(finalBuffer)
  }

  /**
   * 判断两个文件是否相同
   *
   * @param file  目标文件
   * @param name  另一个文件的名称
   * @param size  另一个文件的大小
   * @param hash  另一个文件的哈希 (可选) (通过上方 chunkHash 函数计算得出)
   *
   * @returns  是否相同
   */
  static async isSameFile(file: File, name: string, size: number, hash?: string): Promise<boolean> {
    if (name === file.name && size === file.size) {
      if (hash) {
        if (hash === await FileUtils.chunkHash(file)) {
          return true
        }
      } else {
        return true
      }
    }
    return false
  }

}

