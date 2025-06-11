export async function fetchJsonWithRetry(url: string, retries = 3): Promise<unknown> {
  let lastError: unknown

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP Error: Status ${response.status.toString()}`)
      }
      return await response.json()
    } catch (error) {
      lastError = error
      console.log(`Attempt ${(i + 1).toString()} Failed: Retrying...\n${url}`)
    }
  }

  throw lastError
}

export async function fetchBlobWithRetry(url: string, retries = 3): Promise<Blob> {
  let lastError: unknown

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP Error: Status ${response.status.toString()}`)
      }
      return await response.blob()
    } catch (error) {
      lastError = error
      console.log(`Attempt ${(i + 1).toString()} Failed: Retrying...\n${url}`)
    }
  }

  throw lastError
}

// Create a namespace object for backward compatibility
const NetworkUtils = {
  fetchJsonWithRetry,
  fetchBlobWithRetry,
}

export default NetworkUtils
