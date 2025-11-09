import { MouseEvent } from 'react'

export interface ShowAttributeContextMenuOptions<T> {
  event: MouseEvent
  getValue?: () => T
  copy?: (value: T) => void
  batchApply?: (value: T) => void
  jumpToLearn?: () => void
  reset?: () => void
}

export type ShowAttributeContextMenu<T> = (options: ShowAttributeContextMenuOptions<T>) => void
