import { DivProps } from '@/components/interface/base-types'

export default interface ResourcePreviewProps extends DivProps {
  className?: string
  mime?: string
  preview?: string
}
