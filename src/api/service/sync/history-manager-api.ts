
export default interface HistoryManagerApi {

  operate: string

  undo(): void

  redo(): void

  check(operate: string): void

  stop(): void


  clear(): void

  clearUndoStack(): void

  clearRedoStack(): void


  removeFirst(operate?: string): boolean

  removeLast(operate?: string): boolean

}
