import { ReactNode } from 'react'

import { DivPropsSimple } from '@/api/components/interface/base-types'

export interface RsdCheckableButtonProps extends DivPropsSimple {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
  children?: ReactNode
}
