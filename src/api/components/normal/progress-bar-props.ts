import React from 'react'

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  indeterminate?: boolean
  slowTransition?: boolean
  innerClassName?: string
}
