import type { Attributes, FunctionComponent } from 'react'

export type MixView<T extends Attributes | null = null> = string | FunctionComponent<T>
