import Dialog from '../dialog.class'

export default interface DialogController {
  id: string

  dialog: Dialog

  show(): void

  destroy(): void

  getInputValue(): string

  setInputValue(value: string): void

  focusInput(): void
}
