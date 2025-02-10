
export default interface HistoryManagerApi {

  operate: string

  undo(): void

  redo(): void

  check(operate: string): void

}
