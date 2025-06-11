import { ReactNode } from 'react'

import { DivPropsWithoutOnChange } from '@/api/components/interface/base-types'

export interface RsdCheckableButtonProps extends DivPropsWithoutOnChange {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
  children?: ReactNode
}
