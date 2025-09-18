import { FunctionComponent } from 'react'

import DialogCreateOptions from '@/api/service/main/dialog/dto/dialog-create-options.interface'

import { ThemeColor } from '../theme/dto/theme-color.enum'

export enum DialogContentAlign {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

export default class Dialog {
  constructor(
    public options: DialogCreateOptions,

    public id: string,
    public title = '',
    public titleIcon: FunctionComponent | string | undefined = undefined,
    public content = '',
    public contentAlign: DialogContentAlign = DialogContentAlign.LEFT,
    public contentView: FunctionComponent | string | undefined = undefined,
    public icon: FunctionComponent | string | undefined = undefined,
    public view: FunctionComponent | string | undefined = undefined,

    public theme: ThemeColor = ThemeColor.BLUE,
    public leftMode = false,
    public className = '',
    public style: object = {},

    public confirmText = '',
    public cancelText = '',

    public enableInput = false,
    public defaultValue = '',
    public inputPlaceholder = '',
    public autoFocus: boolean = enableInput,
    public allowEmpty = false,
    public onChange: (value: string) => void = () => {
      /* Default input change handler */
    },
    public onCheck: (value: string) => boolean = () => true,

    public enableCloseButton = true,

    public onConfirm: (value: string) => void = () => {
      /* Default confirm handler */
    },
    public onCancel: () => void = () => {
      /* Default cancel handler */
    },
    public onClose: () => void = () => {
      /* Default close handler */
    },

    public onConfirmButtonClick: () => void = () => {
      /* Default confirm button click handler */
    },
    public onCancelButtonClick: () => void = () => {
      /* Default cancel button click handler */
    },
    public onOutsideClick: () => void = () => {
      /* Default outside click handler */
    },
    public onCloseButtonClick: () => void = () => {
      /* Default close button click handler */
    },

    public onRender: () => void = () => {
      /* Default render handler */
    },
    public onEffect: () => () => void = () => () => {
      /* Default effect cleanup */
    },

    public closeOnConfirm = true,
    public closeOnCancel = true,
    public closeOnOutsideClick = false,
    public closeOnCloseButtonClick = true,
    public alignButton = true,

    public inputValue: string = defaultValue,
    public createTime: Date = new Date(),
    public focusInput: () => void = () => {
      /* Default focus input handler */
    },
    public elements: Map<string, HTMLElement> = new Map(),
  ) {}

  static fromOptions(id: string, options: DialogCreateOptions): Dialog {
    return new Dialog(
      options,
      id,
      options.title,
      options.titleIcon,
      options.content,
      options.contentAlign,
      options.contentView,
      options.icon,
      options.view,
      options.theme,
      options.leftMode,
      options.className,
      options.style,
      options.confirmText,
      options.cancelText,
      options.enableInput,
      options.defaultValue,
      options.inputPlaceholder,
      options.autoFocus,
      options.allowEmpty,
      options.onChange,
      options.onCheck,
      options.enableCloseButton,
      options.onConfirm,
      options.onCancel,
      options.onClose,
      options.onConfirmButtonClick,
      options.onCancelButtonClick,
      options.onOutsideClick,
      options.onCloseButtonClick,
      options.onRender,
      options.onEffect,
      options.closeOnConfirm,
      options.closeOnCancel,
      options.closeOnOutsideClick,
      options.closeOnCloseButtonClick,
      options.alignButton,
    )
  }

  setHide: (value: boolean) => void = () => {
    /* Default set hide handler */
  }
}
