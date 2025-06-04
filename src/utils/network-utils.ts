export default class NetworkUtils {
  static async fetchJsonWithRetry(url: string, retries = 3) {
    let lastError

    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`)
        }
        return await response.json()
      } catch (error) {
        lastError = error
        console.log(`Attempt ${i + 1} Failed: Retrying...\n${url}`)
      }
    }

    throw lastError
  }

  static async fetchBlobWithRetry(url: string, retries = 3) {
    let lastError

    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`)
        }
        return await response.blob()
      } catch (error) {
        lastError = error
        console.log(`Attempt ${i + 1} Failed: Retrying...\n${url}`)
      }
    }

    throw lastError
  }
}
