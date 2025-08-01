import { HTMLAttributes, ReactNode } from 'react'

export interface ScrollBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode | undefined
  className?: string
  drawer?: boolean
}
