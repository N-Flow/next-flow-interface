import { MouseEvent } from 'react'

export interface ShowAttributeContextMenuOptions<T> {
  event: MouseEvent
  label?: string
  getValue?: () => T
  copy?: (value: T) => void
  batchApply?: (value: T) => void
  jumpToLearn?: () => void
  reset?: () => void
}

export type ShowAttributeContextMenu<T> = (options: ShowAttributeContextMenuOptions<T>) => void
