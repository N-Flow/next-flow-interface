export async function computeSHA256(buffer: BufferSource): Promise<string> {
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer),
    hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

// Create a namespace object for backward compatibility
const CryptoUtils = {
  computeSHA256,
}

export default CryptoUtils
