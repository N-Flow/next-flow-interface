import { MouseEventHandler } from 'react'

import { DivProps } from '@/components/interface/base-types'

export interface PrimaryButtonProps extends DivProps {
  onClick: MouseEventHandler<HTMLDivElement>
  text: string
}