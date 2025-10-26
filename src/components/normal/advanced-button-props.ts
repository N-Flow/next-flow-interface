import { MouseEventHandler } from 'react'

import { DivProps } from '@/components/interface/base-types'

export interface AdvancedButtonProps extends DivProps {
  onClick: MouseEventHandler<HTMLDivElement>
  text: string
}