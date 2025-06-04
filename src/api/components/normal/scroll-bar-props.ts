import { ReactNode } from 'react'

import { DivProps } from '@/api/components/interface/base-types'

export interface ScrollBarProps extends DivProps {
  children: ReactNode | undefined
  className?: string
  drawer?: boolean
}
