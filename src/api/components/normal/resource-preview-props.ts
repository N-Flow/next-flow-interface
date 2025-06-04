import { DivProps } from '@/api/components/interface/base-types'

export default interface ResourcePreviewProps extends DivProps {
  className?: string
  mime?: string
  preview?: string
}
