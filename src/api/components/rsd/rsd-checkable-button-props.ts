import { ReactNode } from 'react'

import { DivProps } from '@/api/components/interface/base-types'

export interface RsdCheckableButtonProps extends DivProps {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
  theme?: string
  children?: ReactNode
}
