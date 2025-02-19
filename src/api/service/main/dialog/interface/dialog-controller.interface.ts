import DialogCreateOptions from "./dialog-create-options.interface"

export default interface DialogController {

  id: string

  createTime: Date

  options: DialogCreateOptions

  show(): void

  destroy(): void

  getInputValue(): string

  setInputValue(value: string): void

  focusInput(): void

}
