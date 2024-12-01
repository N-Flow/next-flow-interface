import {DivProps} from "../interface/base-types";

export interface AnchorProps extends DivProps {
  list: string[]
  value: number
  onSelectChange: (value: number) => void
}
