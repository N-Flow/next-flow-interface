
export default class CryptoUtils {

  static async computeSHA256(buffer: ArrayBuffer | Uint8Array<ArrayBufferLike>): Promise<string> {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

}
