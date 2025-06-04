export default interface ModulePreloaderApi {
  INTERVAL: number
  TIMEOUT: number

  EDITOR_TASKS: (() => Promise<void>)[]
  VIEWER_TASKS: (() => Promise<void>)[]
  GENERAL_TASKS: (() => Promise<void>)[]

  state: {
    showComponents: string[]
  }

  addTask(task: () => Promise<void>): void

  initialized: boolean

  startProcessing(): void
}
